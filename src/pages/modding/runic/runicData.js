import guide from './runic-guide.md?raw';

export const wikiBase = '/projects/runic/wiki';

const pageDetails = {
  'getting-started': { group: 'Start here', summary: 'Blocks, items, the basic workflow, and enhancement slots.', related: ['runes-and-etchings', 'artisans-workbench', 'forging'] },
  'runes-and-etchings': { group: 'Core mechanics', summary: 'How stat and effect enhancements improve equipment.', related: ['enchantments-and-base-stats', 'enchanting-table', 'forging'] },
  'enchantments-and-base-stats': { group: 'Core mechanics', summary: 'Rune and etching roll ranges, stat caps, and effect levels.', related: ['runes-and-etchings', 'forging', 'configuration-reference'] },
  'enchanting-table': { group: 'Crafting and forging', summary: 'Create etchings and control whitelisted enchantments.', related: ['etching-table', 'runes-and-etchings', 'configuration-reference'] },
  'etching-table': { group: 'Crafting and forging', summary: 'Craft inscriptions and special rune items.', related: ['inscriptions', 'enchanting-table', 'compatibility-and-datapacks'] },
  'artisans-workbench': { group: 'Crafting and forging', summary: 'Apply enhancements and preview changes to gear.', related: ['forging', 'inscriptions', 'corruption-and-attributes'] },
  forging: { group: 'Crafting and forging', summary: 'Capacity, application rules, synergy rolls, and limits.', related: ['artisans-workbench', 'synergies', 'corruption-and-attributes'] },
  inscriptions: { group: 'Crafting and forging', summary: 'Every utility inscription and its exact default behavior.', related: ['etching-table', 'artisans-workbench', 'corruption-and-attributes'] },
  'corruption-and-attributes': { group: 'Advanced systems', summary: 'Risk bands, attribute effects, and ways to manage corruption.', related: ['forging', 'inscriptions', 'synergies'] },
  synergies: { group: 'Advanced systems', summary: 'Rune combinations, unlock rules, and every synergy effect.', related: ['forging', 'mythic-runes', 'enchantments-and-base-stats'] },
  'mythic-runes': { group: 'Advanced systems', summary: 'Ruin, Dominion, Hunger, Void, Ascendance, and their rules.', related: ['synergies', 'loot-and-drop-rates', 'corruption-and-attributes'] },
  relics: { group: 'Advanced systems', summary: 'Boss relics, sockets, passive bonuses, and set powers.', related: ['inscriptions', 'loot-and-drop-rates', 'artisans-workbench'] },
  'loot-and-drop-rates': { group: 'Reference', summary: 'Structure rolls, mythic loot, unique sources, relics, and books.', related: ['mythic-runes', 'relics', 'configuration-reference'] },
  'configuration-reference': { group: 'Reference', summary: 'Every config key, default value, and important behavior.', related: ['compatibility-and-datapacks', 'developer-integration', 'forging'] },
  'compatibility-and-datapacks': { group: 'Reference', summary: 'Datapack files for slots, gear, effects, rarities, and overrides.', related: ['configuration-reference', 'developer-integration', 'etching-table'] },
  'developer-integration': { group: 'Reference', summary: 'Integration points for pack authors and Java developers.', related: ['compatibility-and-datapacks', 'configuration-reference', 'etching-table'] },
};

export const slugify = (text) => text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const wikiPages = guide.trim().split(/\n(?=# )/).map((chapter) => {
  const [heading, ...body] = chapter.split('\n');
  const title = heading.replace(/^# /, '').trim();
  const slug = slugify(title);
  const content = body.join('\n').trim().replace(/\n---\s*$/, '').trim();
  const sections = [...content.matchAll(/^## (.+)$/gm)].map((heading) => ({
    title: heading[1].replaceAll('`', ''),
    id: slugify(heading[1].replaceAll('`', '')),
  }));
  return { title, slug, content, sections, ...pageDetails[slug] };
});

export const wikiGroups = ['Start here', 'Core mechanics', 'Crafting and forging', 'Advanced systems', 'Reference'];
export const wikiPageBySlug = Object.fromEntries(wikiPages.map((page) => [page.slug, page]));

export function resolveWikiLink(href) {
  if (!href?.includes('.md')) return href;
  const [filename, hash] = href.split('#');
  const slug = filename === 'Configuration.md' ? 'configuration-reference' : slugify(filename.replace(/\.md$/, ''));
  return `${wikiBase}/${slug}${hash ? `#${hash}` : ''}`;
}
