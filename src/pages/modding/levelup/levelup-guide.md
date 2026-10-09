# LevelUP Complete Guide

This document is the single-file reference for every player-facing, administrator, datapack, and mod-integration feature currently implemented by LevelUP (`levelup`), version `1.21.1-neo-5`, for Minecraft `1.21.1` and NeoForge `21.1`.

The values below come from the current source defaults. One Minecraft second is 20 ticks. LevelUP must be installed on both the client and server.

## What LevelUP Does

LevelUP provides one shared progression track that other mods and modpacks can use. Players collect **Level Points**, the configured progression curve converts those points into levels, and integrations can use those levels for requirements, rewards, milestones, or interface elements.

The mod includes:

- persistent player levels and Level Points;
- a configurable progression curve and maximum level;
- optional conversion of vanilla experience into Level Points;
- custom Level Point Orbs from eligible mob kills;
- top and bottom HUD layouts;
- an inventory-screen level bar;
- player nametag and tab-list levels;
- administrator and player commands;
- a server API, client API, NeoForge events, and entity-type tags for integrations.

## Basic Progression

1. Gain Level Points from enabled sources.
2. LevelUP applies the player's point multiplier.
3. The resulting total is checked against the level curve.
4. The player's level, highest reached level, and point total are saved.
5. The server fires progression events and synchronizes the client.
6. The HUD animates when the transaction requests an overlay.

LevelUP is server-authoritative. Clients render synchronized data but do not decide progression results.

## Level Points And Vanilla Experience

Level Points are LevelUP's progression material. They are separate from vanilla Minecraft experience unless `sources.accept_experience_as_levels` is enabled.

| Mode | Vanilla experience | Custom mob point-orbs | API and command point grants |
|---|---|---|---|
| Default (`false`) | Remains vanilla experience | Enabled when mob rules allow it | Enabled |
| Experience conversion (`true`) | Positive gains convert one-for-one into Level Points and do not fill the vanilla bar | Disabled | Enabled |

Negative vanilla experience changes are not converted. This prevents normal experience spending or removal from subtracting Level Points.

The conversion runs at low event priority so other mods can adjust the vanilla experience amount first. LevelUP converts the final positive amount.

## Default Progression Curve

For most levels, the cost of the next level is calculated as:

```text
round((base × (currentLevel + 1)^exponent + linear × currentLevel)
      × bandMultiplier
      × levelMultiplier)
```

Default values:

| Setting | Default |
|---|---:|
| Base points per level | 100 |
| Linear points per level | 20 |
| Exponent | 1.35 |
| Global level multiplier | 0.75 |
| Maximum level | 100 |

Curve bands:

| Current level | Band multiplier |
|---|---:|
| 0–9 | 0.70 |
| 10–49 | 1.00 |
| 50–89 | 1.25 |
| 90–99 | Special peak-band distribution |
| 100+ | 1.25 if the maximum is raised |

Levels 90–99 use a special bridge. The total cost of levels 0–89 is divided across those ten levels, including the remainder. This deliberately makes the final approach to the default level cap substantial.

## Player Data

LevelUP stores progression in the `levelup:player_progression` attachment.

| Field | Meaning | Default |
|---|---|---:|
| `level` | Current calculated level | 0 |
| `xp` | Stored Level Points; the serialized field keeps its legacy name | 0 |
| `multiplier` | Integer point-gain multiplier | 1 |
| `locked_level` | Per-player cap; `-1` means unlocked | -1 |
| `highest_level_reached` | Highest level recorded for the player | 0 |

The attachment is copied on death. Normal player death does not reset LevelUP progression.

## Effective Maximum Level

The effective cap is the lower of:

- the configured or runtime maximum level; and
- the player's locked level, when a lock is active.

Stored points are clamped to the total required for the effective cap. Raising the cap later does not restore points that were discarded by a lower cap.

## Point Multipliers

Every player begins with multiplier `1`.

```text
applied points = incoming points × player multiplier
```

A multiplier of `0` blocks positive point gains for that player. Multipliers are non-negative integers and are saved with player data.

## Pause State

The global pause state blocks `addPoints`/experience-gain transactions. Direct administrator set operations can still change stored points or levels.

The pause state is runtime-only. It returns to active after a server restart.

