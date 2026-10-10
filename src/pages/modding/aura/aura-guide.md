# Aura Complete Guide

This document is a single-file reference for every player-facing system currently implemented by **Aura: Skills and Abilities** (`aura`), version `1.21.1-neo-6`, for Minecraft 1.21.1 and NeoForge 21.1. Aura requires LevelUP on both the client and server.

The values in this guide come from the current source defaults. One Minecraft second is 20 ticks. One heart is 2 health points.

---

# Getting Started

Aura adds two connected progression systems:

- **Skills** are permanent passive upgrades such as damage, movement speed, health, resistance, regeneration, drops, and XP gain.
- **Abilities** are active powers organized into seven elemental trees. Each tree has a core mastery and a chain of selectable specializations.

## Basic Progression

1. Gain LevelUP levels through the LevelUP mod's configured XP sources.
2. Every LevelUP level grants **1 Skill Point** by default.
3. Every second LevelUP level grants **1 Ability Point** by default.
4. Open the Skills and Abilities Book with `]`, use the physical book item, or open the Aura panel from the inventory.
5. Spend Skill Points on passive skills.
6. Spend Ability Points on core masteries and specialization nodes.
7. Select one active specialization per element and use its shared element key.

Level-up rewards are server-authoritative and are synchronized to the client. A level-up toast combines rewards received within five ticks into one notification.

## Default Controls

| Action | Default key |
|---|---|
| Open Aura Book | `]` |
| Fire ability | `Z` |
| Ice ability | `X` |
| Lightning ability | `C` |
| Poison ability | `V` |
| Force ability | `B` |
| Blood ability | `N` |
| Wind ability | `M` |
| Ability selector | Hold `Alt`, scroll, release `Alt` to cast |

Every specialization in an element shares that element's key. The selected specialization is cast; if none is selected, the client falls back to the first specialization in registry order.

---

# Skills and Abilities Book

Aura provides the same main content in two surfaces:

- **Standalone book:** opened with `]` or by using the Skills and Abilities Book item.
- **Inventory panel:** opened with the Aura button added to the vanilla inventory. The Aura panel and recipe book are mutually exclusive.

The main book has **Skills** and **Abilities** tabs plus bottom tabs for **Player** and **Settings**.

## Skills Page

The Skills page shows all five primary skill trees and their secondary nodes. Selecting a node opens its description, current level, maximum level, and current calculated bonus.

- Left-click or the upgrade button spends one Skill Point.
- Right-click or the downgrade button refunds one Skill Point.
- Creative players upgrade and downgrade without spending or refunding points.
- A secondary skill requires at least one level in its primary skill.
- A primary skill cannot be reduced from level 1 to 0 while any child skill is invested.

## Abilities Page

The Abilities page shows the seven core masteries and each specialization chain.

- Core mastery ranks are upgraded and downgraded.
- Specializations are unlocked by spending Ability Points, then selected for use.
- Each new rank costs `current rank + 1` Ability Points.
- Downgrading refunds the cost of the removed rank.
- A node cannot be removed if an immediately dependent node is still unlocked.
- Specializations can also require a minimum core affinity rank.
- The detail panel displays cooldown and ability-specific metrics such as duration, radius, projectiles, charges, healing, or movement distance.

## Player Page

The Player page summarizes:

- LevelUP player level
- Base attack damage
- Critical power multiplier
- Ability Power
- Armor-based defence display
- Movement speed
- Leaching chance
- Maximum health
- Selected abilities with their keybinds
- The five primary skill levels

## Settings Pages

### UI

- **Disable inventory aura book:** hides the inventory-integrated panel.
- **Block opening skills and abilities panel:** blocks both the book key and inventory panel.

### Features

- Spawn with Aura book
- Disable skills and abilities locally
- Enable ultimate abilities
- Block ability switching locally
- Block upgrading and downgrading locally
- Ability level/affinity locks
- Ability switch cooldowns
- Survival switch cooldown in seconds

### Style

- Toggle the ability HUD.
- Cycle HUD position through top-left, top-right, bottom-right, and bottom-left.

### LevelUP

This page reads and writes `levelup-client.toml` and `levelup-common.toml` and exposes:

- Top-center level overlay
- Temporary level overlay
- Inventory level bar
- Top/bottom HUD position
- Persistent level HUD
- HUD color
- LevelUP HUD and inventory reposition screens
- Base XP per level
- Linear XP per level
- XP exponent
- Level multiplier
- Maximum level
- Mob-kill XP toggle and amount
- Mob-tag-only level drop rule

The editor's fallback defaults are `100` base XP, `20` linear XP, exponent `1.35`, multiplier `0.75`, maximum level `500`, mob-kill XP enabled, and `8` XP per mob. These are LevelUP settings rather than Aura's own server config.

### Abilities

Despite the tab name, this page contains granular client-side visibility/use toggles for both skills and abilities:

- Every skill mastery/category
- Every individual skill
- Every ability element/mastery
- Every individual ability

These JSON toggles control Aura's local UI and key handling. They do not replace the server's authoritative `abilities.*` enable settings.

---

# Skill Points and Rules

Players begin with zero Skill Points and zero skill levels. Each skill rank costs one point. Skill levels, unspent points, and the one-time starting-book flag persist on the player and copy on death.

Equipment can add effective skill ranks without changing saved progression. Gameplay uses:

```text
effective skill level = max(0, saved level + floor(equipment skill bonus attribute))
```

Configured maximum levels limit saved ranks. Equipment bonuses may raise effective levels beyond those saved limits.

---

# Complete Skill Reference

## Strength Tree

