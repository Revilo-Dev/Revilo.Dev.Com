import React from 'react';
import ModWiki from '../wiki/ModWiki.jsx';
import guide from './arsenal-guide.md?raw';
import { createSectionWiki } from '../wiki/createSectionWiki.js';
import { arsenalIcon } from '../wiki/wikiIcons.js';

const { wikiBase, wikiGroups, wikiPages, wikiPageBySlug } = createSectionWiki(guide, '/projects/arsenal/wiki', {
  'Quick Reference': 'Getting started',
  'Weapon Materials': 'Getting started',
  'Melee and Thrown Weapons': 'Weapons',
  'Ranged Weapons': 'Weapons',
  Arrows: 'Weapons',
  Bombs: 'Weapons',
  Tridents: 'Weapons',
  'Utility Items and Systems': 'Systems and crafting',
  'Crafting Recipes': 'Systems and crafting',
  'Runic Integration': 'Integrations',
  'Enforced Metals Integration': 'Integrations',
  'Gates of Avarice Integration': 'Integrations',
  'Better Combat Compatibility': 'Integrations',
  Configuration: 'Reference',
});

export default function ArsenalWiki() {
  return <ModWiki
    name="Arsenal Weapons"
    image="/assets/arsenal.png"
    base={wikiBase}
    groups={wikiGroups}
    pages={wikiPages}
    pageBySlug={wikiPageBySlug}
    resolveLink={(href) => href}
    tableIcon={arsenalIcon}
    tableIconColumns={[0]}
    heroDescription="Weapon families, ranged equipment, bombs, tridents, and mod integrations."
    introTitle="Choose your weapon."
    introDescription="Browse all fourteen weapon families, their materials and stats, crafting recipes, special attacks, ranged items, and optional integrations for Minecraft 1.21.1."
    sourceNote="Optional-mod items and recipes load only when their required mod is installed."
    startPageSlug="quick-reference"
  />;
}