## Mob Point Drops

When vanilla experience conversion is disabled, eligible mobs killed by a direct player melee attack can drop Level Point Orbs.

The default drop calculation is:

```text
floor(baseDropValue × max(1, mobMaxHealth / 20))
```

The default base value is `8`, and an enabled drop is always at least one point.

The kill must satisfy all of these conditions:

- the dead entity is a `Mob`;
- the damage type is `minecraft:player_attack`;
- the attacker and direct attacker are the same server player;
- Minecraft reports that player as the kill credit;
- the entity passes the configured eligibility rules;
- the calculated drop value is greater than zero.

Projectile, pet, environmental, and indirect kills do not create automatic Level Point Orbs.

## Mob Eligibility Order

Eligibility is evaluated in this order:

1. Experience conversion mode disables all automatic custom mob point-orbs.
2. A matching blacklist entry denies the mob.
3. A non-empty whitelist becomes the complete allow-list.
4. Tagged-only mode accepts `levelup:drops_levels` or the legacy `levelup:drop_levels` tag.
5. Disabled generic mob drops deny the mob.
6. Generic mode accepts mobs implementing vanilla `Enemy`.

The blacklist always takes priority over the whitelist.

## Adding Modded Mobs

The preferred integration is the entity-type tag:

`src/main/resources/data/levelup/tags/entity_types/drops_levels.json`

```json
{
  "replace": false,
  "values": [
    "yourmod:your_mob",
    "#yourmod:your_existing_mob_tag"
  ]
}
```

Enable `sources.only_tagged_mobs_drop_levels` when the tag should be the source of truth.

Server owners can instead use the common config:

```toml
mob_level_drop_whitelist = ["yourmod:your_mob"]
mob_level_drop_blacklist = ["minecraft:creeper"]
```

A runtime scoreboard tag such as `Tags:["drops_levels"]` is not an entity-type tag and is not used by LevelUP.

## Level Point Orbs

The custom entity ID is `levelup:level_orb`.

Point-orbs:

- follow nearby players within eight blocks;
- merge with compatible nearby point-orbs;
- use vanilla-style value bands and experience-orb visuals;
- apply a two-tick pickup delay;
- award their stored value as Level Points;
- expire after 6,000 ticks, or five minutes;
- save their health, age, value, and stack count.

The point-orb value bands are `1`, `3`, `7`, `17`, `37`, `73`, `149`, `307`, `617`, `1237`, and `2477`.

## Included Test Item

`levelup:test_skill_orb` grants 20 Level Points on use and applies a ten-tick cooldown. It is intended for development and pack testing.

## HUD And Inventory Display

LevelUP includes three related displays:

| Display | Purpose |
|---|---|
| Top HUD | Animated point-gain feedback near the top-center of the screen |
| Bottom HUD | Persistent LevelUP bar using the vanilla experience-bar area |
| Inventory bar | LevelUP progress shown on the inventory screen |

Bottom mode can hide the vanilla experience and jump-meter layers while LevelUP owns that space.

## Repositioning Bars

Use these player commands:

```text
/levelup gui hud
/levelup gui inventory
```

Drag the preview bar, then select **Done**. Done saves offsets to `levelup-client.toml`. **Reset** returns the preview to its default anchor, and **Cancel** discards unsaved movement.

Use these commands to switch HUD layout:

```text
/levelup hud top
/levelup hud bottom
```

The selected layout is saved in the client config. These commands use a server-to-client packet, so they work on dedicated servers.

## Player Labels

By default:

- player nametags are prefixed with `Lv<number>`;
- multiplayer tab-list names include `[Lv. <number>]`.

Nametag display is a client setting. Tab-list display is a common server setting.

## Commands

Run `/levelup` for the translated command summary.

`<targets>` accepts player names and vanilla selectors such as `@s`, `@p`, and `@a`.