| Skill | Default max | Default effect per level | Default maximum |
|---|---:|---:|---:|
| Strength | 10 | +0.5 attack damage | +5 damage |
| Power | 5 | +1 damage to arrow-sourced hits | +5 damage |
| Crit Power | 5 | +0.1x damage on falling critical hits | +50% damage |
| Haste | 2 | +2 break-speed units | +4 break speed |

Strength is a permanent `ADD_VALUE` attack-damage modifier. Power applies only when the direct damage entity is an `AbstractArrow`. Crit Power checks that the attacker is falling, airborne, not riding, and not in water or lava. Haste adds directly to NeoForge's break-speed event result.

## Resistance Tree

| Skill | Default max | Default effect per level | Default maximum |
|---|---:|---:|---:|
| Resistance | 10 | 5% less all incoming damage | 50% |
| Fire Resistance | 5 | 5% less fire damage | 25% |
| Projectile Resistance | 5 | 5% less projectile damage | 25% |
| Knockback Resistance | 5 | 5% less knockback | 25% |
| Blast Resistance | 5 | 5% less explosion damage | 25% |

General Resistance is applied first. Matching fire, projectile, or explosion resistance is then applied multiplicatively. Each damage-reduction calculation is hard-capped at 95%. Knockback Resistance is also installed as a knockback-resistance attribute and scales the knockback event strength, so both Minecraft's attribute handling and Aura's event reduction participate.

## Agility Tree

| Skill | Default max | Default effect per level | Default maximum |
|---|---:|---:|---:|
| Agility | 10 | +10% total movement speed | +100% |
| Leaping | 5 | +20% configured jump bonus | Jump Boost amplifier 1 at default max |
| Attack Speed | 5 | +5% total attack speed | +25% |
| Swimming Speed | 5 | +0.15 water movement efficiency | +0.75 |

Leaping is implemented as a refreshed Jump Boost effect. The amplifier is `floor(level × configured bonus)`, clamped from 0 to 4. At the default `0.20` scaling, levels 1–4 give Jump Boost I and level 5 gives Jump Boost II because amplifier 0 is effect level I.

## Vitality Tree

| Skill | Default max | Default effect per level | Default maximum |
|---|---:|---:|---:|
| Vitality | 10 | +1 heart maximum health | +10 hearts |
| Regeneration | 5 | Heal 0.05 health points each second | 0.25 health/second |
| Leaching | 5 | Unlocks life leach; rank does not change its chance or amount | See below |
| Immunity | 5 | 5% shorter and weaker harmful effects | 25% |

Leaching triggers on attacks against living mobs other than armor stands. Its chance depends on effective **Luck**, not Leaching rank:

```text
chance = 0.5% + 0.5% × effective Luck level
amount = 1% of the target's maximum health
```

On success, the stolen amount is added to the hit and heals the attacker for the same amount. Any positive effective Leaching level unlocks the mechanic.

Immunity intercepts newly applied harmful effects. It reduces both duration and effect strength by the configured percentage, rounding upward and never reducing either below a duration of one tick or amplifier 0.

## Luck Tree

| Skill | Default max | Default effect per level | Default maximum |
|---|---:|---:|---:|
| Luck | 10 | +1 Luck attribute | +10 Luck |
| Looting | 2 | 2% chance per dropped stack to add one item | 4% |
| Fortune | 2 | Multiplies drops from blocks whose id contains `ore` | 3x drops |
| Luck of the Sea | 5 | +1 Luck attribute | +5 Luck |
| XP Fortune | 3 | +50% positive vanilla XP gain | +150% |

Fortune does not simulate the vanilla Fortune enchantment. For every drop stack from a block whose registry path contains `ore`, it sets the stack count to `original × (bonus + 1)`. With default ranks, Fortune I doubles and Fortune II triples the stacks.

Luck of the Sea currently adds to the general Minecraft Luck attribute rather than a separate fishing-only attribute.

XP Fortune multiplies positive `PlayerXpEvent.XpChange` awards by `1 + 0.5 × level` and rounds to the nearest integer. It does not modify zero or negative XP changes.

## Skill Update Timing

Aura reapplies passive attributes, regeneration, and Leaping once per second. It also reapplies attributes immediately after login, respawn, dimension change, and a skill change. If maximum health falls, current health is clamped to the new maximum.

The older combat-kill and prevented-damage skill XP hooks currently return without awarding anything; LevelUP level events are the implemented source of Aura points.

---

# Ability Points, Unlocking, and Selection

Players start with zero Ability Points and no unlocked abilities.

## Upgrade Costs

| Rank purchased | Cost |
|---:|---:|
| 1 | 1 point |
| 2 | 2 points |
| 3 | 3 points |
| 4 | 4 points |
| 5 | 5 points |
| 6 | 6 points |

Therefore, a six-rank mastery costs 21 points, a five-rank mastery costs 15, and a four-rank mastery costs 10. Most specializations have one rank and cost one point. Blood Burst has five ranks and costs 15 points to maximize, although its combat scaling still comes from the Blood core rank.

## Tree Prerequisites

Each specialization requires its preceding node to have at least one saved rank. Unlocking a later node does not automatically select it. Only one specialization per element may be selected at a time.

## Affinity Locks

When affinity locks are enabled, the selected or used specialization requires this saved core mastery rank:

