import guide from './aura-guide.md?raw';

export const wikiBase = '/projects/aura/wiki';
export const wikiGroups = ['Start here', 'Progression', 'Elemental abilities', 'Interface and integration', 'Reference'];

const details = {
  'getting-started': { group: 'Start here', summary: 'Progression, the default controls, and your first upgrades.', related: ['skills-and-abilities-book', 'skill-points-and-rules', 'ability-points-unlocking-and-selection'] },
  'skills-and-abilities-book': { group: 'Start here', summary: 'Navigate the book, inventory panel, player details, and settings.', related: ['getting-started', 'ability-hud', 'client-configuration-reference'] },
  'skill-points-and-rules': { group: 'Progression', summary: 'Earning, spending, and refunding Skill Points.', related: ['complete-skill-reference', 'getting-started', 'skill-configuration-reference'] },
  'complete-skill-reference': { group: 'Progression', summary: 'Every passive skill across the five primary trees.', related: ['skill-points-and-rules', 'skill-configuration-reference', 'equipment-attributes-and-integration'] },
  'ability-points-unlocking-and-selection': { group: 'Progression', summary: 'Unlock costs, prerequisites, affinities, and selecting abilities.', related: ['complete-ability-defaults', 'ability-scaling', 'ability-configuration-reference'] },
  'ability-scaling': { group: 'Progression', summary: 'Ability Power, cooldowns, and final form scaling.', related: ['complete-ability-defaults', 'items-enchantment-effects-and-potions', 'ability-configuration-reference'] },
  'complete-ability-defaults': { group: 'Progression', summary: 'A compact reference to the default values for all abilities.', related: ['ability-scaling', 'fire-and-soulfire', 'ability-configuration-reference'] },
  'fire-and-soulfire': { group: 'Elemental abilities', summary: 'Fire Aura, Burst, Implode, Storm, and Soulfire.', related: ['ice-and-permafrost', 'complete-ability-defaults', 'ability-scaling'] },
  'ice-and-permafrost': { group: 'Elemental abilities', summary: 'Ice powers and the Permafrost final form.', related: ['fire-and-soulfire', 'lightning-and-plasma', 'complete-ability-defaults'] },
  'lightning-and-plasma': { group: 'Elemental abilities', summary: 'Lightning powers and the Plasma final form.', related: ['ice-and-permafrost', 'poison-and-toxin', 'complete-ability-defaults'] },
  'poison-and-toxin': { group: 'Elemental abilities', summary: 'Poison powers and the Toxin final form.', related: ['lightning-and-plasma', 'force-and-singularity', 'complete-ability-defaults'] },
  'force-and-singularity': { group: 'Elemental abilities', summary: 'Force Aegis, Burst, Rampage, and Singularity.', related: ['poison-and-toxin', 'blood-and-bloodfire', 'complete-ability-defaults'] },
  'blood-and-bloodfire': { group: 'Elemental abilities', summary: 'Blood healing, cleansing, bursting, draining, and Bloodfire.', related: ['force-and-singularity', 'wind-and-tempest', 'complete-ability-defaults'] },
  'wind-and-tempest': { group: 'Elemental abilities', summary: 'Dash, Leap, Lunge, and the Tempest final form.', related: ['blood-and-bloodfire', 'ability-hud', 'complete-ability-defaults'] },
  'ability-hud': { group: 'Interface and integration', summary: 'How active abilities and cooldowns appear on screen.', related: ['skills-and-abilities-book', 'client-configuration-reference', 'wind-and-tempest'] },
  'items-enchantment-effects-and-potions': { group: 'Interface and integration', summary: 'The book, Ability Power enchantment, potions, and custom effects.', related: ['ability-scaling', 'equipment-attributes-and-integration', 'getting-started'] },
  'equipment-attributes-and-integration': { group: 'Interface and integration', summary: 'Bonus IDs, edit locks, and events for other mods.', related: ['complete-skill-reference', 'data-files-and-extensibility-notes', 'items-enchantment-effects-and-potions'] },
  'custom-statistics': { group: 'Interface and integration', summary: 'Aura statistics tracked for the player.', related: ['skills-and-abilities-book', 'commands', 'persistence-and-server-authority'] },
  commands: { group: 'Interface and integration', summary: 'Commands for managing skill and ability progression.', related: ['skill-points-and-rules', 'ability-points-unlocking-and-selection', 'custom-statistics'] },
  'configuration-files': { group: 'Reference', summary: 'Where Aura configuration lives and which files control each system.', related: ['skill-configuration-reference', 'ability-configuration-reference', 'client-configuration-reference'] },
  'skill-configuration-reference': { group: 'Reference', summary: 'Skill progression, item, level, and scaling defaults.', related: ['configuration-files', 'complete-skill-reference', 'skill-points-and-rules'] },
  'ability-configuration-reference': { group: 'Reference', summary: 'Ability progression, general, affinity, rank, and value defaults.', related: ['configuration-files', 'complete-ability-defaults', 'ability-scaling'] },
  'client-configuration-reference': { group: 'Reference', summary: 'Client controls for the book, HUD, and visual settings.', related: ['configuration-files', 'ability-hud', 'skills-and-abilities-book'] },
  'persistence-and-server-authority': { group: 'Reference', summary: 'How player state is stored, synchronized, and validated.', related: ['important-current-implementation-notes', 'commands', 'equipment-attributes-and-integration'] },
  'data-files-and-extensibility-notes': { group: 'Reference', summary: 'Data files and integration points for extending Aura.', related: ['equipment-attributes-and-integration', 'configuration-files', 'important-current-implementation-notes'] },
  'important-current-implementation-notes': { group: 'Reference', summary: 'Current behavior and practical limitations to keep in mind.', related: ['persistence-and-server-authority', 'data-files-and-extensibility-notes', 'quick-default-summary'] },
  'quick-default-summary': { group: 'Reference', summary: 'The key progression and ability defaults at a glance.', related: ['getting-started', 'complete-ability-defaults', 'configuration-files'] },
};

const slugify = (text) => text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const chapters = guide.slice(guide.indexOf('\n# Getting Started\n') + 1).trim().split(/\n(?=# )/);

export const wikiPages = chapters.map((chapter) => {
  const [heading, ...body] = chapter.split('\n');
  const title = heading.replace(/^# /, '').trim();
  const slug = slugify(title);
  const content = body.join('\n').trim().replace(/\n---\s*$/, '').trim();
  return { title, slug, content, ...details[slug] };
});

export const wikiPageBySlug = Object.fromEntries(wikiPages.map((page) => [page.slug, page]));

export function resolveWikiLink(href) {
  if (!href?.includes('.md')) return href;
  const [filename, hash] = href.split('#');
  return `${wikiBase}/${slugify(filename.replace(/\.md$/, ''))}${hash ? `#${hash}` : ''}`;
}
