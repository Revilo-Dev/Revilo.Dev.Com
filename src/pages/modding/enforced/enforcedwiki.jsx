import React from 'react';
import ModWiki from '../wiki/ModWiki.jsx';
import guide from './enforced-guide.md?raw';
import { createSectionWiki } from '../wiki/createSectionWiki.js';
import { enforcedIcon } from '../wiki/wikiIcons.js';

const { wikiBase, wikiGroups, wikiPages, wikiPageBySlug } = createSectionWiki(guide, '/projects/enforced/wiki', {
  Progression: 'Getting started',
  'Materials and Blocks': 'Getting started',
  'World Generation': 'Getting started',
  'Tools and Weapons': 'Equipment',
  Armor: 'Equipment',
  'Special Effects': 'Equipment',
  Recipes: 'Crafting',
  Advancements: 'Reference',
  'RUNIC Compatibility': 'Reference',
  'Creative Tab': 'Reference',
});

export default function EnforcedWiki() {
  return <ModWiki
    name="Re-Enforced Metals"
    image="/assets/wiki/enforced/block/rose_gold_block.png"
    base={wikiBase}
    groups={wikiGroups}
    pages={wikiPages}
    pageBySlug={wikiPageBySlug}
    resolveLink={(href) => href}
    tableIcon={enforcedIcon}
    heroDescription="Copper, Steel, Rose Gold, Platinum, and Astrite equipment for Minecraft 1.21.1."
    introTitle="Follow the metals progression."
    introDescription="Find ores, craft new equipment, and upgrade Diamond or Netherite gear to Astrite. This wiki includes the supplied item IDs, recipes, stats, and RUNIC compatibility details."
    startPageSlug="progression"
  />;
}