| Required core rank | Specializations |
|---:|---|
| 1 | Fire Aura, Fire Burst, Ice Aura, Ice Burst, Ice Glacier, Lightning Aura, Lightning Zap, Poison Aura, Poison Burst, Force Aegis, Force Burst, Blood Heal, Blood Cleanse, Wind Dash, Wind Leap, Wind Lunge |
| 2 | Fire Implode, Ice Implode, Ice Pierce, Lightning Implode, Lightning Strike, Poison Implode |
| 3 | Blood Burst |
| 4 | Blood Drain |
| 5 | Fire Storm, Ice Storm, Lightning Storm, Force Rampage |

The TOML creates one affinity value per ability, but the current runtime uses the fixed table above rather than reading those individual numeric entries. The global `affinityLocks.enabled` toggle is effective.

## Switching Restrictions

In survival, successfully casting an ability starts a default 1,200-tick/60-second switch cooldown for that element. During it, another specialization in that element cannot be selected. Switching is also rejected if either the current or target specialization is on its normal cast cooldown. Creative players bypass cast and switch cooldown restrictions.

External mods can cancel `AbilitySwitchEvent.Pre`; successful changes post `AbilitySwitchEvent.Post`.

## Optional XP Cost

`general.enableAbilityXpConsumption` is false by default. When enabled, a successful non-creative cast consumes total vanilla experience points:

```text
XP cost = 30 + 5 × (effective specialization rank - 1)
```

The cast is rejected if the player lacks the total XP. Most specializations therefore cost 30 XP; equipment ranks or Blood Burst ranks can raise the cost. Failed casts do not consume XP or start cooldowns.

---

# Ability Scaling

## Ability Power

Players have an `aura:ability_power` attribute with base `1.0`, minimum `0`, and maximum `1024`.

At Ability Power 1.0:

```text
base damage = configured damage × [1 + 0.15 × (effective core rank - 1) × primaryScalingMultiplier]
base radius = configured radius × [1 + 0.10 × (effective core rank - 1) × primaryScalingMultiplier]
base duration = configured duration × [1 + 0.10 × (effective core rank - 1) × primaryScalingMultiplier]
```

Ability Power multiplies damage directly. Radius, duration, and most mobility use a softer multiplier:

```text
power scale = 0.85 + 0.15 × Ability Power
```

Every damaging hit then receives another `+5%` per **saved** core mastery rank through the mastery damage bonus. Core mastery also provides 5% PvP resistance per saved rank, capped at 75%, against Aura ability damage of the same element.

## Cooldowns

For most abilities:

```text
cooldown = max(minimum, (configured ticks - 8 × (effective core rank - 1)) × cooldownMultiplier)
```

The usual minimum is 10 ticks. Force Rampage has a hard minimum of 1,800 ticks/90 seconds.

Exceptions:

- Aura/Nova abilities use `880 - 40 × (rank - 1)` ticks, minus another 80 ticks in final form, then apply the global cooldown multiplier. Their configured cooldown keys are not used at runtime.
- Lightning Storm is always 1,200 ticks/60 seconds. Its configured cooldown and global cooldown multiplier are not used.

## Final Forms

With ultimate abilities enabled, reaching the configured maximum **saved** rank of a core mastery turns its whole element into a final form:

| Element | Final form |
|---|---|
| Fire | Soulfire |
| Ice | Permafrost |
| Lightning | Plasma |
| Poison | Toxin |
| Force | Singularity |
| Blood | Bloodfire |
| Wind | Tempest |

Equipment bonus ranks improve normal scaling but do not unlock a final form; final forms check saved mastery rank.

---

# Complete Ability Defaults

All ability `Damage`, `Radius`, and `DurationTicks` config keys default to `6.0`, `3.0`, and `100` respectively. The table shows the remaining per-ability defaults and the actual primary range used by the mechanic at core rank 1 and Ability Power 1.0.

| Ability id | Max rank | Affinity | Base cooldown | Actual default range/use |
|---|---:|---:|---:|---|
| `fire` | 6 | 0 | 0 | Core mastery; not directly cast |
| `fire_nova` | 1 | 1 | 200 configured; 880 actual | Aura radius starts at 5 blocks |
| `fire_burst` | 1 | 1 | 120 | Projectile, 1.32 speed, 30-tick lifetime |
| `fire_implode` | 1 | 2 | 240 | 4-block centered area |
| `fire_storm` | 1 | 5 | 600 | 5.5-block centered area |
| `ice` | 6 | 0 | 0 | Core mastery; not directly cast |
| `ice_nova` | 1 | 1 | 200 configured; 880 actual | Aura radius starts at 5 blocks |
| `ice_burst` | 1 | 1 | 120 | Projectile, 1.32 speed, 30-tick lifetime |
| `ice_implode` | 1 | 2 | 240 | 4-block centered area |
| `ice_pierce` | 1 | 2 | 180 | 13-block ray |
| `ice_glacier` | 1 | 1 | 360 | 5-block centered area |
| `ice_storm` | 1 | 5 | 700 | 5.5-block centered area |
| `lightning` | 6 | 0 | 0 | Core mastery; not directly cast |
| `lightning_nova` | 1 | 1 | 220 configured; 880 actual | Aura radius starts at 5 blocks |
| `lightning_zap` | 1 | 1 | 180 | 6-block centered search |
| `lightning_implode` | 1 | 2 | 260 | 4-block centered area |
| `lightning_strike` | 1 | 2 | 120 | 5-block centered search; target must be in front |
| `lightning_storm` | 1 | 5 | 1,200 | 5.5-block centered area; cooldown fixed at 1,200 |
| `poison` | 6 | 0 | 0 | Core mastery; not directly cast |
| `poison_nova` | 1 | 1 | 200 configured; 880 actual | Aura radius starts at 5 blocks |
| `poison_burst` | 1 | 1 | 120 | Projectile, 1.32 speed, 30-tick lifetime |
| `poison_implode` | 1 | 2 | 260 | 4-block centered area |
| `force` | 5 | 0 | 0 | Core mastery; not directly cast |
| `force_aegis` | 1 | 1 | 260 | Self; grants hit-negating charges |
| `force_burst` | 1 | 1 | 180 | 4.5-block centered area |
| `force_rampage` | 1 | 5 | 1,800 | Self; duration starts at 100 ticks |
| `blood` | 4 | 0 | 0 | Core mastery; not directly cast |
| `blood_heal` | 1 | 1 | 180 | Self; final-form enemy aura is 5 blocks |
| `blood_cleanse` | 1 | 1 | 240 | Self; final-form transfer aura is 4 blocks |
| `blood_burst` | 5 | 3 | 160 | Health-powered projectiles |
| `blood_drain` | 1 | 4 | 240 | 15-block ray at base |
| `wind` | 4 | 0 | 0 | Core mastery; not directly cast |
| `wind_dash` | 1 | 1 | 120 | Self movement |
| `wind_leap` | 1 | 1 | 150 | Self movement |
| `wind_lunge` | 1 | 1 | 160 | 7-block centered search; target must be in front |