| Command | Permission | Effect |
|---|---:|---|
| `/levelup` | Everyone | Shows the command summary |
| `/levelup query` | Player | Shows your level, points, multiplier, cap, and pause state |
| `/levelup query <targets>` | 2 | Shows progression for selected players |
| `/levelup hud top` | Player | Saves top HUD mode for the executing player |
| `/levelup hud bottom` | Player | Saves bottom HUD mode for the executing player |
| `/levelup gui hud` | Player | Opens the HUD bar position editor |
| `/levelup gui inventory` | Player | Opens the inventory bar position editor |
| `/levelup multiplier <amount> <targets>` | 2 | Sets selected players' point multiplier |
| `/levelup add level <amount> <targets>` | 2 | Adds or subtracts levels, clamped at zero and the effective cap |
| `/levelup add points <amount> <targets>` | 2 | Adds Level Points through the normal gain pipeline |
| `/levelup set level <amount> <targets>` | 2 | Sets selected players' level |
| `/levelup set points <amount> <targets>` | 2 | Sets selected players' total Level Points |
| `/levelup set max <amount>` | 2 | Sets the runtime global maximum level |
| `/levelup pause <true\|false>` | 2 | Pauses or resumes Level Point gains |
| `/levelup debug spawn_orbs <points>` | 2 | Spawns custom point-orbs at the command source |
| `/levelup debug drop_points <points> <targets>` | 2 | Applies a debug point grant through the normal gain pipeline |

`set max` is a runtime override. Change `progression.maxLevel` for a value that survives restarts.

## Common Configuration

File: `config/levelup-common.toml`

### Progression

| Key | Type | Default | Range | Purpose |
|---|---|---:|---|---|
| `progression.baseXpPerLevel` | integer | 100 | 1+ | Base curve term; legacy key name retains `Xp` |
| `progression.linearXpPerLevel` | integer | 20 | 0+ | Linear curve term |
| `progression.exponent` | decimal | 1.35 | 1.0–5.0 | Exponential curve growth |
| `progression.levelMultiplier` | decimal | 0.75 | 0.01–100.0 | Global curve-cost multiplier |
| `progression.maxLevel` | integer | 100 | 1+ | Persistent global level cap |

### Sources And Display

| Key | Type | Default | Purpose |
|---|---|---|---|
| `sources.accept_experience_as_levels` | boolean | `false` | Converts positive vanilla experience into Level Points and disables automatic custom mob point-orbs |
| `sources.mobs_drop_levels` | boolean | `true` | Enables generic hostile-mob point drops |
| `sources.mob_level_drop_base_value` | integer | `8` | Base mob point-orb value |
| `sources.only_tagged_mobs_drop_levels` | boolean | `false` | Uses entity-type tags instead of generic hostile detection |
| `sources.mob_level_drop_whitelist` | string list | `[]` | Explicit complete allow-list when non-empty |
| `sources.mob_level_drop_blacklist` | string list | `[]` | Final deny-list |
| `sources.show_level_in_tab_list` | boolean | `true` | Shows LevelUP levels in the multiplayer player list |

## Client Configuration

File: `config/levelup-client.toml`

| Key | Default | Purpose |
|---|---|---|
| `hud.showTopCenterLevelOverlay` | `true` | Master LevelUP HUD visibility |
| `hud.showTemporaryLevelOverlay` | `true` | Temporary point-gain animations |
| `hud.levelHudPosition` | `"top"` | `top` or `bottom` layout |
| `hud.levelHudStayOnScreen` | `false` | Keeps the HUD visible without a recent gain |
| `hud.levelHudColor` | `"#53a4bc"` | Six-digit progress and label tint |
| `hud.showInventoryLevelBar` | `true` | Inventory-screen level bar |
| `hud.showPlayerLevelBelowNametag` | `true` | Level prefix in player nametags |
| `hud.hudLevelBarOffsetX` | `0` | HUD horizontal pixel offset |
| `hud.hudLevelBarOffsetY` | `0` | HUD vertical pixel offset |
| `hud.inventoryLevelBarOffsetX` | `0` | Inventory horizontal pixel offset |
| `hud.inventoryLevelBarOffsetY` | `0` | Inventory vertical pixel offset |
| `hud.openHudLevelBarRepositionGui` | `false` | One-shot external trigger for the HUD editor |
| `hud.openInventoryLevelBarRepositionGui` | `false` | One-shot external trigger for the inventory editor |

Offset ranges are `-2000` to `2000`. The two one-shot GUI flags reset and save themselves after being consumed.

## Languages And Translation Keys

LevelUP currently includes:

- English (United States): `en_us.json`;
- Polish (Poland): `pl_pl.json`.

