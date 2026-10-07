# Getting Started

Enchant Gear in RUNIC by applying enchants, with various stat and effect bonuses, Upgrade gear with inscriptions, manage corruption and overpower your gear with mythics, synergies and relics.

[Watch the RUNIC guide](https://www.youtube.com/watch?v=tCR0U-hLL94)

## Main Blocks

Enchanting Table: turns Blank Etchings into stat or effect etchings and applies configured whitelist enchantments.

Etching Table: crafts inscriptions and special rune items from a Blank Inscription and recipe material.

Artisan's Workbench: applies enhancements and inscriptions to gear.

## Main Items

Etching: a smaller enhancement, usually a weaker stat roll or level 1 effect.

Rune: a stronger enhancement, usually a better stat roll or level 2 effect.

Inscription: a utility item used to modify gear, such as adding slots, rerolling stats, extracting enhancements, or reducing corruption.

Relic: a powerful item that can be bound to gear with a relic socket.

## Basic Gamplay

1. Craft or find Blank Etchings, Blank Inscriptions, and runes.
2. Enchant a Blank Etching, or craft an inscription at the Etching Table.
3. Put gear in the Artisan's Workbench.
4. Apply the enhancement if the gear has enough open enhancement slots.
5. Watch corruption and negative attributes as the item grows stronger.

## Enhancement Slots

Most gear has a limited number of enhancement slots. Better gear usually has more slots.

If an item has no slots, it cannot hold normal runes or etchings unless another datapack or mod gives it slots.

Pack authors can also assign it with `rune_slots.whitelist = ["modid:item=count"]`. Items in `rune_slots.blacklist` always have zero slots.

---

# Runes and Etchings

Runes and etchings are the main way to improve gear.

## Etchings

Etchings are smaller enhancements. They are easier to craft and usually roll lower values.

Use etchings when you want to start improving gear early or fill a build with smaller bonuses.

## Runes

Runes are stronger enhancements. They use the same general system as etchings, but their stat rolls and effect levels are stronger.

Use runes when you are ready to invest in a weapon, tool, armor piece, bow, or other supported gear.

## Stat Enhancements

Stat enhancements can improve things like:

- Attack damage
- Attack speed
- Attack range
- Movement speed
- Mining speed
- Durability
- Health
- Resistances
- Toughness
- Draw speed
- Status chances such as bleeding, freezing, stunning, poison, withering, flame, or shocking

Some stats have caps, and caps are always enabled. Upgrade raises a stat up to its cap; Cursed can push a capped stat beyond it at significant risk.

## Effect Enhancements

Effect enhancements behave like selected enchantments, but they are handled through RUNIC instead of the normal enchanting table.

Examples include effects such as Mending, Fortune, Flame, Piercing, Soul Speed, Frost Walker, Thorns, and supported modded enchantments.

## Random Rolls

Many stat runes and etchings are stored as a template until applied. The final value is rolled when the enhancement is applied to gear.

See [Enchantments and Base Stats](Enchantments-and-Base-Stats.md) for every range and cap.

---

# Enchantments and Base Stats

RUNIC enhancements are either stat enhancements or effect enchantments. A rune uses the rune range; an etching uses the lower etching range. Values are rolled when applied in the Artisan's Workbench. Percent-based values display as percentages; flat stats are marked below. A cap of `0` means the stat has no fixed cap.

| Stat id | Rune roll | Etching roll | Cap | Type |
|---|---:|---:|---:|---|
| `attack_speed` | 10–28 | 5–14 | none | percent |
| `attack_damage` | 2.0–3.5 | 1.0–2.0 | none | flat, 0.1 steps |
| `attack_range` | 6–14 | 3–7 | 20 | percent |
| `movement_speed` | 8–18 | 4–9 | 30 | percent |
| `sweeping_range` | 6–12 | 3–6 | 35 | percent |
| `durability` | 12–100 | 6–50 | none | percent |
| `resistance` | 1–4 | 1–2 | 4 | percent |
| `fire_resistance` | 4–8 | 2–4 | 15 | percent |
| `blast_resistance` | 4–8 | 2–4 | 15 | percent |
| `projectile_resistance` | 4–8 | 2–4 | 15 | percent |
| `knockback_resistance` | 4–8 | 2–4 | 15 | percent |
| `mining_speed` | 12–80 | 6–40 | none | percent |
| `undead_damage` | 10–32 | 5–16 | none | percent |
| `nether_damage` | 10–32 | 5–16 | none | percent |
| `health` | 2.0–4.0 | 1.0–2.0 | none | flat, 0.1 steps |
| `stun_chance` | 6–12 | 3–6 | 35 | percent |
| `flame_chance` | 6–12 | 3–6 | 35 | percent |
| `bleeding_chance` | 6–12 | 3–6 | 60 | percent |
| `shocking_chance` | 6–12 | 3–6 | 60 | percent |
| `poison_chance` | 6–12 | 3–6 | 60 | percent |
| `withering_chance` | 6–12 | 3–6 | 60 | percent |
| `weakening_chance` | 6–12 | 3–6 | 60 | percent |
| `draw_speed` | 10–24 | 5–12 | none | percent |
| `toughness` | 2.0–4.0 | 1.0–2.0 | 20 | flat, 0.1 steps |
| `freezing_chance` | 6–12 | 3–6 | 35 | percent |
| `leeching_chance` | 2.0–6.0 | 1.0–3.0 | 18 | percent, 0.1 steps |
| `fangs` | 8–15 | 4–8 | 35 | percent |
| `stone` | 10–20 | 5–10 | 30 | percent |
| `aegis` | 3–8 | 1–4 | 12 | percent |
| `jump_height` | 6–18 | 3–9 | 25 | percent |
| `power` | 8–25 | 4–13 | none | percent |
| `ability_power` | 8–25 | 4–13 | none | percent |

## Effect Enchantments

Effect runes apply their enchantment at level 2 and etchings at level 1, clamped to that enchantment's maximum level. RUNIC ships support for selected vanilla and compatibility enchantments. Datapacks and `enchantments.whitelist` can add more.

Whitelisted enchantments are deliberately unrestricted by RUNIC: they can be represented as runes or etchings, applied to any item accepted by the workbench, offered by the enchanting table, and retained in enchanted-book loot.

---

# Enchanting Table

RUNIC repurposes the enchanting table for Blank Etchings and explicitly whitelisted enchantments.

## Blank Etchings

Place a Blank Etching in the item slot. The resource slot accepts Lapis Lazuli, Diamond, Amethyst Shard, Emerald, Gold Ingot, or Echo Shard.

| Resource | Category |
|---|---|
| Lapis Lazuli | any category |
| Diamond | offensive |
| Amethyst Shard | defensive |
| Emerald | elemental |
| Gold Ingot | utility |
| Echo Shard | forbidden; only Epic or Legendary offers |

Offer one prefers Common/Uncommon, offer two prefers Uncommon/Rare/Epic, and offer three prefers Epic/Legendary. If a normal tier has no candidates, RUNIC falls back to the allowed category pool. Etching costs are capped at 25; the second offer is at least 15 and the third is always 25.

The selected stat or effect is written to the resulting Etching. Stat values remain unrolled until forging; effect etchings apply at level 1 when forged.

## Whitelisted Enchantments

`enchantments.whitelist` is the single config list for normal enchantments. Every listed enchantment can appear on books and enchantable items, is allowed as a RUNIC effect on any workbench target, bypasses RUNIC stripping, and is preserved in enchanted-book loot. Non-whitelisted normal item offers remain disabled.

Use valid TOML list syntax:

```toml
[enchantments]
whitelist = ["minecraft:sharpness", "minecraft:protection", "othermod:custom_enchant"]
```

Invalid ids are ignored individually instead of causing the whole list to be reset.

---

# Etching Table

The Etching Table is RUNIC's inscription crafting station. Blank Etchings themselves are enchanted at the normal Enchanting Table; this block consumes a Blank Inscription plus a recipe material to make utility inscriptions and special rune items.

## Operation

1. Put the recipe base in the first input and its material in the second.
2. Inspect the server-generated output preview.
3. Pay the five-level crafting cost and take the result.

Only recipes whose base accepts `runic:blank_inscription` appear in this menu. Blacklisted enchantments, disabled stats, missing compatibility stats, and unknown mythic ids invalidate a recipe. JEI displays registered recipes when installed.

`crafting.disable_inscription_crafting = true` clears the result and prevents the five-level payment/craft. It does not disable Blank Etching enchanting.

## Datapack Recipe

```json
{
  "type": "runic:etching_table",
  "base": { "item": "runic:blank_inscription" },
  "material": { "item": "minecraft:diamond" },
  "result": { "id": "runic:upgrade_rune", "count": 1 }
}
```

Recipes may also declare `stat`, `effect`, or `mythic` to write enhancement data to the result.

---

# Artisan's Workbench

The Artisan's Workbench is where gear is modified.

## What It Does

The workbench can:

- Apply runes and etchings
- Apply utility inscriptions
- Add or remove enhancement slots
- Reroll or upgrade stats
- Extract enhancements
- Add relic sockets
- Bind relics to socketed gear
- Preview corruption and item changes

## Enhancement Slots

Each applied rune or etching uses enhancement capacity. If the item is full, you need to remove something or increase capacity before adding more.

Synergies use no slots, relics use their own socket, and mythic runes require a free normal slot. The output preview is authoritative and is computed server-side.

## Previewing Risk

The workbench preview shows expected changes before you commit. Pay attention to:

- Corruption gain
- Durability loss
- Slot changes
- New attributes
- Warnings that the item may become exhausted

## When an Item Is Blocked

An item may be blocked from further modification if it is sealed, exhausted, unsupported, or missing the required slot/socket.

Sealed specifically blocks extraction. Exhausted blocks all forging. Dissonant blocks mythic runes and Synergy Potential.

---

# Forging

Forging is the process of changing gear in the Artisan's Workbench. Put the gear in the target slot and a rune, etching, inscription, mythic rune, or relic in the enhancement slot. The preview shows the exact resulting item before the operation is accepted.

## Capacity

Normal runes and etchings consume one rune slot per stat or effect. Synergies do not consume slots. Mythic runes require an available slot. Relics use a separate relic socket. An item at zero capacity cannot accept normal enhancements.

Slot priority is: global rune-slot disable, item blacklist, config whitelist override, stored capacity, datapack item capacity, datapack tag capacity, then detected/default gear type. A blacklist always wins. A whitelist entry such as `minecraft:stick=2` gives that item exactly two slots and overrides any existing allocation.

## Applying Enhancements

- Stat runes roll from the rune range; stat etchings roll from the etching range.
- Effect runes apply level 2; effect etchings apply level 1; both clamp to the enchantment maximum.
- Existing incompatible effect enchantments can block an application.
- Rune applications can trigger a compatible synergy roll. Etchings cannot create synergies.
- Each rarity adds its configured corruption: Common 1, Uncommon 1, Rare 2, Epic 2, Legendary 3, Mythic 20, and an etching adds 1 by default.

## Synergy Rolls

The default synergy chance is 20%, plus 20 percentage points per Synergy Potential level, capped at 80%. Success adds 5 corruption. Failure adds 2; Fractured gear adds another 5. Resonance inscriptions raise Synergy Potential and immediately attempt available synergies.

## Limits

Exhausted gear cannot be forged. Dissonant gear cannot gain Synergy Potential or mythic runes. Stat caps are always enforced; Upgrade and Cursed inscriptions are the controlled ways to reach or exceed them.

---

# Inscriptions

Inscriptions are one-use forging tools used in the Artisan's Workbench. Defaults below come from the `forging` config section.

| Inscription | Exact default behavior |
|---|---|
| Restoration/Repair Rune | Removes 10 corruption, reduces maximum durability by 15%, and adds Brittle. Requires damageable gear with corruption. |
| Expansion Rune | Adds one rune slot, records one expansion, reduces maximum durability by 10%, and adds 8 corruption. |
| Nullification Rune | Removes all stat and effect enhancements, clears synergies, removes one slot, and adds 10 corruption. |
| Upgrade Rune | Raises one eligible stat by up to 10 points without exceeding its cap, adds Overforged, and adds 5 corruption plus another 5 if already Overforged. |
| Reroll Inscription | Rerolls one stat using its rune range, adds 3 corruption, and adds Unstable when the new roll is higher. Each Unstable level lowers future roll bounds by 2. |
| Cursed Inscription | Has a 50% base success chance, reduced by 10 percentage points per Cursed level. Success adds 25 to one capped stat and adds Cursed/Overforged. Failure adds Cursed, reduces stats by 5%, and adds Brittle. Always adds 10 corruption. |
| Wild Inscription | Replaces one enhancement with another of the same category, adds Chaotic, and adds 12 corruption. Synergy mutation is disabled by default. |
| Extraction Inscription | Extracts one eligible enhancement, seals the gear, and adds 8 corruption. Synergy and mythic extraction are disabled by default. |
| Resonance Inscription | Adds one Synergy Potential, adds Fractured, adds 6 corruption, and attempts an available synergy. |
| Purification Inscription | Removes one negative attribute level, adds Brittle, adds 10 corruption, and has a 50% chance to reduce maximum durability by 10%. |
| Stabilization Inscription | Removes one Unstable level, adds Brittle, and adds 5 corruption. |
| Tempering Inscription | Adds one Reinforced level and 5 corruption. Each Reinforced level reduces durability loss by 10% by default. |
| Relic Socket Inscription | Adds an empty relic socket, adds Brittle, and adds 10 corruption. |
| Dissonant Inscription | Creative-only. Clears corruption, synergies, mythic runes, and negative conditions; sets Dissonant, which blocks future synergy potential and mythic runes. |

`crafting.disable_inscription_crafting = true` disables inscription recipes in the Etching Table without disabling enchanting-table etchings.

---

# Corruption and Attributes

Corruption is a stored risk score. The default Exhausted threshold is 100, and the displayed percentage is `corruption / threshold × 100`. Corruption is clamped between zero and the threshold.

## Bands and Roll Chances

Every operation that increases corruption performs independent negative and positive attribute rolls using the band reached after that increase.

| Band | Percent | Negative roll | Positive roll | Possible negative attributes | Possible positive attributes |
|---|---:|---:|---:|---|---|
| Stable | 0–24% | 0% | 0% | none | none |
| Tainted | 25–49% | 5% | 0% | Brittle, Fractured, Unstable | none |
| Corrupted | 50–74% | 10% | 3% | Brittle, Fractured, Unstable, Chaotic | Reinforced, Tempered |
| Critical | 75–99% | 20% | 5% | Brittle, Fractured, Unstable, Chaotic, Cursed | Reinforced, Tempered, Ancient, Harmonized |
| Exhausted | 100% | no roll | no roll | Exhausted is applied | none |

The two rolls are independent, so one corruption gain can add both a negative and a positive attribute. Negative attributes are normally added only once by random corruption rolls; positive attributes can gain levels up to 10.

## Attribute Effects

| Attribute | Effect |
|---|---|
| Sealed | Prevents another extraction. |
| Cursed | Multiplies enhancement power and effective stat caps by `0.95^level`; also reduces the next Cursed Inscription success chance by 10 percentage points per level. |
| Unstable | Lowers both ends of future stat reroll ranges by 2 per level. |
| Negative | Reduces effective rune-slot capacity by one per level. |
| Ancient | Adds 5% enhancement power per level by default. |
| Brittle | Increases durability loss through the durability handling system. |
| Fractured | Adds 5 extra corruption after a failed synergy roll by default. |
| Exhausted | Blocks further workbench modification. |
| Overforged | Marks upgraded gear; another Upgrade adds extra corruption. |
| Chaotic | Marks gear changed by a Wild Inscription. |
| Reinforced | Reduces durability loss by 10% per level by default. |
| Tempered | Reduces inscription corruption by 10% per level by default. |
| Harmonized | Adds 10% synergy power per level by default, stacking with Dominion. |
| Dissonant | Forces Synergy Potential to zero and prevents mythic runes. |

## Managing Corruption

Restoration removes corruption at the cost of maximum durability and Brittle. Purification removes one removable negative attribute but adds corruption and Brittle. Stabilization trades Unstable for Brittle. Reaching the threshold permanently applies Exhausted even if corruption is later lowered.

---

# Synergies

Synergies are bonus powers that unlock when the right rune effects are on the same item.

Synergies do not replace the runes that created them. The original runes stay on the item, keep using their rune slots, and continue to work normally. The synergy is an extra bonus layered on top.

Etchings cannot create synergies. Synergies come from runes, resonance effects, or creative-only Synergy Runes.

## Reading Synergies

On gear tooltips, synergy runes that influence a synergy are shown indented below it in yellow. Their rolled values affect how strong the synergy is, so a stronger Freezing rune will make Freezing-based synergies better.

Synergies do not consume rune slots.

## Quick Recipe Chart

```text
Rune A + Rune B ──synergy roll──▶ Free bonus effect
       └─ both original runes remain and keep working
```

| Synergy | Required runes | Main purpose |
|---|---|---|
| Berserk | Attack Speed + Attack Damage | Sustained combat speed |
| Bloodfire | Flame Chance + Bleeding Chance | Fire and bleed pressure |
| Corrosion | Poison Chance + Weakening Chance | Armor penetration |
| Frostbite | Freezing Chance + Bleeding Chance | Stronger freezing and chilled damage |
| Ice Burst / Ice Prison | Freezing Chance + Shocking Chance | Area control |
| Shatter | Freezing Chance + Flame Chance | Area burst damage |
| Reaper | Leeching Chance + Weakening Chance | Healing and finishing weakened targets |
| Soulburn | Flame Chance + Withering Chance | Spreading damage over time |
| Tempest | Shocking Chance + Attack Speed | Chained lightning |
| Venom Burst | Poison Chance + Shocking Chance | Poison explosion |
| Juggernaut | Stone + Resistance | Defensive armor response |

The rune roll ranges are listed in [Enchantments and Base Stats](Enchantments-and-Base-Stats.md). Synergy unlock chances and corruption costs are explained in [Forging](Forging.md#synergy-rolls).

---

## Berserk

**Recipe:** `attack_speed` + `attack_damage`

After landing three qualifying hits, the wielder enters a short combat rush. By default, Berserk increases attack speed by 20% and movement speed by 10% for **5 seconds**. Continuing to fight can refresh the effect.

**Best for:** fast melee weapons and aggressive builds that stay on one target.

---

## Bloodfire

**Recipe:** `flame_chance` + `bleeding_chance`

Bloodfire combines burning and bleeding into sustained pressure. It applies **4 seconds of fire** and has a **35% bleed chance**, with the bleed lasting **4 seconds** by default.

**Best for:** damage-over-time builds and groups of enemies that remain close together.

---

## Corrosion

**Recipe:** `poison_chance` + `weakening_chance`

Corrosion makes poisoned or weakened enemies easier to break through. By default, it ignores **25% of the target's armor** and adds **20% bonus damage** through its configured damage multiplier.

**Best for:** heavily armored enemies and durable bosses.

---

## Frostbite

**Recipe:** `freezing_chance` + `bleeding_chance`

Frostbite makes bleeding targets freeze faster and makes chilled targets more vulnerable. The default freeze buildup is multiplied by **1.5**, while chilled enemies take **15% additional damage**.

**Best for:** control builds that repeatedly apply Freezing and Bleeding.

---

## Ice Burst / Ice Prison

**Recipe:** `freezing_chance` + `shocking_chance`

This synergy creates an area-control burst around a frozen or shocked target. Its default radius is **3 blocks** and its normal duration is **2 seconds**. Bosses receive one quarter of that duration—about **0.5 seconds**—and the effect has a **5-second cooldown**.

**Best for:** interrupting groups and briefly controlling dangerous enemies.

---

## Shatter

**Recipe:** `freezing_chance` + `flame_chance`

Shatter turns the clash between freezing and fire into an area burst. It reaches **3 blocks**, deals damage using a **35% multiplier**, and can trigger once every **2 seconds** by default.

**Best for:** burst damage against packed enemies.

---

## Reaper

**Recipe:** `leeching_chance` + `weakening_chance`

Reaper rewards finishing weakened enemies. It heals **3 health**, grants **15% attack speed for 4 seconds**, and becomes especially effective when the target falls below **30% health**.

**Best for:** sustain-focused melee builds and long fights.

---

## Soulburn

**Recipe:** `flame_chance` + `withering_chance`

Soulburn spreads burning and Wither between nearby enemies. The default spread reaches **4 blocks**, applies Wither for **5 seconds**, and can trigger once every **2 seconds**.

**Best for:** clearing clustered enemies with overlapping damage-over-time effects.

---

## Tempest

**Recipe:** `shocking_chance` + `attack_speed`

Tempest builds electrical charge through repeated attacks. After **5 hits**, it chains lightning to as many as **3 nearby targets** within **5 blocks**, dealing damage with a **25% multiplier**.

**Best for:** fast weapons fighting groups.

---

## Venom Burst

**Recipe:** `poison_chance` + `shocking_chance`

Poisoned enemies have a **25% chance** to erupt. The burst reaches **3.5 blocks**, deals damage with a **20% multiplier**, and applies poison for **4 seconds**.

**Best for:** spreading poison through tightly grouped enemies.

---

## Juggernaut

**Recipe:** `stone` + `resistance` — armor only

Juggernaut reacts when a hit deals at least **20% of the wearer's health**. It grants **4 armor** and **50% knockback resistance** for **5 seconds**, followed by a **15-second cooldown**.

**Best for:** tank builds that need protection after taking a heavy hit.

---

## Related Pages

- [Enchantments and Base Stats](Enchantments-and-Base-Stats.md) — rune ranges, etching ranges, and stat caps.
- [Forging](Forging.md#synergy-rolls) — unlock chance, Synergy Potential, success corruption, and failure corruption.
- [Corruption and Attributes](Corruption-and-Attributes.md) — Fractured and Harmonized interactions.
- [Configuration Reference](Configuration.md#forging) — every `forging.synergy_effects` setting and default.

## Creative Synergy Runes

Synergy Runes are creative-only testing items. Applying one also adds the two relevant base rune effects so the synergy can be tested immediately.

## Synergy Potential

Some items can gain Synergy Potential. More potential gives more chances to unlock synergy bonuses, but failed attempts can add corruption.

## Dissonant Items

The Dissonant Inscription is a creative-only testing inscription. It sets an item's Synergy Potential to 0 and prevents that item from holding Mythic Runes.

---

# Mythic Runes

Mythic runes are rare, powerful upgrades with larger tradeoffs than normal runes.

## Ruin

Adds 20% damage. Hits have a 5% chance to add 1 corruption, and durability use increases by 20%.

## Dominion

Adds 10% power to other enhancements and 5% power to synergies for each Dominion rune.

## Hunger

Restores 2 durability on kills. Hits have a 3% chance to add 1 corruption.

## Void

Below 35% health, deals 25% more damage. While in combat, adds 1 corruption every 200 ticks.

## Ascendance

Defeating a target with at least 50 maximum health grants a 200-tick buff with 15% damage and 10% speed bonuses.

## Rules

Most mythic runes are for weapons or ranged weapons. Dominion can also apply to armor.

An item cannot use every mythic rune freely. If the workbench rejects one, the item type is probably unsupported or the rune is already present.

Mythic application adds its configured 20 base corruption by default, may apply a curse, and is controlled under `forging.mythics`.

---

# Relics

Relics are guaranteed boss drops. They do not use the structure-loot rarity weights. To bind one, add a Relic Socket with its inscription, then forge the socketed damageable gear with the relic in the Artisan's Workbench.

| Relic | Source | Corruption | Extra durability use | Passive defaults | Full-set power |
|---|---|---:|---:|---|---|
| Dragon Heart | Ender Dragon | 10 | 20% | +10% fire damage and +2 seconds burn duration | +25% fire damage; relic key breathes dragon fire; ignite aura chance 15% in radius 4 |
| Elder Guardian's Eye | Elder Guardian | 10 | 20% | +15% underwater damage and +10% mining speed | relic key fires a guardian beam; slow chance 20% for 60 ticks |
| Wither Charge | Wither | 12 | 25% | +20% wither duration and +10% damage to withered targets | relic key launches a wither bullet; wither pulse chance 15% in radius 4 |
| Warden's Soul | Warden | 15 | 35% | +10% boss/high-health damage; heavy-damage pulse chance 20% | relic key releases a 6-damage sonic pulse; 300-tick cooldown |

## Sets

The default full-set requirement is four equipped armor pieces carrying the same relic. Broken or unequipped pieces do not count. Set bonuses are enabled by default, and normal relic effects require the item to be equipped. The relic keybind activates the set's active power when its cooldown permits.

All values are configurable under `forging.relics`.

---

# Loot and Drop Rates

RUNIC injects loot into structure/chest-style tables and excludes villager, fishing, ordinary entity, block, gameplay, and trade tables unless the table is a named unique-rune source.

## Structure Roll

The default injection chance is 35% per eligible loot table. A successful table produces one roll, or two rolls in Bastions and Ancient Cities.

For each normal roll:

- 25% selects a utility item: Repair 50%, Expansion 25%, Nullification 16.67%, Upgrade 8.33%.
- The remaining 75% selects a stat rune 80% of the time or an effect rune 20% of the time. Across all successful rolls, that is 60% stat and 15% effect.
- Stat/effect selection is weighted by enhancement rarity. Higher `loot.*_rarity` values make that rarity more common relative to the others.

Default rarity values are Common 60, Uncommon 35, Rare 18, Epic 8, Legendary 3, and Mythic 1. These are relative selection weights, not direct percentages.

## Mythic Loot

Before a normal/unique roll, eligible high-difficulty sources attempt a mythic roll. Ancient City, End City, Bastion, Fortress, Trial Chamber/Vault, and Deep Dark qualify; the default minimum difficulty is 4. The default check is `rarity / 24`, so rarity 1 is about 4.17% after the table's 35% injection succeeds.

## Unique Sources

- Mansion, Outpost, and raider sources include Leeching, Multishot, Binding Curse, Vanishing Curse, and Stun.
- Evokers add Fangs.
- Trial Chamber/Vault sources include Wind Burst, Density, and Breach.
- Ancient Cities include Swift Sneak, Leeching, Stun, Binding Curse, and Vanishing Curse.
- Nether Fortress/Bastion/bartering sources include Nether Damage, Soul Speed, Health, Fire Resistance, Blast Resistance, and Withering.

Unique rune choices use `loot.loot_only_etching_rarity` as their relative repetition value. Their rune drops remain available regardless of the etching toggle. Unique/overpowered etching variants are excluded by default; `loot.all_runes_have_etchings = true` makes those same enhancements available as etchings.

## Relics and Books

Boss relics are guaranteed: Dragon Heart from the Ender Dragon, Wither Charge from the Wither, Elder Guardian's Eye from Elder Guardians, and Warden's Soul from Wardens. Enchanted books are removed unless they contain at least one enchantment in `enchantments.whitelist`; mixed books keep only whitelisted entries.

---

# Configuration Reference

The common config is `config/runic-common.toml`. Stop the game/server before large edits, keep TOML strings quoted, and restart or reload the config afterward. Decimal chances use `0.0` to `1.0`; `0.25` means 25%. Rarity values are relative weights: increasing one makes it more common compared with the others.

## Lists

```toml
[enchantments]
whitelist = ["minecraft:sharpness", "minecraft:protection"]

[rune_slots]
blacklist = ["storagedrawers:oak_full_drawers_1"]
whitelist = ["minecraft:stick=2", "othermod:special_sword=6"]
```

`rune_slots.blacklist` always wins. `rune_slots.whitelist` adds unsupported items and overrides existing counts; duplicate ids use the last count. Enchantment ids that do not parse are ignored individually.

## Every Key and Default

### `crafting`

| Key | Default |
|---|---:|
| `crafting.disable_inscription_crafting` | `false` |

### `enchant_blacklist`

| Key | Default |
|---|---:|
| `enchant_blacklist.blacklisted` | `[]` |
| `enchant_blacklist.disable_all` | `false` |

### `enchantments`

| Key | Default |
|---|---:|
| `enchantments.whitelist` | `[]` |

### `enhancement_blacklist`

| Key | Default |
|---|---:|
| `enhancement_blacklist.stats` | `[]` |

### `forging`

| Key | Default |
|---|---:|
| `forging.attributes.ancient_enhancement_power_bonus_percent` | `5.0` |
| `forging.attributes.harmonized_synergy_power_bonus_percent` | `10.0` |
| `forging.attributes.reinforced_durability_loss_reduction_percent` | `10.0` |
| `forging.attributes.tempered_inscription_corruption_reduction_percent` | `10.0` |
| `forging.base_synergy_chance` | `0.20` |
| `forging.common_corruption` | `1` |
| `forging.corruption.corrupted_negative_attribute_roll_chance` | `0.10` |
| `forging.corruption.corrupted_positive_attribute_roll_chance` | `0.03` |
| `forging.corruption.critical_negative_attribute_roll_chance` | `0.20` |
| `forging.corruption.critical_positive_attribute_roll_chance` | `0.05` |
| `forging.corruption.enable_negative_attributes` | `true` |
| `forging.corruption.enable_positive_attributes` | `true` |
| `forging.corruption.stable_attribute_roll_chance` | `0.0` |
| `forging.corruption.tainted_negative_attribute_roll_chance` | `0.05` |
| `forging.corruption.tainted_positive_attribute_roll_chance` | `0.0` |
| `forging.cursed_inscription_corruption` | `10` |
| `forging.cursed_inscription_failure_adds_brittle` | `true` |
| `forging.cursed_inscription_overupgrade_percent` | `25.0` |
| `forging.cursed_inscription_success_chance` | `0.50` |
| `forging.epic_corruption` | `2` |
| `forging.etching_corruption` | `1` |
| `forging.exhausted_corruption_threshold` | `100` |
| `forging.expansion_inscription_corruption` | `8` |
| `forging.expansion_inscription_max_durability_loss_percent` | `10.0` |
| `forging.extraction_inscription_can_extract_mythic` | `false` |
| `forging.extraction_inscription_can_extract_synergies` | `false` |
| `forging.extraction_inscription_corruption` | `8` |
| `forging.failed_synergy_corruption` | `2` |
| `forging.fractured_extra_failure_corruption` | `5` |
| `forging.legendary_corruption` | `3` |
| `forging.max_synergy_chance` | `0.80` |
| `forging.max_synergy_potential` | `3` |
| `forging.mythic_corruption` | `20` |
| `forging.mythics.apply_curse_on_success` | `true` |
| `forging.mythics.ascendance.damage_bonus_percent` | `15.0` |
| `forging.mythics.ascendance.duration_ticks` | `200` |
| `forging.mythics.ascendance.speed_bonus_percent` | `10.0` |
| `forging.mythics.ascendance.target_max_health_threshold` | `50.0` |
| `forging.mythics.can_be_extracted` | `false` |
| `forging.mythics.can_be_mutated_by_wild` | `false` |
| `forging.mythics.dominion.enhancement_power_bonus_percent` | `10.0` |
| `forging.mythics.dominion.synergy_power_bonus_percent` | `5.0` |
| `forging.mythics.enabled` | `true` |
| `forging.mythics.extra_curse_chance` | `0.25` |
| `forging.mythics.hunger.durability_restore_on_kill` | `2` |
| `forging.mythics.hunger.extra_corruption_amount` | `1` |
| `forging.mythics.hunger.extra_corruption_on_hit_chance` | `0.03` |
| `forging.mythics.loot_enabled` | `true` |
| `forging.mythics.min_loot_difficulty` | `4` |
| `forging.mythics.rarity` | `1` |
| `forging.mythics.ruin.damage_bonus_percent` | `20.0` |
| `forging.mythics.ruin.durability_use_increase_percent` | `20.0` |
| `forging.mythics.ruin.extra_corruption_amount` | `1` |
| `forging.mythics.ruin.extra_corruption_chance` | `0.05` |
| `forging.mythics.void.combat_corruption_amount` | `1` |
| `forging.mythics.void.combat_corruption_interval_ticks` | `200` |
| `forging.mythics.void.damage_bonus_percent` | `25.0` |
| `forging.mythics.void.low_health_threshold` | `0.35` |
| `forging.nullification_inscription_can_remove_synergies` | `true` |
| `forging.nullification_inscription_corruption` | `10` |
| `forging.nullification_inscription_removes_slot` | `true` |
| `forging.purification_inscription_corruption` | `10` |
| `forging.purification_inscription_durability_loss_chance` | `0.50` |
| `forging.purification_inscription_max_durability_loss_percent` | `10.0` |
| `forging.rare_corruption` | `2` |
| `forging.relic_loot_injection_enabled` | `true` |
| `forging.relic_socket_inscription_adds_brittle` | `true` |
| `forging.relic_socket_inscription_corruption` | `10` |
| `forging.relics.default_corruption` | `10` |
| `forging.relics.default_durability_use_increase_percent` | `20.0` |
| `forging.relics.dragon_heart.burn_duration_bonus_seconds` | `2` |
| `forging.relics.dragon_heart.corruption` | `10` |

| `forging.relics.dragon_heart.durability_use_increase_percent` | `20.0` |
| `forging.relics.dragon_heart.fire_damage_bonus_percent` | `10.0` |
| `forging.relics.dragon_heart.full_set_fire_damage_bonus_percent` | `25.0` |
| `forging.relics.dragon_heart.full_set_ignite_aura_chance` | `0.15` |
| `forging.relics.dragon_heart.full_set_ignite_aura_radius` | `4.0` |
| `forging.relics.effects_require_equipped` | `true` |
| `forging.relics.elder_guardians_eye.corruption` | `10` |
| `forging.relics.elder_guardians_eye.durability_use_increase_percent` | `20.0` |
| `forging.relics.elder_guardians_eye.full_set_slow_chance` | `0.20` |
| `forging.relics.elder_guardians_eye.full_set_slow_duration_ticks` | `60` |
| `forging.relics.elder_guardians_eye.mining_speed_bonus_percent` | `10.0` |
| `forging.relics.elder_guardians_eye.underwater_damage_bonus_percent` | `15.0` |
| `forging.relics.enable_set_bonuses` | `true` |
| `forging.relics.full_set_required_count` | `4` |
| `forging.relics.wardens_soul.boss_damage_bonus_percent` | `10.0` |
| `forging.relics.wardens_soul.corruption` | `15` |
| `forging.relics.wardens_soul.durability_use_increase_percent` | `35.0` |
| `forging.relics.wardens_soul.full_set_sonic_pulse_cooldown_ticks` | `300` |
| `forging.relics.wardens_soul.full_set_sonic_pulse_damage` | `6.0` |
| `forging.relics.wardens_soul.heavy_damage_pulse_chance` | `0.20` |
| `forging.relics.wardens_soul.high_health_threshold` | `100.0` |
| `forging.relics.wither_charge.corruption` | `12` |
| `forging.relics.wither_charge.damage_to_withered_bonus_percent` | `10.0` |
| `forging.relics.wither_charge.durability_use_increase_percent` | `25.0` |
| `forging.relics.wither_charge.full_set_wither_pulse_chance` | `0.15` |
| `forging.relics.wither_charge.full_set_wither_pulse_radius` | `4.0` |
| `forging.relics.wither_charge.wither_duration_bonus_percent` | `20.0` |
| `forging.reroll_inscription_add_unstable_on_higher_roll` | `true` |
| `forging.reroll_inscription_corruption` | `3` |
| `forging.resonance_inscription_corruption` | `6` |
| `forging.restoration_inscription_adds_brittle` | `true` |
| `forging.restoration_inscription_corruption_reduction` | `10` |
| `forging.restoration_inscription_max_durability_loss_percent` | `15.0` |
| `forging.stabilization_inscription_adds_brittle` | `true` |
| `forging.stabilization_inscription_corruption` | `5` |
| `forging.successful_synergy_corruption` | `5` |
| `forging.synergy_effects.berserk_attack_speed_bonus_percent` | `0.20` |
| `forging.synergy_effects.berserk_duration_ticks` | `100` |
| `forging.synergy_effects.berserk_hits_required` | `3` |
| `forging.synergy_effects.berserk_movement_speed_bonus_percent` | `0.10` |
| `forging.synergy_effects.bloodfire_bleed_chance` | `0.35` |
| `forging.synergy_effects.bloodfire_bleed_duration_ticks` | `80` |
| `forging.synergy_effects.bloodfire_fire_seconds` | `4` |
| `forging.synergy_effects.corrosion_armor_ignore_percent` | `0.25` |
| `forging.synergy_effects.corrosion_bonus_damage_multiplier` | `0.20` |
| `forging.synergy_effects.executioners_fury_damage_bonus_percent` | `0.15` |
| `forging.synergy_effects.executioners_fury_duration_ticks` | `100` |
| `forging.synergy_effects.executioners_fury_execution_health_threshold` | `0.30` |
| `forging.synergy_effects.frostbite_chilled_damage_multiplier` | `0.15` |
| `forging.synergy_effects.frostbite_freeze_bonus_multiplier` | `1.5` |
| `forging.synergy_effects.ice_prison_boss_duration_multiplier` | `0.25` |
| `forging.synergy_effects.ice_prison_cooldown_ticks` | `100` |
| `forging.synergy_effects.ice_prison_duration_ticks` | `40` |
| `forging.synergy_effects.ice_prison_radius` | `3.0` |
| `forging.synergy_effects.juggernaut_armor_bonus` | `4.0` |
| `forging.synergy_effects.juggernaut_cooldown_ticks` | `300` |
| `forging.synergy_effects.juggernaut_damage_threshold_percent` | `0.20` |
| `forging.synergy_effects.juggernaut_duration_ticks` | `100` |
| `forging.synergy_effects.juggernaut_knockback_resistance_bonus` | `0.5` |
| `forging.synergy_effects.reaper_attack_speed_bonus_percent` | `0.15` |
| `forging.synergy_effects.reaper_duration_ticks` | `80` |
| `forging.synergy_effects.reaper_execution_health_threshold` | `0.30` |
| `forging.synergy_effects.reaper_heal_amount` | `3.0` |
| `forging.synergy_effects.shatter_cooldown_ticks` | `40` |
| `forging.synergy_effects.shatter_damage_multiplier` | `0.35` |
| `forging.synergy_effects.shatter_radius` | `3.0` |
| `forging.synergy_effects.soulburn_cooldown_ticks` | `40` |
| `forging.synergy_effects.soulburn_radius` | `4.0` |
| `forging.synergy_effects.soulburn_wither_amplifier` | `0` |
| `forging.synergy_effects.soulburn_wither_duration_ticks` | `100` |
| `forging.synergy_effects.tempest_chain_targets` | `3` |
| `forging.synergy_effects.tempest_damage_multiplier` | `0.25` |
| `forging.synergy_effects.tempest_hits_required` | `5` |
| `forging.synergy_effects.tempest_radius` | `5.0` |
| `forging.synergy_effects.venom_burst_chance` | `0.25` |
| `forging.synergy_effects.venom_burst_damage_multiplier` | `0.20` |
| `forging.synergy_effects.venom_burst_poison_duration_ticks` | `80` |
| `forging.synergy_effects.venom_burst_radius` | `3.5` |
| `forging.synergy_potential_bonus` | `0.20` |
| `forging.tempering_inscription_corruption` | `5` |
| `forging.tempering_inscription_durability_loss_reduction_percent` | `10.0` |
| `forging.uncommon_corruption` | `1` |
| `forging.upgrade_inscription_corruption` | `5` |
| `forging.upgrade_inscription_extra_corruption_if_overforged` | `5` |
| `forging.upgrade_inscription_stat_increase_percent` | `10.0` |
| `forging.wild_inscription_can_mutate_synergies` | `false` |
| `forging.wild_inscription_corruption` | `12` |

### `loot`

| Key | Default |
|---|---:|
| `loot.all_runes_have_etchings` | `false` |
| `loot.common_rune_rarity` | `60` |
| `loot.disable_runic_loot` | `false` |
| `loot.epic_rune_rarity` | `8` |
| `loot.legendary_rune_rarity` | `3` |
| `loot.loot_only_etching_rarity` | `4` |
| `loot.mythic_rune_rarity` | `1` |
| `loot.rare_rune_rarity` | `18` |
| `loot.relic_rarity` | `2` |
| `loot.uncommon_rune_rarity` | `35` |

### `mechanics`

| Key | Default |
|---|---:|
| `mechanics.default_weapon_rune_slots` | `4` |
| `mechanics.disable_rune_slots` | `false` |

### `rune_slots`

| Key | Default |
|---|---:|
| `rune_slots.blacklist` | `[]` |
| `rune_slots.whitelist` | `[]` |

## Important Behavior

- `enchant_blacklist.disable_all` disables all non-whitelisted enchantments.

- `enchant_blacklist.blacklisted` disables selected enchantment ids; the whitelist overrides it.
- `enhancement_blacklist.stats` accepts RUNIC stat ids such as `attack_damage`.
- `mechanics.disable_rune_slots` removes slot limits globally.
- `loot.disable_runic_loot` disables structure injection and enchanted-book filtering.
- `loot.all_runes_have_etchings` adds etching variants for all runes, even overpowered ones.
- `crafting.disable_inscription_crafting` disables Etching Table inscription crafting only.
- `forging.corruption.*` controls attribute-roll chances by corruption band.
- `forging.attributes.*` controls per-level positive attribute bonuses.
- `forging.synergy_effects.*`, `forging.relics.*`, and `forging.mythics.*` tune their named systems.

---

# Compatibility and Datapacks

RUNIC supports datapack-driven compatibility for rune slots, custom gear categories, rarities, recipes, and effect enchantments.

This page is for players and pack makers. For mod developers, see [Developer Integration](Developer-Integration.md).

## Rune Slot Files

Rune slot files live in:

```text
data/<namespace>/rune_slots/<file>.json
```

They can give items or item tags enhancement slots.

```json
{
  "items": {
    "examplemod:crystal_sword": 5
  },
  "tags": {
    "examplemod:runic_greatswords": 5
  }
}
```

## Gear Type Files

The same rune slot file can tell RUNIC what kind of gear a custom item is.

```json
{
  "item_types": {
    "examplemod:crystal_sword": "sword"
  },
  "tag_types": {
    "examplemod:runic_longbows": "bow"
  }
}
```

Valid types are:

`helmet`, `chestplate`, `leggings`, `boots`, `sword`, `pickaxe`, `axe`, `shovel`, `hoe`, `bow`, `crossbow`, `shield`, `trident`, `elytra`, `fishing_rod`, `mace`.

## Effect Enchantment Files

Effect enchantment files live in:

```text
data/<namespace>/runic_effects/<file>.json
```

They allow enchantments to appear as RUNIC effect runes and etchings.

```json
{
  "effects": [
    "examplemod:storm_edge",
    "examplemod:lifesteal"
  ]
}
```

## Removing Built-In Effect Support

Packs can remove an effect from RUNIC's allowed list:

```json
{
  "remove": [
    "minecraft:mending"
  ]
}
```

## Reloading

After changing datapacks, reload the world or run `/reload`.

## Rarity Files

Rarity files live in `data/<namespace>/rarities/<file>.json` and map effect ids or `runic:stat/<id>` ids to rarity names. See [Developer Integration](Developer-Integration.md) for a complete example.

## Config Overrides

For a pack-specific item override, `rune_slots.whitelist = ["modid:item=count"]` is faster than a datapack. Use a datapack when distributing compatibility to other packs. `rune_slots.blacklist` always wins over both.

---

# Developer Integration

Use configuration for pack-local overrides, datapacks for distributable data integration, and Java only when adding new mechanics.

## Add or Remove Rune Slots

For a server/pack config override, use `rune_slots.whitelist = ["yourmod:item=5"]` or `rune_slots.blacklist = ["yourmod:item"]`. The blacklist wins, and a whitelist count overrides all detected, datapack, or stored capacities.

For a datapack, create `data/<namespace>/rune_slots/<file>.json`:

```json
{
  "defaults": { "sword": 4 },
  "items": { "yourmod:steel_greatsword": 5 },
  "tags": { "yourmod:runic_weapons": 5 },
  "item_types": { "yourmod:steel_greatsword": "sword" },
  "tag_types": { "yourmod:runic_weapons": "sword" }
}
```

Supported types are `helmet`, `chestplate`, `leggings`, `boots`, `sword`, `pickaxe`, `axe`, `shovel`, `hoe`, `bow`, `crossbow`, `shield`, `trident`, `elytra`, `fishing_rod`, and `mace`. Direct items beat tags; tags beat defaults. Vanilla classes and item attribute modifiers provide a final automatic fallback.

Legacy `{ "item": "id", "slots": 4 }` and `{ "list": [{"item":"id","slots":4}] }` files are also accepted.

## Add Effect Enchantments

The easiest runtime option is the config:

```toml
[enchantments]
whitelist = ["yourmod:storm_edge"]
```

This makes the enchantment a RUNIC effect, permits it on any workbench item, adds it to enchanting-table candidates, and preserves it in book loot.

For a distributable datapack list, create `data/<namespace>/runic_effects/<file>.json`:

```json
{
  "add": ["yourmod:storm_edge", "yourmod:lifesteal"],
  "remove": ["minecraft:mending"]
}
```

`effects` is an alias of `add`. Datapack removal affects the built-in effect set, but a config whitelist explicitly adds its ids back.

## Add Etching Table Recipes

Create `data/<namespace>/recipe/etching_table/<name>.json`:

```json
{
  "type": "runic:etching_table",
  "base": { "item": "runic:blank_inscription" },
  "material": { "item": "minecraft:lightning_rod" },
  "result": { "id": "runic:etching", "count": 1 },
  "effect": "yourmod:storm_edge"
}
```

Use `stat: "attack_damage"` for a stat template or `mythic: "runic:mythic/ruin"` for a mythic item. The menu shows only Blank Inscription-based recipes. Blank Etchings are produced through the Enchanting Table.

## Add or Change Rarities

Create `data/<namespace>/rarities/<file>.json`:

```json
{
  "default": "common",
  "entries": {
    "yourmod:storm_edge": "epic",
    "runic:stat/attack_damage": "uncommon"
  }
}
```

Valid built-in rarity keys are `common`, `uncommon`, `rare`, `epic`, `legendary`, `mythic`, and `cursed`. Rarity affects color, offer tiers, corruption category, and relative loot selection.

## Add Items Through Tags

Any item tag referenced by `tags` or `tag_types` must be a normal item tag at `data/<namespace>/tags/item/<name>.json`. This is the recommended way to integrate families of gear without enumerating every id.

## Java APIs

Important APIs are:

- `RuneSlotCapacityData` for reloadable slot/type data.
- `RuneSlots` for effective capacity, usage, expansion, and synchronization.
- `RuneStats` and `RuneStatType` for stat storage and capped combination.
- `RunicEffectEnchantments` for the live effect set.
- `RuneItem` and `EtchingItem` for enhancement item creation.
- `RunicItemData` for corruption, synergies, relic sockets, and mythic ids.
- `GearAttributes` for levelled item attributes.
- `SynergyRegistry`, `MythicRuneRegistry`, and `RelicRegistry` for built-in definitions.

Always mutate items on the logical server and call `RuneSlots.syncUsedToContents(stack)` after directly changing stats or enchantments.

```java
RuneStats current = RuneStats.get(stack);
RuneStats added = RuneStats.single(RuneStatType.ATTACK_DAMAGE, 2.0F);
RuneStats.set(stack, RuneStats.combine(current, added));
RuneSlots.syncUsedToContents(stack);
```

## Adding New Built-In Mechanics

- New stat: add a `RuneStatType`, translation/model/category/rarity data, application behavior if it is not a generic attribute, and optional recipe/loot source.
- New synergy: register its input pair and id in `SynergyRegistry`, implement behavior in `SynergyEffects`, add config values, tooltip text, model mapping, and tests or validation.
- New mythic rune: add a `MythicRuneDefinition`, application target rules, behavior in `MythicRuneEffects`, config values, translations, recipe/loot source, and model mapping.
- New relic: register its item and `RelicDefinition`, boss/loot source, passive and active logic in `RelicEffects`, config values, translations, and models.
- New inscription: register the item, add an Etching Table recipe, preview/apply rules in `ArtisansWorkbenchMenu`, tooltip translations, and config values.
- New compatibility pack: prefer rune-slot, effect, rarity, tag, and recipe JSON so it works without a hard dependency.

Datapack reload listeners sync rune slots, types, effect ids, and rarities to clients. Custom gameplay registries implemented only in Java require both sides to ship the same mod version.