Cooldowns in the table are ticks. Divide by 20 for seconds.

---

# Fire and Soulfire

## Fire Aura

Activates a pulsing aura for `80 + 10 × (core rank - 1)` ticks. Its radius is `5 + (core rank - 1)` blocks. Every second it deals 45% of scaled damage to enemies in range and ignites them for the configured scaled duration in seconds.

Soulfire adds 80 ticks and 2 blocks, doubles aura pulse damage, and doubles burn duration.

## Fire Burst

Fires `1 + core rank` projectiles in a 15-degree spread. Projectiles travel at speed 1.32 with no gravity and disappear after 30 ticks or the first collision. Each hit deals scaled damage and ignites the target.

Soulfire adds two projectiles and multiplies the projectile's pre-mastery damage by 1.5.

## Fire Implode

Targets all living entities in `scaled radius + 1` blocks, pulls them toward the caster, deals scaled damage, and ignites them.

Soulfire reverses the pull into a 35%-stronger outward blast and applies the longer final-form burn.

## Fire Storm

Runs for at least 60 ticks and normally 100 scaled ticks. Every 10 ticks it targets up to six nearby entities within `scaled radius + 2.5`, dealing 60% scaled damage and igniting them.

Soulfire uses the final-form burn and visual effects.

## Soulfire Final Form

Soulfire upgrades every Fire ability: Aura pulses harder and lasts longer, Burst gains two projectiles, Implode pushes enemies away, and all burns use the longer final-form duration. The changes for each ability are described above.

---

# Ice and Permafrost

Normal Ice hits deal damage and apply Slowness III for the scaled configured duration.

## Ice Aura

Uses the common aura duration/radius and pulses once per second for 45% scaled damage plus Slowness III.

## Ice Burst

Uses the common spread projectile mechanic. Each projectile applies scaled damage and Slowness III.

## Ice Implode

Pulls enemies within `scaled radius + 1`, deals scaled damage, and applies Slowness III.

## Ice Pierce

Fires `1 + floor(core rank / 2)` ray shots separated by five degrees. Each ray has range `scaled radius + 10`, a hit radius of `0.35 + 0.08 × core rank`, and can strike up to `core rank` targets in distance order.

## Ice Glacier

Hits all nearby enemies within `scaled radius + 2`, deals scaled damage, and applies Slowness IV for the scaled duration.

## Ice Storm

Every 10 ticks, damages up to six entities within `scaled radius + 2.5` for 60% scaled damage and applies Slowness III.

## Permafrost Final Form

All Ice hits additionally apply Aura's Permafrost effect for 120 ticks/6 seconds. Fire immediately removes Permafrost. During the last 60 ticks/3 seconds, Permafrost zeros horizontal movement and prevents upward motion. This is why the UI describes the target as freezing after three seconds.

---

# Lightning and Plasma

## Lightning Aura

Uses the common aura mechanic and deals 45% scaled damage once per second.

## Lightning Zap

Selects the nearest `2 + 2 × core rank` living targets in `scaled radius + 3` blocks and deals 50% scaled damage to each.

## Lightning Implode

Pulls targets within `scaled radius + 1`, damages them, and creates a real lightning bolt at every target. Unlike Lightning Strike, this path does not explicitly remove fire created by the bolt.

## Lightning Strike

Selects one living target in front of the player within `scaled radius + 2`, deals 120% scaled damage, and creates a real lightning bolt. Fire blocks around this strike are immediately cleared.

## Lightning Storm

Lasts for the scaled duration and has a fixed 60-second cooldown. Every 10 ticks it selects up to six targets within `scaled radius + 2.5`. Its tick damage is hard-coded to 2.5 before mastery/final-form bonuses, approximately 5 damage per second.

## Plasma Final Form

Lightning hits deal 50% more primary damage and trigger a secondary explosion that damages other living entities within 2.5 blocks for another 50% of the pre-final-form hit damage. The primary target is excluded from its own secondary explosion.

---

# Poison and Toxin

Normal Poison hits deal damage and apply Poison II for the scaled configured duration.

## Poison Aura

Uses the common aura mechanic and pulses once per second for 45% scaled damage plus Poison II.

## Poison Burst

Uses the common spread projectile mechanic. Each projectile deals scaled damage and applies Poison II.

## Poison Implode

Pulls targets within `scaled radius + 1`, damages them, and applies Poison II.

## Toxin Final Form

