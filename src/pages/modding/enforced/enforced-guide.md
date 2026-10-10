# Re-Enforced Metals Wiki

Re-Enforced Metals is a NeoForge mod for Minecraft 1.21.1. It adds Copper, Steel, Rose Gold, Platinum, and Astrite equipment, new ores and blocks, a progression path beyond Netherite, and optional RUNIC slot support.

## Contents

- [Progression](#progression)
- [Materials and Blocks](#materials-and-blocks)
- [World Generation](#world-generation)
- [Tools and Weapons](#tools-and-weapons)
- [Armor](#armor)
- [Special Effects](#special-effects)
- [Recipes](#recipes)
- [Advancements](#advancements)
- [RUNIC Compatibility](#runic-compatibility)

## Progression

| Stage | Goal | Result |
|---|---|---|
| 1 | Obtain Copper and Iron | Craft Copper equipment or convert Iron into Steel. |
| 2 | Mine Platinum Ore with an Iron-tier or stronger pickaxe | Platinum Ore drops Raw Platinum, which smelts into Platinum Ingots. |
| 3 | Craft a Platinum Pickaxe | Unlocks **A Platinum Upgrade** and provides the intended route to mining Diamonds. |
| 4 | Obtain Diamond or Netherite gear | This gear can be upgraded into Astrite gear later. |
| 5 | Travel to the outer End islands | Astrite Ore generates in End Highlands, Midlands, Barrens, and Small End Islands. |
| 6 | Mine Astrite Ore with Netherite or Astrite | Astrite Ore drops Astrite Scrap unless mined with Silk Touch. |
| 7 | Find an Astrite Upgrade Template | Each End City treasure chest has a 10% chance to contain one. |
| 8 | Craft Astrite Ingots | Combine 8 Astrite Scraps with 1 Netherite Ingot. |
| 9 | Use a Smithing Table | Upgrade matching Diamond or Netherite armor and tools into Astrite gear. |

### Mining Requirements

| Target | Required Pickaxe |
|---|---|
| Platinum Ore / Deepslate Platinum Ore | Iron, Steel, Platinum, Diamond, Netherite, or Astrite |
| Diamond Ore / Deepslate Diamond Ore / Diamond Block | Platinum or stronger is the intended progression; an Iron Pickaxe is stopped immediately and displays a warning |
| Astrite Ore | Netherite or Astrite |
| Metal storage blocks and Steel Bars | Pickaxe |

## Materials and Blocks

### Materials

| Item | ID | Obtaining | Main Use |
|---|---|---|---|
| Steel Ingot | `enforcedmetals:steel_ingot` | Smelt or blast an Iron Ingot, or combine Iron and Coal | Steel equipment, Steel Blocks, and Steel Bars |
| Steel Nugget | `enforcedmetals:steel_nugget` | Convert a Steel Ingot into 9 nuggets | Compact Steel crafting |
| Raw Platinum | `enforcedmetals:raw_platinum` | Mine either Platinum Ore variant | Smelt into a Platinum Ingot |
| Platinum Ingot | `enforcedmetals:platinum_ingot` | Smelt or blast Raw Platinum | Platinum equipment |
| Rose Gold | `enforcedmetals:rose_gold` | Combine a Gold Ingot and Copper Ingot | Rose Gold equipment |
| Astrite Scrap | `enforcedmetals:astrite_scrap` | Mine Astrite Ore without Silk Touch | Craft Astrite Ingots |
| Astrite Ingot | `enforcedmetals:astrite_ingot` | Combine 8 Astrite Scraps and 1 Netherite Ingot | Astrite upgrades and Astrite Blocks |
| Astrite Upgrade Template | `enforcedmetals:astrite_upgrade` | End City treasure or duplication | Upgrade Diamond or Netherite gear into Astrite gear |

### Blocks

| Block | ID | Obtaining / Notes |
|---|---|---|
| Steel Block | `enforcedmetals:steel_block` | Crafted from 9 Steel Ingots, or smelted/blasted directly from an Iron Block |
| Steel Bars | `enforcedmetals:steel_bars` | Crafted from 6 Steel Ingots; produces 16 transparent bars |
| Rose Gold Block | `enforcedmetals:rose_gold_block` | Available in the Re-Enforced creative tab; no survival recipe currently exists |
| Platinum Block | `enforcedmetals:platinum_block` | Available in the Re-Enforced creative tab; no survival recipe currently exists |
| Platinum Ore | `enforcedmetals:platinum_ore` | Overworld ore found in stone layers |
| Deepslate Platinum Ore | `enforcedmetals:deepslate_platinum_ore` | Overworld ore found in deepslate layers |
| Astrite Block | `enforcedmetals:astrite_block` | Crafted from 9 Astrite Ingots; fire resistant as an item |
| Astrite Ore | `enforcedmetals:astrite_ore` | Outer End island ore; drops Astrite Scrap or itself with Silk Touch |

## World Generation

| Ore | Dimension / Biomes | Height | Frequency | Vein Size | Drop |
|---|---|---:|---:|---:|---|
| Platinum Ore | All Overworld biomes | Y -64 to 32 | 10 placement attempts per chunk | Up to 6 | Raw Platinum; Fortune applies |
| Buried Platinum Ore | All Overworld biomes | Y -64 to 8 | 6 placement attempts per chunk | Up to 10 | Raw Platinum; Fortune applies |
| Astrite Ore | Outer End island biomes only | Y 0 to 80 | 2 placement attempts per chunk | 1–2 | Astrite Scrap; Fortune applies |

Silk Touch drops the corresponding ore block instead of its raw material or scrap.

## Tools and Weapons

Every equipment family includes a Sword, Pickaxe, Axe, Shovel, and Hoe.

### Tool Tier Stats

| Material | Durability | Mining Speed | Tier Attack Bonus | Enchantability | General Mining Tier |
|---|---:|---:|---:|---:|---|
| Copper | 220 | 6.0 | 2.0 | 10 | Stone |
| Steel | 300 | 6.5 | 3.0 | 14 | Iron; cannot harvest Diamonds |
| Rose Gold | 128 | 12.0 | 0.0 | 30 | Gold |
| Platinum | 1,500 | 8.5 | 4.0 | 18 | Diamond |
| Astrite | 3,000 | 10.0 | 5.0 | 18 | Netherite |

Vanilla Iron Pickaxes, Axes, Shovels, and Hoes have a reduced mining speed of **5.5**.

### Combat Stats

Values are shown as **attack damage / attack speed** while held in the main hand.

| Material | Sword | Pickaxe | Axe | Shovel | Hoe |
|---|---:|---:|---:|---:|---:|
| Copper | 5 / 1.6 | 4 / 1.2 | 8 / 0.9 | 4 / 1.0 | 1 / 3.0 |
| Steel | 7 / 1.6 | 5 / 1.2 | 10 / 0.9 | 5.5 / 1.0 | 2 / 3.0 |
| Rose Gold | 4 / 1.6 | 2 / 1.2 | 7 / 0.9 | 2.5 / 1.0 | -1 / 3.0 |
| Platinum | 10 / 1.0 | 7 / 0.8 | 13 / 0.6 | 7.5 / 0.7 | 3 / 3.0 |
| Astrite | 12 / 1.2 | 8.5 / 1.0 | 14.5 / 0.8 | 9 / 0.9 | 4 / 3.5 |

### Tool IDs

| Material | Sword | Pickaxe | Axe | Shovel | Hoe |
|---|---|---|---|---|---|
| Copper | `copper_sword` | `copper_pickaxe` | `copper_axe` | `copper_shovel` | `copper_hoe` |
| Steel | `steel_sword` | `steel_pickaxe` | `steel_axe` | `steel_shovel` | `steel_hoe` |
| Rose Gold | `rose_gold_sword` | `rose_gold_pickaxe` | `rose_gold_axe` | `rose_gold_shovel` | `rose_gold_hoe` |
| Platinum | `platinum_sword` | `platinum_pickaxe` | `platinum_axe` | `platinum_shovel` | `platinum_hoe` |
| Astrite | `astrite_sword` | `astrite_pickaxe` | `astrite_axe` | `astrite_shovel` | `astrite_hoe` |

All IDs in this table use the `enforcedmetals` namespace.

## Armor

Every armor family includes a Helmet, Chestplate, Leggings, and Boots. All mod armor supports vanilla armor trims.

### Armor Stats

| Material | Protection H/C/L/B | Total | Durability H/C/L/B | Toughness | Knockback Resistance | Enchantability |
|---|---|---:|---|---:|---:|---:|
| Copper | 2 / 6 / 5 / 2 | 15 | 132 / 192 / 180 / 156 | 0 | 0 | 9 |
| Steel | 2 / 6 / 5 / 2 | 15 | 198 / 288 / 270 / 234 | 1 | 0.1 | 9 |
| Rose Gold | 2 / 5 / 4 / 2 | 13 | 99 / 144 / 135 / 117 | 0 | 0 | 30 |
| Platinum | 3 / 8 / 6 / 3 | 20 | 352 / 512 / 480 / 416 | 2 | 0 | 15 |
| Astrite | 3 / 8 / 6 / 3 | 20 | 495 / 720 / 675 / 585 | 3 | 0.1 | 18 |

### Armor IDs

| Material | Helmet | Chestplate | Leggings | Boots |
|---|---|---|---|---|
| Copper | `copper_helmet` | `copper_chestplate` | `copper_leggings` | `copper_boots` |
| Steel | `steel_helmet` | `steel_chestplate` | `steel_leggings` | `steel_boots` |
| Rose Gold | `rose_gold_helmet` | `rose_gold_chestplate` | `rose_gold_leggings` | `rose_gold_boots` |
| Platinum | `platinum_helmet` | `platinum_chestplate` | `platinum_leggings` | `platinum_boots` |
| Astrite | `astrite_helmet` | `astrite_chestplate` | `astrite_leggings` | `astrite_boots` |

All IDs in this table use the `enforcedmetals` namespace.

## Special Effects

| Equipment | Effect |
|---|---|
| Rose Gold tools | Automatically receive Fortune II. Rose Gold armor does not receive Fortune. |
| Platinum armor | Each equipped piece adds one level of Slowness and one level of Resistance. One piece gives level I; a full set gives level IV. |
| Full Astrite armor | Cancels void damage while all four Astrite armor pieces are equipped. |
| Astrite gear and materials | Astrite tools, armor, ingots, scraps, ore items, and blocks are fire resistant as items where registered. |
| Iron Pickaxe against Diamonds | Mining is stopped immediately and the action bar displays “Platinum or greater is required.” |

## Recipes

All Re-Enforced Metals recipes are automatically unlocked in the recipe book when a player joins a world.

### Material and Block Recipes

| Output | Station | Ingredients | Amount / Time |
|---|---|---|---|
| Steel Ingot | Crafting | 1 Iron Ingot + 1 Coal, shapeless | 1 |
| Steel Ingot | Furnace | 1 Iron Ingot | 1 in 200 ticks, 0.7 XP |
| Steel Ingot | Blast Furnace | 1 Iron Ingot | 1 in 100 ticks, 0.7 XP |
| Steel Ingot | Crafting | 9 Steel Nuggets | 1 |
| Steel Nugget | Crafting | 1 Steel Ingot, shapeless | 9 |
| Steel Block | Crafting | 9 Steel Ingots | 1 |
| Steel Ingots | Crafting | 1 Steel Block, shapeless | 9 |
| Steel Block | Furnace | 1 Iron Block | 1 in 200 ticks, 0.7 XP |
| Steel Block | Blast Furnace | 1 Iron Block | 1 in 100 ticks, 0.7 XP |
| Steel Bars | Crafting | 6 Steel Ingots in two full rows | 16 |
| Rose Gold | Crafting | 1 Gold Ingot + 1 Copper Ingot, shapeless | 2 |
| Platinum Ingot | Furnace | 1 Raw Platinum | 1 in 200 ticks, 0.7 XP |
| Platinum Ingot | Blast Furnace | 1 Raw Platinum | 1 in 100 ticks, 0.7 XP |
| Astrite Ingot | Crafting | 8 Astrite Scraps + 1 Netherite Ingot, shapeless | 1 |
| Astrite Block | Crafting | 9 Astrite Ingots | 1 |
| Astrite Ingots | Crafting | 1 Astrite Block, shapeless | 9 |

### Standard Tool Recipes

Copper, Steel, Rose Gold, and Platinum tools use vanilla tool patterns. `M` is the matching material and `S` is a Stick.

| Tool | Pattern | Materials |
|---|---|---|
| Sword | `M` / `M` / `S` | 2 material + 1 Stick |
| Pickaxe | `MMM` / ` S ` / ` S ` | 3 material + 2 Sticks |
| Axe | `MM` / `MS` / ` S` | 3 material + 2 Sticks; mirrored pattern works |
| Shovel | `M` / `S` / `S` | 1 material + 2 Sticks |
| Hoe | `MM` / ` S` / ` S` | 2 material + 2 Sticks; mirrored pattern works |

| Equipment Family | Material Item |
|---|---|
| Copper | Copper Ingot |
| Steel | Steel Ingot |
| Rose Gold | Rose Gold |
| Platinum | Platinum Ingot |

### Standard Armor Recipes

Copper, Steel, Rose Gold, and Platinum armor use vanilla armor patterns. `M` is the matching material.

| Armor Piece | Pattern | Material Count |
|---|---|---:|
| Helmet | `MMM` / `M M` | 5 |
| Chestplate | `M M` / `MMM` / `MMM` | 8 |
| Leggings | `MMM` / `M M` / `M M` | 7 |
| Boots | `M M` / `M M` | 4 |

### Astrite Smithing Recipes

Every Astrite gear recipe uses the same Smithing Table structure.

| Template | Base | Addition | Result |
|---|---|---|---|
| Astrite Upgrade Template | Diamond or Netherite Helmet | Astrite Ingot | Astrite Helmet |
| Astrite Upgrade Template | Diamond or Netherite Chestplate | Astrite Ingot | Astrite Chestplate |
| Astrite Upgrade Template | Diamond or Netherite Leggings | Astrite Ingot | Astrite Leggings |
| Astrite Upgrade Template | Diamond or Netherite Boots | Astrite Ingot | Astrite Boots |
| Astrite Upgrade Template | Diamond or Netherite Sword | Astrite Ingot | Astrite Sword |
| Astrite Upgrade Template | Diamond or Netherite Pickaxe | Astrite Ingot | Astrite Pickaxe |
| Astrite Upgrade Template | Diamond or Netherite Axe | Astrite Ingot | Astrite Axe |
| Astrite Upgrade Template | Diamond or Netherite Shovel | Astrite Ingot | Astrite Shovel |
| Astrite Upgrade Template | Diamond or Netherite Hoe | Astrite Ingot | Astrite Hoe |

### Astrite Upgrade Duplication

| Row | Pattern |
|---|---|
| Top | Diamond, Astrite Upgrade Template, Diamond |
| Middle | Diamond, End Stone, Diamond |
| Bottom | Diamond, Diamond, Diamond |

This recipe consumes 1 Astrite Upgrade Template, 7 Diamonds, and 1 End Stone to produce **2 Astrite Upgrade Templates**.

### Chainmail Recipes

Vanilla Chainmail armor can be crafted using Chains in the normal armor patterns.

| Output | Chains Required |
|---|---:|
| Chainmail Helmet | 5 |
| Chainmail Chestplate | 8 |
| Chainmail Leggings | 7 |
| Chainmail Boots | 4 |

## Advancements

| Tab | Advancement | Requirement | Position / Parent |
|---|---|---|---|
| Story | **A Platinum Upgrade** | Obtain a Platinum Pickaxe | After **Isn't It Iron Pick** and before **Diamonds!** |
| The End | **Reinforced Beyond the End** | Obtain an Astrite Ingot | Child of **The End?** root advancement; challenge frame |

The mod also includes a hidden recipe advancement for the craftable Chainmail recipes.

## RUNIC Compatibility

When the RUNIC mod is installed, every Re-Enforced Metals tool and weapon receives enhancement slots.

| Material | Slots per Sword, Pickaxe, Axe, Shovel, and Hoe |
|---|---:|
| Copper | 2 |
| Steel | 3 |
| Platinum | 4 |
| Rose Gold | 5 |
| Astrite | 8 |

## Creative Tab

All mod content is available in the **Re-Enforced** creative tab, represented by a Rose Gold icon.
