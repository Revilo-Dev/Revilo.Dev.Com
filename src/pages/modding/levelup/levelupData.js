import guide from './levelup-guide.md?raw';

export const wikiBase = '/projects/levelup/wiki';
export const wikiGroups = ['Start here', 'Progression', 'Point sources', 'Interface and commands', 'Configuration', 'Developer integration'];

const topics = [
  ['what-levelup-does', 'Start here', 'What LevelUP adds to Minecraft and how its shared progression works.'],
  ['basic-progression', 'Start here', 'Follow a point gain from source to saved level and HUD update.'],
  ['level-points-and-vanilla-experience', 'Progression', 'Choose separate Level Points or one-for-one vanilla experience conversion.'],
  ['default-progression-curve', 'Progression', 'Level costs, curve settings, bands, and the final ten levels.'],
  ['player-data', 'Progression', 'Saved level, points, multiplier, lock, and highest reached level.'],
  ['effective-maximum-level', 'Progression', 'How global and per-player caps affect stored points.'],
  ['point-multipliers', 'Progression', 'Apply a per-player multiplier to incoming point grants.'],
  ['pause-state', 'Progression', 'Pause point gains and understand direct set operations.'],
  ['mob-point-drops', 'Point sources', 'Eligible melee kills and the default point-orb formula.'],
  ['mob-eligibility-order', 'Point sources', 'Blacklist, whitelist, entity tags, and generic mob rules.'],
  ['adding-modded-mobs', 'Point sources', 'Add entity types using datapack tags or server configuration.'],
  ['level-point-orbs', 'Point sources', 'Orb pickup, merging, lifespan, and value bands.'],
  ['included-test-item', 'Point sources', 'The development item for granting test Level Points.'],
  ['hud-and-inventory-display', 'Interface and commands', 'Top and bottom HUD layouts and the inventory progress bar.'],
  ['repositioning-bars', 'Interface and commands', 'Move HUD and inventory bars and save their offsets.'],
  ['player-labels', 'Interface and commands', 'Level prefixes in nametags and the player list.'],
  ['commands', 'Interface and commands', 'Player and administrator command reference.'],
  ['common-configuration', 'Configuration', 'Server progression, source, and display defaults.'],
  ['client-configuration', 'Configuration', 'HUD, label, inventory bar, and offset settings.'],
  ['languages-and-translation-keys', 'Configuration', 'Included locales and guidance for adding translations.'],
  ['server-api', 'Developer integration', 'Read and change progression through LevelUpApi.'],
  ['transaction-results', 'Developer integration', 'Inspect crossed levels and milestone results.'],
  ['built-in-source-ids', 'Developer integration', 'Stable source identifiers for point transactions.'],
  ['progression-events', 'Developer integration', 'Server events for gains, level changes, milestones, and login.'],
  ['milestones', 'Developer integration', 'Register recurring level milestones for other mods.'],
  ['client-api', 'Developer integration', 'Render bars and requirement previews in client screens.'],
  ['client-hud-events', 'Developer integration', 'Runtime hooks for custom HUD content and visibility.'],
  ['networking-and-synchronization', 'Developer integration', 'Packets and synchronization across player lifecycle events.'],
  ['maven-development-setup', 'Developer integration', 'Publish and consume the local development artifact.'],
  ['integration-checklist', 'Developer integration', 'Key checks for stable server and client integrations.'],
  ['compatibility-notes', 'Developer integration', 'Legacy names, tags, migration, and runtime overrides.'],
  ['recommended-future-work', 'Developer integration', 'Potential improvements noted in the supplied guide.'],
];

const slugify = (value) => value.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const firstSection = guide.indexOf('\n## ');
const introduction = guide.slice(0, firstSection).replace(/^# LevelUP Complete Guide\s*/, '').trim();
const sections = guide.slice(firstSection + 1).trim().split(/\n(?=## )/);

export const wikiPages = sections.map((section, index) => {
  const topic = topics[index];
  const content = index === 0 ? `${introduction}\n\n${section.trim()}` : section.trim();
  const title = topic ? section.match(/^## (.+)$/m)?.[1] : undefined;
  const slug = slugify(title || 'getting-started');
  const [expectedSlug, group, summary] = topic || [];
  if (expectedSlug !== slug) throw new Error(`LevelUP wiki section mismatch: ${expectedSlug} / ${slug}`);
  return { slug, title, group, summary, content, related: [] };
});

wikiPages.forEach((page, index) => {
  page.related = [wikiPages[index - 1], wikiPages[index + 1], wikiPages[0]]
    .filter((related) => related && related.slug !== page.slug)
    .map((related) => related.slug)
    .filter((slug, position, all) => all.indexOf(slug) === position);
});

export const wikiPageBySlug = Object.fromEntries(wikiPages.map((page) => [page.slug, page]));
export const resolveWikiLink = (href) => href;