Final-form Poison abilities replace Poison with Aura's Toxin effect. Toxin deals magic damage equal to `2 + amplifier`; amplifier 0 therefore deals 2 damage once per second. Higher amplifiers shorten the interval down to a minimum of 10 ticks, although Aura's built-in applications use amplifier 0.

---

# Force and Singularity

## Force Aegis

Grants `round(core rank × power scale)`, minimum one, damage-negating charges. Each incoming hit consumes one charge, sets its damage to zero, and knocks a living attacker away. Aegis charges are stored in the ability's active-tick field and do not expire with time.

Singularity adds three charges and increases retaliation knockback from 0.7 to 1.3.

## Force Burst

Damages every living target within `scaled radius + 1.5` for 125% scaled damage and pushes it away. It does not launch a projectile and does not move the caster.

Singularity raises the damage multiplier to 160% and the knockback multiplier to 175%.

## Force Rampage

Applies Rampaging for the scaled duration. The effect grants attack damage and total movement speed based on its amplifier:

```text
attack damage = 3 × [min(4, floor(core rank / 2)) + 1]
movement speed = 20% × [min(2, floor(core rank / 3)) + 1]
```

Singularity Rampage uses the same attribute formulas but stores one higher amplifier. While it is active, all incoming damage is accumulated and canceled. When it ends, the accumulated damage is applied directly to health but cannot reduce the player below 1 health point/half a heart.

## Singularity Final Form

Singularity strengthens Aegis, Burst, and Rampage. Aegis gains charges, Burst deals more damage and knockback, and Rampage absorbs incoming damage until it ends. The ability sections above give the exact values.

---

# Blood and Bloodfire

## Blood Heal

Heals `max(1, 60% of scaled damage)`. With default config, core rank 1, and Ability Power 1.0, this heals 3.6 health points/1.8 hearts.

Bloodfire also grants Fire Resistance I for 200 ticks/10 seconds and ignites all nearby living enemies within 5 blocks for 10 seconds.

## Blood Cleanse

Removes every active harmful effect, clears fire, and heals `max(1, 35% of scaled damage)`. The set of harmful effects is captured before removal.

Bloodfire applies copies of those removed harmful effects to every nearby living enemy within 4 blocks and ignites them for 10 seconds.

## Blood Burst

Consumes health equal to scaled damage, capped so the caster remains at least at 1 health point. It then fires the common spread of blood projectiles; every projectile deals the full amount of health actually consumed. The cast fails if no health can be spent.

Bloodfire projectiles ignite struck targets for 10 seconds and gain the two final-form bonus projectiles.

## Blood Drain

Raycasts for the first living target within `scaled radius + 12` blocks and a 0.75-block hit radius. It channels for at least 40 ticks and normally the scaled configured duration. Every 10 ticks/0.5 seconds it deals `max(1, 35% of scaled damage)` and heals the caster for half the health actually removed. The channel ends if the target dies, disappears, or leaves range.

Bloodfire continuously ignites the target for 10 seconds.

## Bloodfire Final Form

Bloodfire adds fire effects to every Blood ability: Heal ignites nearby enemies and grants Fire Resistance, Cleanse transfers harmful effects, Burst gains fiery projectiles, and Drain keeps its target burning. The ability sections above give the exact values.

---

# Wind and Tempest

Wind mastery uses the same 5%-per-rank mastery number as a mobility power multiplier rather than adding direct elemental damage to Dash or Leap.

## Dash

Pushes the caster horizontally in the look direction by:

```text
(1.0 + 0.2 × core rank) × power scale × wind mastery multiplier
```

It also applies a small 0.09 upward push.

## Leap

Sets horizontal movement to `(0.75 + 0.15 × core rank)` and vertical movement to `(0.55 + 0.05 × core rank)`, multiplied by Ability Power's power scale and the wind mastery multiplier.

## Lunge

Finds one living target in front within `scaled radius + 4`, moves the caster toward it, and immediately deals 125% scaled melee damage.

## Tempest Final Form

Dash and Leap receive a 1.5x/1.45x movement multiplier respectively. Lunge receives a 1.5x movement multiplier and deals 175% rather than 125% scaled damage.

Every Tempest specialization also triggers a 4-block blast that deals `max(4, 0.8 × core rank) × power scale` damage and pushes nearby living targets away. Four gust emitters provide the visual effect.

---

# Ability HUD

The HUD appears only when server HUD support, the global ability system, and the local HUD toggle are enabled.

- It displays up to four recently used selected specializations.
- Before any use, it falls back to up to four currently selected specializations.
- Each slot shows the icon, compact key label, cooldown fill, and optionally cooldown text.
- Failed local use checks flash and shake the slot for 350 ms.
- Holding `Alt` shows a 4-by-2 grid of selected specializations. Scrolling changes the highlight; releasing `Alt` casts the highlighted ability.
- The local HUD position overrides the server config position in the current renderer.

Cooldowns tick on both the server copy and the client mirror. The server remains authoritative for whether a cast succeeds.

---

# Items, Enchantment, Effects, and Potions

## Skills and Abilities Book

Aura registers one item: `aura:skills_book`.

- Stack size: 1
- Creative tabs: Ingredients and Tools & Utilities
- Use: asks the server to open the standalone book screen
- New players receive one on first login by default
- If the inventory is full, the book is dropped at the player
- The one-time granted flag persists, so reenabling the setting does not give a second starting book

## Ability Power Enchantment

`aura:ability_power` is a weapon enchantment with:

| Property | Value |
|---|---:|
| Maximum level | 3 |
| Weight | 4 |
| Minimum cost | 10 + 10 per extra level |
| Maximum cost | 35 + 10 per extra level |
| Anvil cost | 3 |
| Supported slots | Main hand, off hand |
| Exclusive set | Vanilla damage-enchantment exclusive set |

Aura scans armor, main hand, and off hand and uses only the highest enchantment level found. It multiplies current Ability Power by 1.05, 1.10, or 1.15 by default for levels I, II, and III.

## Ability Power Potions

| Potion | Brewing recipe | Duration | Effect |
|---|---|---:|---:|
| Ability Power | Awkward Potion + Golden Apple | 10 seconds | +25% total Ability Power |
| Strong Ability Power | Ability Power + Glowstone Dust | 8 seconds | +50% total Ability Power |
| Supreme Ability Power | Strong Ability Power + Glowstone Dust | 5 seconds | +100% total Ability Power |

## Custom Effects

| Effect | Category | Behavior |
|---|---|---|
| Ability Power Boost | Beneficial | Adds 25%, 50%, or 100% total Ability Power by amplifier |
| Rampaging | Beneficial | Adds attack damage and movement speed for Force Rampage |
| Singularity Rampage | Beneficial | Same attributes plus deferred incoming damage handling |
| Permafrost | Harmful | Removed by fire; locks horizontal/upward movement during its last 3 seconds |
| Toxin | Harmful | Periodic magic damage, 2 damage/second at amplifier 0 |

---

# Equipment Attributes and Integration

Aura registers these syncable player attributes:

- `aura:ability_power`, base 1.0, range 0–1024
- `aura:ability_skill_edit_lock`, base 0, range 0–1
- One `aura:skill_<skill_id>_bonus` attribute for every skill
- One `aura:ability_<ability_id>_bonus` attribute for every ability

Bonus attributes accept -1024 to 1024 and are floored to an integer effective-rank adjustment. They never directly change saved ranks or points.

## Skill Bonus IDs

`strength`, `power`, `crit_power`, `haste`, `resistance`, `fire_resistance`, `projectile_resistance`, `knockback_resistance`, `agility`, `leaping`, `vitality`, `regeneration`, `health_boost`, `cleanse`, `luck`, `looting`, `fortune`, `blast_resistance`, `attack_speed`, `swimming_speed`, `luck_of_the_sea`, and `xp_fortune` use:

```text
aura:skill_<id>_bonus
```

## Ability Bonus IDs

Every id in the Complete Ability Defaults table uses:

```text
aura:ability_<id>_bonus
```

A specialization bonus can make that specialization's effective rank positive and grants effective core rank 1 even if its saved core rank is zero. Affinity locks, however, inspect the saved core rank and can still reject it when enabled.

## Edit Lock

If `aura:ability_skill_edit_lock` is greater than zero, the server rejects all skill upgrades, skill downgrades, ability upgrades, ability downgrades, and specialization switches. Ability casting itself is not blocked by this attribute.

## Events for Other Mods

- `AbilityPowerCalculationEvent` allows modification of an individual cast's Ability Power.
- `AbilityUseEvent.Pre` can cancel a cast or change its Ability Power.
- `AbilityUseEvent.Post` fires after a successful cast.
- `AbilitySwitchEvent.Pre` can cancel specialization switching.
- `AbilitySwitchEvent.Post` fires after a successful switch.

All item/equipment integration should use stable attribute modifier ids and normal Minecraft equipment-slot modifiers so bonuses are removed cleanly when unequipped.

---

# Custom Statistics

Aura registers:

- `aura:abilities_used`: total successful ability activations
- `aura:ability_used_<ability_id>`: one statistic for every ability enum id

Only specializations can actually be activated through the normal cast path, so core mastery use counters remain registered but are not normally incremented. A cast increments stats only after its mechanic executes successfully.

---

# Commands

All commands require permission level 2.

## Skills

```text
/skills level up <skill> <amount>
/skills points add [targets] <amount>
/skills points set [targets] <amount>
/skills points reset [targets]
/skills reset
```

`level up` targets the executing player and clamps to the configured maximum. `reset` clears every skill and resets unspent Skill Points to zero.

## Abilities

```text
/abilities points add [targets] <amount>
/abilities points set [targets] <amount>
/abilities points reset [targets]
/abilities unlock <ability>
/abilities reset
```

`unlock` targets the executing player and sets the named node to at least rank 1. `reset` clears points, ranks, cooldowns, active states, selections, and recent abilities.

Command ids use enum-style names such as `XP_FORTUNE`, `FIRE_STORM`, and `BLOOD_DRAIN`; parsing is case-insensitive.

---

# Configuration Files

Aura uses three primary config files:

| File | Scope | Purpose |
|---|---|---|
| `config/aura-server.toml` | Server/world | Skill points, maximum ranks, scaling, starting book |
| `config/aura-abilities-server.toml` | Server/world | Ability system, ranks, cooldowns, values, locks, HUD defaults |
| `config/aura-client.json` | Local client | UI visibility, local blocks, disabled entries, HUD placement |

Stop the game/server before manually editing TOML files. Server config values are normally stored with the world's server configuration. The in-book settings screen can also change a subset of settings and save them immediately.

---

# Skill Configuration Reference

## `progression`

| Key | Default | Range | Meaning |
|---|---:|---:|---|
| `skillPointsPerLevelUp` | 1 | 0–10 | Skill Points per LevelUP level gained |

## `items`

| Key | Default | Meaning |
|---|---:|---|
| `spawnWithSkillsBook` | `true` | Give the one-time starting book on login |

## `maxLevels`

All keys accept 1–100.