All player-visible labels, command feedback, tooltips, screen titles, and the resource-pack description use translation keys. Command literals such as `levelup`, `add`, and `points` are protocol syntax and are not translated.

To add a language, copy `assets/levelup/lang/en_us.json`, rename it to the required locale, and translate values without changing keys or `%s` placeholders.

## Server API

Main class: `com.revilo.levelup.api.LevelUpApi`

API version: `3`

Use point-named methods for new integrations:

```java
ResourceLocation source = ResourceLocation.fromNamespaceAndPath(
        "yourmod",
        "quest_complete"
);

LevelChangeResult result = LevelUpApi.addPoints(player, 25L, source);

if (result.changedLevel()) {
    // Grant rewards for the completed transaction.
}
```

Common reads:

```java
int level = LevelUpApi.getLevel(player);
long totalPoints = LevelUpApi.getPoints(player);
long pointsIntoLevel = LevelUpApi.getPointsIntoCurrentLevel(player);
long pointsRemaining = LevelUpApi.getPointsNeededForNextLevel(player);
float progress = LevelUpApi.getProgressToNextLevel(player);
boolean unlocked = LevelUpApi.meetsLevelRequirement(player, 20);
```

Direct mutations:

```java
LevelUpApi.setPoints(player, 5000L, source);
LevelUpApi.addLevels(player, 2, source);
LevelUpApi.setLevel(player, 25, source);
LevelUpApi.lockLevel(player, 30);
LevelUpApi.unlockLevel(player);
```

Legacy methods containing `Xp` or `Experience` remain available for compatibility. Their values now represent the same stored Level Points; new code should prefer point-named aliases where available.

## Transaction Results

`LevelChangeResult` contains:

- previous and new level;
- previous and new stored point total through legacy-named `previousExperience()` and `newExperience()` accessors;
- every crossed level;
- `changedLevel()`;
- `crossedMilestones(interval)`.

One large point grant is processed as one transaction and one synchronization, while still reporting every crossed level and milestone.

## Built-In Source IDs

| Source | Meaning |
|---|---|
| `levelup:unknown` | No explicit source supplied |
| `levelup:mob_kill` | Automatic mob reward |
| `levelup:gateway_complete` | Gateway-style integration reward |
| `levelup:quest_complete` | Quest reward |
| `levelup:objective_complete` | Objective reward |
| `levelup:orb_pickup` | Custom Level Point Orb pickup |
| `levelup:item_use` | Point-granting item |
| `levelup:command` | Administrator command |
| `levelup:vanilla_experience` | Converted vanilla experience |

Integration mods should define their own stable namespaced source IDs instead of reusing unrelated built-in IDs.

## Progression Events

| Event | Side | Purpose |
|---|---|---|
| `LevelUpXpGainedEvent` | Server | Cancellable incoming point gain; class name retained for compatibility |
| `PlayerExperienceChangeEvent` | Server | Stored point total changed; class name retained for compatibility |
| `LevelUpLevelChangedEvent` | Server | Current level changed |
| `LevelUpLevelChangedEvent.LevelUp` | Server | Fired once for each crossed upward level |
| `PlayerLevelChangeEvent` | Server | Detailed level transaction with reason and source |
| `LevelUpOutputEvent` | Server | Upward transaction summary |
| `PlayerLevelMilestoneEvent` | Server | Registered milestone crossed |
| `PlayerLevelDataLoadedEvent` | Server | Player progression became available on login |
| `LevelUpLevelLockChangedEvent` | Server | Per-player level lock changed |

Example subscriber:

```java
@SubscribeEvent
public static void onLevelChanged(PlayerLevelChangeEvent event) {
    if (event.getNewLevel() > event.getOldLevel()) {
        ServerPlayer player = event.getPlayer();
        // Apply your mod's reward here.
    }
}
```

## Milestones

Register a positive interval under a stable ID:

```java
LevelUpApi.registerMilestone(
        ResourceLocation.fromNamespaceAndPath("yourmod", "every_ten_levels"),
        10
);
```

When a transaction crosses one or more matching levels, `PlayerLevelMilestoneEvent` fires for each milestone. LevelUP includes a default five-level milestone registration.

## Client API

Main class: `com.revilo.levelup.api.LevelUpClientApi`

