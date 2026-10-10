# Arsenal Weapons Wiki

Arsenal Weapons expands Minecraft combat with 230 registered items across fourteen weapon families, new bows and crossbows, throwable bombs, special arrows, variant tridents, a back equipment slot, and optional integrations with Runic, Enforced Metals, Gates of Avarice, and Better Combat.

> This document describes the content currently present in the mod data and source for Minecraft 1.21.1. Optional-mod items and recipes only load when their required mod is installed.

## Contents

1. [Quick Reference](#quick-reference)
2. [Weapon Materials](#weapon-materials)
3. [Melee and Thrown Weapons](#melee-and-thrown-weapons)
4. [Ranged Weapons](#ranged-weapons)
5. [Arrows](#arrows)
6. [Bombs](#bombs)
7. [Tridents](#tridents)
8. [Utility Items and Systems](#utility-items-and-systems)
9. [Crafting Recipes](#crafting-recipes)
10. [Runic Integration](#runic-integration)
11. [Enforced Metals Integration](#enforced-metals-integration)
12. [Gates of Avarice Integration](#gates-of-avarice-integration)
13. [Better Combat Compatibility](#better-combat-compatibility)
14. [Configuration](#configuration)

## Quick Reference

| Content group | Available materials or variants |
|---|---|
| All 14 weapon families | Wooden, Stone, Copper, Iron, Golden, Diamond, Netherite |
| Enforced Metals weapons | Steel, Rose Gold, Platinum, Astrite |
| Gates of Avarice weapons | Mana Steel, Elixrite, Lunarium, Ignite, Iridium, Mythril, Arcanium, Prismatic Steel |
| Standalone ranged weapons | Short Bow, Long Bow, Scatter Crossbow, Dual Crossbow, Heavy Crossbow |
| Standalone tridents | Coral Skewer, Glacier Trident, Hellfork |
| Bombs | Bomb, Poison Bomb, Golden Bomb, Amethyst Bomb |
| Special arrows | Amethyst, Copper, Iron, Golden, Diamond, Netherite |
| Utility items | Staff, Stick Bit |

### Weapon Families

| Family | ID suffix | Displayed attack speed | Main role |
|---|---|---:|---|
| Dagger | `dagger` | 2.8 | Fast dual-wield weapon |
| Sickle | `sickle` | 2.2 | Dual-wield control weapon |
| Rapier | `rapier` | 2.4 | Fast weapon with extra reach |
| Cleaver | `cleaver` | 2.5 | Fast heavy blade and Beheading weapon |
| Spear | `spear` | 1.6 | Long-reach charge and contact weapon |
| Machete | `machete` | 2.2 | General-purpose heavy blade |
| Glaive | `glaive` | 1.2 | Two-handed sweeping polearm |
| Gaundao | `gaundao` | 1.0 | Two-handed heavy polearm |
| Hammer | `hammer` | 0.8 | Two-handed aerial smash weapon |
| Battle Axe | `battleaxe` | 0.9 | Two-handed sweeping axe |
| Longsword | `longsword` | 0.5 | Two-handed, high-damage reach weapon |
| Pitchfork | `pitchfork` | 1.7 | Long-reach polearm |
| Broadsword | `broadsword` | 1.3 | Heavy blade with surrounding damage |
| Javelin | `javelin` | 2.0 | Throwable loyalty-compatible polearm |

Displayed attack speed uses Minecraft's base player attack speed of 4.0 plus the item's modifier.

## Weapon Materials

### Material Stats

Melee damage is calculated as:

```text
1 player base damage + weapon-family damage + material attack bonus
```

| Material | ID prefix | Attack bonus | Durability | Notes |
|---|---|---:|---:|---|
| Wooden | `wooden` | 0 | 59 | Uses vanilla wooden-tier behavior |
| Stone | `stone` | 1 | 131 | Uses vanilla stone-tier behavior |
| Copper | `copper` | 2 | 250 | Uses iron-tier combat and durability values |
| Iron | `iron` | 2 | 250 | Uses vanilla iron-tier behavior |
| Golden | `golden` | 0 | 32 | High enchantability, low durability |
| Diamond | `diamond` | 3 | 1,561 | Uses vanilla diamond-tier behavior |
| Netherite | `netherite` | 4 | 2,031 | Upgraded from Diamond through smithing |
| Steel | `steel` | 2 | 250 | Enforced Metals; iron-equivalent stats |
| Rose Gold | `rose` | 0 | 32 | Enforced Metals; gold-equivalent stats |
| Platinum | `platinum` | 3 | 1,561 | Enforced Metals; diamond-equivalent stats |
| Astrite | `astrite` | 10.5 | 2,031 | Enforced Metals; upgraded from Netherite |
| Mana Steel | `mana_steel` | 9 | 2,031 | Gates of Avarice integration |
| Elixrite | `elixrite` | 10 | 2,031 | Gates of Avarice integration |
| Lunarium | `lunarium` | 11 | 2,031 | Slows targets on hit |
| Ignite | `ignite` | 11.5 | 2,031 | Slows and ignites targets |
| Iridium | `iridium` | 12 | 2,031 | Slows and ignites targets |
| Mythril | `mythril` | 12.5 | 2,031 | Slows and ignites targets |
| Arcanium | `arcanium` | 13 | 2,031 | Slows, ignites, and poisons targets |
| Prismatic Steel | `prismatic_steel` | 15 | 2,031 | Slows, ignites, and poisons targets |

### Direct Melee Damage

The following table gives the displayed melee attack damage for every standard and Enforced Metals family. Javelins deal the listed damage in melee, but deal a separate fixed base damage when thrown.

| Weapon | Wood | Stone | Copper | Iron | Gold | Diamond | Netherite | Steel | Rose Gold | Platinum | Astrite |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Dagger | 2 | 3 | 4 | 4 | 2 | 5 | 6 | 4 | 2 | 5 | 12.5 |
| Sickle | 3 | 4 | 5 | 5 | 3 | 6 | 7 | 5 | 3 | 6 | 13.5 |
| Rapier | 3 | 4 | 5 | 5 | 3 | 6 | 7 | 5 | 3 | 6 | 13.5 |
| Cleaver | 4 | 5 | 6 | 6 | 4 | 7 | 8 | 6 | 4 | 7 | 14.5 |
| Spear | 4 | 5 | 6 | 6 | 4 | 7 | 8 | 6 | 4 | 7 | 14.5 |
| Machete | 5 | 6 | 7 | 7 | 5 | 8 | 9 | 7 | 5 | 8 | 15.5 |
| Glaive | 6 | 7 | 8 | 8 | 6 | 9 | 10 | 8 | 6 | 9 | 16.5 |
| Gaundao | 7 | 8 | 9 | 9 | 7 | 10 | 11 | 9 | 7 | 10 | 17.5 |
| Hammer | 7 | 8 | 9 | 9 | 7 | 10 | 11 | 9 | 7 | 10 | 17.5 |
| Battle Axe | 8 | 9 | 10 | 10 | 8 | 11 | 12 | 10 | 8 | 11 | 18.5 |
| Longsword | 8 | 9 | 10 | 10 | 8 | 11 | 12 | 10 | 8 | 11 | 18.5 |
| Pitchfork | 8 | 9 | 10 | 10 | 8 | 11 | 12 | 10 | 8 | 11 | 18.5 |
| Broadsword | 9 | 10 | 11 | 11 | 9 | 12 | 13 | 11 | 9 | 12 | 19.5 |
| Javelin | 3 | 4 | 5 | 5 | 3 | 6 | 7 | 5 | 3 | 6 | 13.5 |

For a Gates of Avarice weapon, add its material bonus from the Material Stats table to `1 +` the family's base damage implicit in the formula above.

## Melee and Thrown Weapons

### Dagger

- A fast weapon designed for dual wielding.
- Using a matching dagger in the offhand can perform an offhand strike after a 4-tick delay.
- The built-in dual-wield action is disabled when Better Combat is loaded.

### Sickle

- Supports the same matching-weapon dual-wield system as daggers, with a 6-tick delay.
- Normal melee hits pull the target toward the attacker.
- Dual-wield and pull specials are disabled when Better Combat is loaded.

### Rapier

- Grants `+0.75` entity interaction reach.
- Combines quick attacks with safer spacing.

### Cleaver

- A fast heavy blade.
- Cleavers are the runtime weapon class used by Runic's Beheading effect.

### Spear

- Grants `+1.5` entity interaction reach.
- Holding the spear forward can make contact attacks every 6 ticks at 2.8-block reach.
- Contact damage scales with horizontal movement speed: `1 + speed × 4`.
- Charging for at least 10 ticks opens a 20-tick charged-hit window that adds 2 damage and stronger knockback.
- A charged hit consumes durability and applies a 6-tick cooldown.
- Charge duration by tier: Wood 200 ticks, Stone 180, Iron/Copper 140, Gold/Rose Gold 120, Diamond/Platinum 100, and advanced tiers 80.
- Runic's Lunge enchantment adds forward propulsion while charging.
- Spear special attacks are disabled when Better Combat is loaded.

### Machete

- A straightforward medium-heavy melee weapon with no extra active mechanic.

### Glaive

- Two-handed; cannot remain equipped in the offhand.
- Sweeps nearby enemies in front of the wielder within about 2.25 blocks for 2 damage.
- The sweep excludes allied entities and is disabled when Better Combat is loaded.

### Gaundao

- A high-damage two-handed polearm.
- Cannot remain equipped in the offhand.

### Hammer

- Two-handed and designed around airborne smash attacks.
- A valid falling critical adds 2 primary-target damage and 1 area damage within 2.5 blocks.
- The smash applies strong knockback to the main target and lighter knockback to nearby targets.
- Smash attacks are disabled when Better Combat is loaded.

### Battle Axe

- Two-handed; cannot remain equipped in the offhand.
- Performs a forward sweep within about 2.25 blocks for 2 damage.
- The sweep excludes allied entities and is disabled when Better Combat is loaded.

### Longsword

- Two-handed; cannot remain equipped in the offhand.
- Grants `+1.0` entity interaction reach.
- Trades attack speed for high single-target damage and reach.

### Pitchfork

- Grants `+1.5` entity interaction reach.
- Uses the spear-style reach foundation without the spear's hold-contact or charged-hit action.

### Broadsword

- Every successful hit deals 1 damage to other nearby living targets around the victim.
- The area is approximately 2.5 blocks horizontally and 0.25 blocks vertically.
- The attacker and primary target are excluded from the secondary damage.

### Javelin

- A two-handed weapon that can be thrown like a trident.
- Thrown javelins deal 8 base projectile damage before enchantment modifiers.
- Supports Loyalty-style return behavior and Riptide-style movement in water or rain.
- Uses the durability of its material tier.

## Ranged Weapons

### Bows

| Item | ID | Durability | Draw time | Projectile damage | Description |
|---|---|---:|---:|---:|---|
| Short Bow | `arsenal:short_bow` | 384 | 75% of normal | 75% | Fast-drawing bow with lower damage |
| Long Bow | `arsenal:long_bow` | 384 | 150% of normal | 125% | Slow-drawing bow with higher damage |

### Crossbows

| Item | ID | Durability | Base shots | Multishot shots | Base charge time | Damage modifier | Special behavior |
|---|---|---:|---:|---:|---:|---:|---|
| Scatter Crossbow | `arsenal:scatter_crossbow` | 465 | 3 | 6 | 1.50 seconds | 100% | Fires a spread of projectiles |
| Dual Crossbow | `arsenal:dual_crossbow` | 465 | 1 | 3 | 1.25 seconds | 100% | Paired hands can load and fire together |
| Heavy Crossbow | `arsenal:heavy_crossbow` | 465 | 1 | 3 | 1.875 seconds | 150% | Slower, harder-hitting shots |

Quick Charge modifies the listed charge times. Crossbow arrow velocity is 3.15; firework velocity is 1.6.

## Arrows

All special arrow recipes output the amount shown. Their listed damage is added to the normal arrow damage calculation.

| Item | ID | Bonus damage | Recipe output | Tip ingredient | Extra effect |
|---|---|---:|---:|---|---|
| Amethyst Arrow | `arsenal:amethyst_arrow` | 0.5 | 4 | Amethyst Shard | Bursts into 8 damaging amethyst shards on entity or block impact |
| Copper Arrow | `arsenal:copper_arrow` | 1.0 | 4 | Copper Ingot | Increased projectile damage |
| Iron Arrow | `arsenal:iron_arrow` | 1.5 | 4 | Iron Nugget | Increased projectile damage |
| Golden Arrow | `arsenal:golden_arrow` | 2.0 | 4 | Gold Nugget | Increased projectile damage |
| Diamond Arrow | `arsenal:diamond_arrow` | 2.5 | 16 | Diamond | Increased projectile damage |
| Netherite Arrow | `arsenal:netherite_arrow` | 3.0 | 8 | Netherite Ingot | Highest standard special-arrow bonus |

Each amethyst shard projectile deals 2 damage. The shard burst uses a speed of 0.65, an inaccuracy of 4, and a 25-tick shard lifetime.

## Bombs

All bombs stack to 16, use a throw speed of 0.9, and apply a 20-tick use cooldown.

| Item | ID | Direct damage | Radius | Effect |
|---|---|---:|---:|---|
| Bomb | `arsenal:bomb` | 1 | 2.0 | Explodes without normal terrain destruction, but explicitly breaks nearby glass and glass panes |
| Poison Bomb | `arsenal:poison_bomb` | 0.5 | 1.25 | Applies Poison I for 120 ticks to living targets in range |
| Golden Bomb | `arsenal:golden_bomb` | 1.5 | 2.5 | Uses terrain-damaging TNT-style explosion interaction |
| Amethyst Bomb | `arsenal:amethyst_bomb` | 1 | 2.0 | Explodes into 8 amethyst shrapnel projectiles |

Amethyst Bomb shrapnel travels at 0.85 speed with 4 inaccuracy. Each shard deals 2 damage and lasts for 25 ticks.

## Tridents

All three variant tridents have 250 durability and use vanilla trident combat attributes and throwing behavior.

| Item | ID | Where to find it | Effect |
|---|---|---|---|
| Coral Skewer | `arsenal:coral_skewer` | Warm ocean shipwrecks | Grants Water Breathing while held and attracts fish within 12 blocks |
| Glacier Trident | `arsenal:glacier_trident` | Cold ocean shipwrecks | Freezes exposed water below the wielder and applies Slowness II for 100 ticks on hit |
| Hellfork | `arsenal:hellfork` | Bastions | Ignites hit targets for 6 seconds; Riptide also works in lava or while the wielder is on fire |

## Utility Items and Systems

### Staff and Stick Bit

| Item | ID | Stats | Purpose |
|---|---|---|---|
| Staff | `arsenal:staff` | 128 durability, 1.6 displayed attack speed, `+2` entity reach | Crafting handle for large polearms and a long-reach utility weapon |
| Stick Bit | `arsenal:stick_bit` | Crafting component | Used as a small handle in Rapier and Sickle recipes |

### Fletching Table

Arsenal gives the Fletching Table a working arrow-crafting interface.

| Slot | Accepted input |
|---|---|
| Shaft | Stick |
| Fletching | Feather |
| Tip | Flint, Amethyst Shard, Copper Ingot, Iron Nugget, Gold Nugget, Diamond, or Netherite Ingot |
| Optional coating | Potion |
| Output | 4 arrows |

A potion coats the crafted arrows with its potion contents. Flint creates vanilla arrows or tipped arrows; Arsenal tips retain their special arrow type. The empty glass bottle is returned.

### Back Equipment Slot

- Accepts tiered items, bows, crossbows, maces, tridents, and items carrying the tool component.
- Uses the **Quick Equip Back Slot** key binding to swap equipment quickly.
- Items in the slot drop when the player dies.

## Crafting Recipes

### Pattern Notation

Recipes below show rows separated by `/`. An underscore (`_`) means an empty slot.

### Material Ingredients

Use each weapon's pattern with the appropriate `M` material:

| Variant | `M` ingredient |
|---|---|
| Wooden | Any item in `#minecraft:planks` |
| Stone | Cobblestone |
| Copper | Copper Ingot |
| Iron | Iron Ingot |
| Golden | Gold Ingot |
| Diamond | Diamond |
| Steel | `#c:ingots/steel` |
| Rose Gold | `#c:ingots/rose_gold`, `#c:ingots/rosegold`, or `#c:ingots/rose` |
| Platinum | `#c:ingots/platinum` |

### Weapon Patterns

| Weapon | Pattern | Other keys |
|---|---|---|
| Battle Axe | `MMM / MSM / _S_` | `S` = Stick |
| Broadsword | `MMM / MMM / _S_` | `S` = Stick |
| Cleaver | `MS_ / _S_ / ___` | `S` = Stick |
| Dagger | `_M_ / _S_ / ___` | `S` = Stick |
| Gaundao | `_M_ / MM_ / _S_` | `S` = Stick |
| Glaive | `__M / _M_ / T__` | `T` = Staff |
| Hammer | `MMM / MSM / _S_` | `S` = Stick |
| Javelin | `_MM / _SM / ___` | `S` = Staff |
| Longsword | `__M / _M_ / S__` | `S` = Stick |
| Machete | `MM_ / MM_ / _S_` | `S` = Stick |
| Pitchfork | `M_M / _S_ / _S_` | `S` = Stick |
| Rapier | `_M_ / _M_ / __B` | `B` = Stick Bit |
| Sickle | `MM_ / _B_ / ___` | `B` = Stick Bit |
| Spear | `__M / _T_ / ___` | `T` = Staff |

### Netherite Smithing

Netherite weapons use the smithing table:

| Slot | Ingredient |
|---|---|
| Template | Netherite Upgrade Smithing Template |
| Base | Matching Diamond Arsenal weapon |
| Addition | Netherite Ingot |
| Result | Matching Netherite Arsenal weapon |

The current recipe data does not include smithing recipes for the Netherite Cleaver, Netherite Javelin, or Netherite Spear, although those items are registered.

### Astrite Smithing

Astrite weapons are the Enforced Metals upgrade above Netherite:

| Slot | Ingredient |
|---|---|
| Template | `enforcedmetals:astrite_upgrade` |
| Base | Matching Netherite Arsenal weapon |
| Addition | `enforcedmetals:astrite_ingot` |
| Result | Matching Astrite Arsenal weapon |

All fourteen Astrite weapon variants have upgrade recipes.

### Components and Ranged Weapons

| Result | Pattern | Keys |
|---|---|---|
| 1 Staff | `_S_ / _S_ / _S_` | `S` = Stick |
| 2 Stick Bits | Shapeless | 1 Stick |
| Short Bow | `ST_ / S_T / ST_` | `S` = Stick, `T` = String |
| Long Bow | `SST / S_T / SST` | `S` = Stick, `T` = String |
| Scatter Crossbow | `III / HHH / TST` | `I` = Iron Ingot, `H` = Tripwire Hook, `T` = String, `S` = Stick |
| Dual Crossbow | `SIS / THT / _T_` | `I` = Iron Ingot, `H` = Tripwire Hook, `T` = String, `S` = Stick |
| Heavy Crossbow | `SBS / THT / TST` | `B` = Iron Block, `H` = Tripwire Hook, `T` = String, `S` = Stick |

### Arrow Recipes

All special arrows use the vertical pattern `T__ / S__ / F__`, where `T` is the tip in the Arrows table, `S` is a Stick, and `F` is a Feather. The recipe may be mirrored horizontally by placing that column in any crafting-grid column.

### Bomb Recipes

| Result | Recipe | Keys |
|---|---|---|
| Bomb | `III / IGI / III` | `I` = Iron Ingot, `G` = Gunpowder |
| Poison Bomb | Shapeless | Bomb + Poisonous Potato |
| Golden Bomb | `GGG / GBG / GGG` | `G` = Gold Ingot, `B` = Bomb |
| Amethyst Bomb | `AAA / AGA / AAA` | `A` = Amethyst Shard, `G` = Gunpowder |

The Amethyst Bomb recipe therefore uses exactly 8 Amethyst Shards and 1 Gunpowder.

## Runic Integration

Runic support is optional and conditionally loads when Runic is installed. Arsenal supplies enchantments, etching recipes, compatible item tags, and rune-slot capacity definitions.

### Enchantments

| Enchantment | Max level | Eligible Arsenal weapons | Effect |
|---|---:|---|---|
| Beheading | I | Beheading weapon tag; runtime head-drop effect requires a Cleaver | 50% chance for a supported mob head; player heads always drop |
| Bleeding | I | Sharp weapons | 20% chance to inflict Bleeding for 40 ticks; deals 2.5% of maximum health every 10 ticks |
| Freezing | II | Supported weapons | 15% chance per level to apply Slowness for 60 ticks; amplifier is level minus one |
| Leeching | II | Supported weapons | 3% chance per level to heal the attacker for the greater of 1 health or 25% of damage dealt |
| Lunge | III | Spears | Propels the wielder forward during a spear charge |
| Stunning | II | Supported weapons | Applies Stunning, Weakness I, and Nausea I for 40 ticks |
| Toxic | II | Supported weapons | Applies Poison for 80 ticks; amplifier is level minus one |
| Withering | I | Supported weapons | 12% chance to apply Wither I for 80 ticks |

Stunning reduces movement speed and attack damage by 50%, suppresses jumping, and displays its own particles. Its current duration and strength do not scale with enchantment level.

Lunge strength is `0.65 + 0.35 × level`, giving 1.0, 1.35, and 1.7 at levels I–III. Airborne lunges are 20% stronger. Non-creative players require at least 6 food points and gain `1.2 + 0.4 × level` exhaustion.

> The Beheading item tag also includes `arsenal:diamond_longsword`, but the current runtime drop handler checks for the Cleaver tag. As implemented, the special head-drop effect activates on Cleavers.

### Etching Recipes

Each recipe combines Runic's Blank Etching with the listed ingredient.

| Etching | Added ingredient |
|---|---|
| Beheading | Skeleton Skull |
| Bleeding | Redstone |
| Freezing | Packed Ice |
| Leeching | Ghast Tear |
| Lunge | Rabbit Foot |
| Stunning | Amethyst Shard |
| Toxic | Poisonous Potato |
| Withering | Wither Rose |

All eight enchantments are enabled for enchanting-table selection, villager trading, and random loot according to their Runic data tags.

### Rune Slot Capacity

| Arsenal item tier or group | Rune slots |
|---|---:|
| Wooden weapons | 2 |
| Stone weapons | 3 |
| Copper weapons | 4 |
| Iron weapons | 4 |
| Golden weapons | 6 |
| Diamond weapons | 5 |
| Netherite weapons | 6 |
| Steel weapons | 4 |
| Platinum weapons | 5 |
| Rose Gold weapons | 6 |
| Astrite weapons | 6 |
| Gates of Avarice weapons | 6 |
| Staff | 2 |
| Short Bow | 5 |
| Long Bow | 6 |
| Scatter, Dual, and Heavy Crossbows | 6 |
| Coral Skewer, Glacier Trident, and Hellfork | 6 |

Runic weapon-type tags classify Daggers, Cleavers, Machetes, Longswords, Broadswords, Rapiers, and Sickles as swords; Glaives, Javelins, Spears, Gaundaos, and Pitchforks as tridents; Hammers and Battle Axes as maces; and the custom bows and crossbows in their matching categories.

## Enforced Metals Integration

The former Supersteel integration now uses the mod ID `enforcedmetals` throughout.

| Material | Arsenal coverage | Acquisition |
|---|---|---|
| Steel | All 14 weapon families | Crafted with `#c:ingots/steel` |
| Rose Gold | All 14 weapon families | Crafted with a supported Rose Gold common ingot tag |
| Platinum | All 14 weapon families | Crafted with `#c:ingots/platinum` |
| Astrite | All 14 weapon families | Smithing upgrade from the matching Netherite weapon |

Astrite uses `enforcedmetals:astrite_upgrade` as its smithing template and `enforcedmetals:astrite_ingot` as its addition. Enforced Metals weapons also receive Runic type tags and rune slots when both optional mods are installed.

## Gates of Avarice Integration

Gates of Avarice variants exist for Dagger, Glaive, Hammer, Machete, Gaundao, Longsword, and Broadsword. Their acquisition is supplied by the companion integration rather than Arsenal recipe JSON.

| Material | On-hit effect |
|---|---|
| Mana Steel | No additional status effect |
| Elixrite | No additional status effect |
| Lunarium | Slowness I for 60 ticks |
| Ignite | Slowness I for 60 ticks and at least 80 ticks of fire |
| Iridium | Slowness I for 60 ticks and at least 80 ticks of fire |
| Mythril | Slowness I for 60 ticks and at least 80 ticks of fire |
| Arcanium | Slowness I for 60 ticks, at least 80 ticks of fire, and Poison I for 80 ticks |
| Prismatic Steel | Slowness I for 60 ticks, at least 80 ticks of fire, and Poison I for 80 ticks |

All Gates of Avarice variants receive six Runic slots when both integrations are available.

## Better Combat Compatibility

Arsenal supplies Better Combat weapon attributes for its weapon families. When Better Combat is installed, Arsenal disables its conflicting built-in special-attack handlers, including dual-wield strikes, sickle pulls, spear special attacks, polearm or axe sweeps, and hammer smashes. The weapons continue to use their Better Combat attack animations and attributes.

## Configuration

### Weapon Power

The experimental weapon-power system is disabled by default.

| Setting | Default | Meaning |
|---|---:|---|
| Enabled | `false` | Allows weapons to gain power from mob kills |
| Base kills | 8 | Starting progression requirement |
| Kills per level | 6 | Additional progression requirement |
| Level exponent | 1.25 | Curves the experience requirement |
| Growth per level | 3% | Damage increase per power level |

When enabled, the damage multiplier is `1 + power level × 0.03`. The system supports eligible melee weapons, bows, crossbows, tridents, maces, and related weapon items. Holding Alt displays expanded power information in the tooltip.

---

Arsenal Weapons is registered under the mod ID `arsenal`. This wiki intentionally calls out items whose recipes are absent from the current data so that registered content is not confused with normally craftable content.