| Key | Default | Key | Default |
|---|---:|---|---:|
| `strength` | 10 | `power` | 5 |
| `crit_power` | 5 | `haste` | 2 |
| `resistance` | 10 | `fire_resistance` | 5 |
| `projectile_resistance` | 5 | `knockback_resistance` | 5 |
| `blast_resistance` | 5 | `agility` | 10 |
| `leaping` | 5 | `attack_speed` | 5 |
| `swimming_speed` | 5 | `vitality` | 10 |
| `regeneration` | 5 | `health_boost` | 5 |
| `cleanse` | 5 | `luck` | 10 |
| `looting` | 2 | `fortune` | 2 |
| `luck_of_the_sea` | 5 | `xp_fortune` | 3 |

## `scaling`

| Key | Default | Allowed range | Runtime use |
|---|---:|---:|---|
| `strengthDamagePerLevel` | 0.5 | 0–20 | Flat attack damage |
| `powerDamagePerLevel` | 1.0 | 0–20 | Flat arrow damage |
| `critPowerDamagePerLevel` | 0.1 | 0–20 | Critical damage multiplier addition |
| `hasteBreakSpeedPerLevel` | 2.0 | 0–20 | Flat break speed |
| `blastResistancePerLevel` | 0.05 | 0–1 | Explosion damage reduction |
| `resistancePerLevel` | 0.05 | 0–1 | General damage reduction |
| `fireResistancePerLevel` | 0.05 | 0–1 | Fire damage reduction |
| `projectileResistancePerLevel` | 0.05 | 0–1 | Projectile damage reduction |
| `knockbackResistancePerLevel` | 0.05 | 0–1 | Knockback reduction/attribute |
| `agilitySpeedPerLevel` | 0.10 | 0–2 | Total movement-speed multiplier |
| `leapingBonusPerLevel` | 0.20 | 0–2 | Used to derive Jump Boost amplifier |
| `attackSpeedPerLevel` | 0.05 | 0–2 | Total attack-speed multiplier |
| `swimmingSpeedPerLevel` | 0.15 | 0–1 | Water movement efficiency |
| `regenHeartsPerSecondPerLevel` | 0.05 | 0–2 | Health points healed each second per rank |
| `vitalityHeartsPerLevel` | 1.0 | 0–10 | Hearts of maximum health per rank |
| `lifeLeachPerLevel` | 0.01 | 0–1 | Present in config but not read by the current leach formula |
| `cleanseReductionPerLevel` | 0.05 | 0–1 | Harmful-effect duration/strength reduction |
| `luckPerLevel` | 1.0 | 0–10 | Flat Luck attribute |
| `lootingExtraDropChancePerLevel` | 0.02 | 0–1 | Chance to add one item to each mob drop stack |
| `fortuneBonusPerLevel` | 1 | 0–10 | Ore drop multiplier bonus |
| `luckOfTheSeaPerLevel` | 1.0 | 0–10 | Flat Luck attribute from Luck of the Sea |

XP Fortune's 50% per rank, Leaching's chance formula, and Leaching's 1% amount are currently fixed in code and have no scaling keys.

---

# Ability Configuration Reference

## `progression`

| Key | Default | Range | Meaning |
|---|---:|---:|---|
| `abilityPointLevelInterval` | 2 | 1–100 | One Ability Point at each crossed multiple |

## `general`

| Key | Default | Range | Meaning |
|---|---:|---:|---|
| `enableAbilities` | `true` | boolean | Global server ability switch |
| `enableAbilityXpConsumption` | `false` | boolean | Require and consume vanilla XP on successful casts |
| `enableUltimateAbilities` | `true` | boolean | Enable final forms at maximum saved core rank |
| `cooldownMultiplier` | 1.0 | 0.1–5.0 | Global multiplier except fixed Lightning Storm |
| `primaryScalingMultiplier` | 1.0 | 0–5.0 | Multiplies per-core-rank damage/radius/duration growth |
| `abilityPowerEnchantmentLevel1` | 0.05 | 0–2.0 | Level I Ability Power multiplier bonus |
| `abilityPowerEnchantmentLevel2` | 0.10 | 0–2.0 | Level II bonus |
| `abilityPowerEnchantmentLevel3` | 0.15 | 0–2.0 | Level III bonus |
| `enableHud` | `true` | boolean | Server-side HUD availability |
| `hudPosition` | `bottom-left` | four corners | Server HUD default; local client position is rendered currently |
| `hudTimerText` | `true` | boolean | Show cooldown numbers |
| `maxSlots` | 5 | 1–5 | Configured slot count; current HUD display remains capped at four recent abilities |
| `enableAbilitySwitchCooldowns` | `true` | boolean | Enable survival element switch lockout after casts |
| `survivalSwitchCooldownTicks` | 1200 | 0–72000 | Switch lockout duration |

## `affinityLocks`

| Keys | Default | Range |
|---|---:|---:|
| `enabled` | `true` | boolean |
| `fire`, `poison`, `force`, `blood`, `wind` | 0 | 0–1,000,000 |
| `ice`, `lightning` | 4 | 0–1,000,000 |
| Aura, Burst, Glacier, Zap, Aegis, Heal, Cleanse, Dash, Leap, Lunge specializations | 1 | 0–1,000,000 |
| Implode specializations, Ice Pierce, Lightning Strike | 2 | 0–1,000,000 |
| `blood_burst` | 3 | 0–1,000,000 |
| `blood_drain` | 4 | 0–1,000,000 |
| Fire/Ice/Lightning Storm and `force_rampage` | 5 | 0–1,000,000 |