The client API can:

- open either reposition editor;
- read and persist bar offsets;
- return a local `LevelProgressDisplay` snapshot;
- register local data-update listeners;
- render the standard LevelUP bar;
- render level requirements and reward previews;
- append standardized requirement tooltips.

Example custom screen rendering:

```java
LevelUpClientApi.renderPlayerLevelBar(guiGraphics, left + 10, top + 20);
```

Example requirement tooltip:

```java
Player player = Minecraft.getInstance().player;
if (player != null) {
    LevelUpClientApi.appendLevelRequirementTooltip(tooltip, player, 15);
}
```

Point-preview helpers are available as `getPreviewProgressAfterPoints`, `getPointRewardPreviewLabel`, and `renderPointRewardPreviewBar`. XP-named preview methods remain compatibility aliases.

## Client HUD Events

These events are intended for client-side integrations:

| Event | Effect |
|---|---|
| `LevelUpHudDisplayEvent` | Shows a custom label and progress value for a duration |
| `LevelUpHudEnabledEvent` | Applies a runtime HUD visibility override |
| `LevelUpHudStayOnScreenEvent` | Applies a runtime always-visible override |
| `LevelUpHudPositionEvent` | Applies a runtime `top` or `bottom` position override |

The `/levelup hud` command changes and saves the client config through a packet. HUD events are runtime hooks and do not persist configuration.

## Networking And Synchronization

LevelUP protocol version `2` registers three server-to-client payloads:

| Payload | Purpose |
|---|---|
| `S2CPlayerProgressionSyncPacket` | Synchronizes local level, points, multiplier, highest level, and overlay request |
| `S2CPlayerLevelDisplaySyncPacket` | Synchronizes player levels used by nametags and the tab list |
| `S2CClientActionPacket` | Opens a reposition editor or saves top/bottom HUD mode |

Progression synchronizes after mutations, login, respawn, and dimension changes. Login also sends visible player-level snapshots needed for labels.

Client API references must stay out of common or dedicated-server class initializers.

## Maven Development Setup

Publish a local development artifact from the LevelUP checkout:

```shell
./gradlew publish
```

The publication includes the runtime jar, source jar, Javadoc jar, Gradle module metadata, and Maven POM under `repo/`.

Consumer setup:

```groovy
repositories {
    maven { url = uri("../LevelUP/repo") }
}

dependencies {
    compileOnly "com.revilo.levelup:levelup:1.21.1-neo-5"
    localRuntime "com.revilo.levelup:levelup:1.21.1-neo-5"
}
```

Declare the runtime relationship in the consuming mod:

```toml
[[dependencies.yourmod]]
modId="levelup"
mandatory=true
versionRange="[1.21.1-neo-5,)"
ordering="AFTER"
side="BOTH"
```

Use `mandatory=false` only when every LevelUP class reference is safely isolated behind a mod-presence check.

## Integration Checklist

1. Mutate progression only on the logical server.
2. Use a meaningful namespaced source ID.
3. Prefer point-named API aliases in new code.
4. Treat transaction results as authoritative.
5. Do not edit attachment data directly.
6. Keep client API classes out of server initialization paths.
7. Test at level zero, around band boundaries, and at the effective cap.
8. Test large grants that cross several levels.
9. Test locked players, multiplier zero, and global pause.
10. Test both default point-orb mode and vanilla experience conversion mode.
11. Test dedicated server login, respawn, reconnect, and dimension travel.

## Compatibility Notes

- Serialized point data retains the field name `xp` so existing saves remain valid.
- Existing API/event class names containing `Xp` or `Experience` remain available.
- `levelup:drop_levels` remains accepted as a legacy entity-type tag.
- Legacy common-config mob keys are migrated on startup.
- Runtime maximum-level and curve-multiplier overrides are not written to config.

## Recommended Future Work

- Publish release artifacts to a stable Maven repository.
- Add GameTests for vanilla experience conversion, mob eligibility precedence, point transactions, caps, and locks.
- Add complete JavaDoc comments to the public API and event classes.
- Move the development-only test item behind a dedicated debug or development setting.
- Provide a separate example integration mod instead of placing example subscribers in the runtime jar.
- Define a documented API deprecation window tied to `LevelUpApi.API_VERSION`.