The per-id entries are defined in the config schema, but current validation does not read them. It ignores core entries and uses the hard-coded specialization table in this guide.

## `abilities`

There is one boolean for every ability id in the Complete Ability Defaults table. Every key defaults to `true`. Disabling a core prevents it from being upgraded; disabling a specialization prevents normal upgrade and use validation for that node.

## `maxRanks`

There is one integer key per ability id, range 1–100. Defaults are shown in the Complete Ability Defaults table. `AbilityId.maxRank()` also clamps a configured value to the ability's built-in default maximum, so increasing a TOML maximum above the built-in maximum does not raise the effective cap; lowering it works.

## `values`

Every ability id has these four generated keys:

| Suffix | Default | Range |
|---|---:|---:|
| `<id>CooldownTicks` | Per Complete Ability Defaults | 0–72000 |
| `<id>Damage` | 6.0 | 0–1000 |
| `<id>Radius` | 3.0 | 0–128 |
| `<id>DurationTicks` | 100 | 0–72000 |

Core mastery value keys exist but core nodes are not directly cast. Several mechanics intentionally reinterpret a field: Blood Heal uses damage as healing strength, movement abilities mostly use formulas rather than configured radius/duration, Aegis uses rank as charges, Aura uses dedicated radius/duration formulas, and Lightning Storm uses fixed tick damage and cooldown.

---

# Client Configuration Reference

`config/aura-client.json` defaults to:

```json
{
  "hudDisplayEnabled": true,
  "disableCodexBook": false,
  "disableInventoryCodexBook": false,
  "disableSkillsAndAbilities": false,
  "blockAbilitySwitching": false,
  "blockUpgradeDowngrade": false,
  "blockOpenSkillsAbilitiesPanel": false,
  "disabledSkills": [],
  "disabledSkillMasteries": [],
  "disabledAbilities": [],
  "disabledAbilityMasteries": [],
  "hudPosition": "bottom-left"
}
```

| Key | Effect |
|---|---|
| `hudDisplayEnabled` | Shows the local ability HUD |
| `disableCodexBook` | Stored client toggle; no current screen/open path reads it |
| `disableInventoryCodexBook` | Removes the inventory Aura panel |
| `disableSkillsAndAbilities` | Locally hides/disables all entries and ability key use |
| `blockAbilitySwitching` | Disables selection controls locally |
| `blockUpgradeDowngrade` | Disables rank edit controls locally |
| `blockOpenSkillsAbilitiesPanel` | Blocks standalone and inventory panel opening |
| `disabledSkills` | Lowercase `SkillId` names hidden/disabled locally |
| `disabledSkillMasteries` | Lowercase skill categories disabled locally |
| `disabledAbilities` | Lowercase `AbilityId` names disabled locally |
| `disabledAbilityMasteries` | Lowercase elements disabled locally |
| `hudPosition` | `top-left`, `top-right`, `bottom-left`, or `bottom-right` |

These are convenience/client lockouts, not secure server permissions. Use server config or the edit-lock attribute for authoritative restrictions.

---

# Persistence and Server Authority

Skills and abilities are NeoForge player attachments and copy on death.

Persisted skill data includes:

- Unspent Skill Points
- Every saved skill level
- Whether the starting book was already granted

Persisted ability data includes:

- Unspent Ability Points
- Every saved ability rank
- Cast cooldowns
- Switch cooldowns
- Active durations or Aegis charges
- Selected specialization per element
- Up to four recent abilities

The server validates upgrades, downgrades, switches, affinity, cooldowns, XP costs, and casts. Data synchronizes on login, respawn, dimension change, and state changes.

---

# Data Files and Extensibility Notes

Aura currently ships example chapter JSON files under `data/aura/chapters/`, including an Enchanting example and a Minecraft category. No Java code in this project currently loads or displays those chapter files, so they are examples/placeholders rather than part of the active Skills and Abilities Book pages described above.

The gameplay registries for skills and abilities are Java enums, not datapack registries. Adding a new built-in skill or ability currently requires code, translations, icons, config registration, UI support, and runtime behavior.

---

# Important Current Implementation Notes

- Ability radius queries use an inflated player bounding box, so the exact corner reach is box-shaped rather than a perfect sphere.
- Target selection for Strike and Lunge takes the first qualifying entity returned by the nearby query, not necessarily the closest.
- `lifeLeachPerLevel` is configured but the live Leaching formula is fixed.
- Individual affinity numeric config values are created but the live required-rank lookup is fixed in code.
- Aura/Nova cooldown config values are overridden by the dedicated aura cooldown formula.
- Lightning Storm cooldown is fixed to 60 seconds.
- Force Rampage cannot fall below a 90-second cooldown even if its config is lower.
- Lightning Implode creates real lightning without the explicit fire cleanup used by Lightning Strike.
- The server config exposes five `maxSlots`, but recent HUD rendering and persistence use four entries.
- The generated run config files may contain user-edited or older values; source defaults in this guide are the authoritative defaults for a newly generated config.

---

# Quick Default Summary

- 1 Skill Point per LevelUP level
- 1 Ability Point every 2 LevelUP levels
- Starting Aura book enabled
- Skills and abilities enabled
- Ultimate forms enabled
- Ability XP consumption disabled
- Affinity locks enabled
- 60-second survival specialization-switch lockout after a successful cast
- Ability Power base 1.0
- Standard ability config: 6 damage, 3 radius, 5-second duration
- Standard specialization ranks: 1
- Core ranks: Fire/Ice/Lightning/Poison 6, Force 5, Blood/Wind 4
- HUD enabled with timer text at bottom-left
