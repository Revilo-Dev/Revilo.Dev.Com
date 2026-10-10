const enforced = '/assets/wiki/enforced/';
const arsenal = '/assets/wiki/arsenal/item/';

const enforcedItems = ['steel_ingot', 'raw_platinum', 'platinum_ingot', 'rose_gold', 'astrite_scrap', 'astrite_ingot'];
const enforcedBlocks = ['steel_block', 'steel_bars', 'rose_gold_block', 'platinum_block', 'platinum_ore', 'deepslate_platinum_ore', 'astrite_block', 'astrite_ore'];
const metals = ['copper', 'steel', 'rose_gold', 'platinum', 'astrite'];
const equipment = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots'];

const enforcedIcons = Object.fromEntries([
  ...enforcedItems.map((name) => [name.replaceAll('_', ' '), `${enforced}item/${name}.png`]),
  ...enforcedBlocks.map((name) => [name.replaceAll('_', ' '), `${enforced}block/${name}.png`]),
  ...metals.flatMap((metal) => equipment.map((piece) => [`${metal.replaceAll('_', ' ')} ${piece}`, `${enforced}item/${metal}_${piece}.png`])),
  ['steel nugget', `${enforced}block/steel_nugget.png`],
  ['astrite upgrade template', `${enforced}item/astrite_upgrade.png`],
  ['astrite upgrade', `${enforced}item/astrite_upgrade.png`],
  ['buried platinum ore', `${enforced}block/deepslate_platinum_ore.png`],
  ['copper', `${enforced}item/copper_pickaxe.png`],
  ['steel', `${enforced}item/steel_ingot.png`],
  ['rose gold', `${enforced}item/rose_gold_ingot.png`],
  ['platinum', `${enforced}item/platinum_ingot.png`],
  ['astrite', `${enforced}item/astrite_ingot.png`],
  ['steel ingots', `${enforced}item/steel_ingot.png`],
  ['astrite ingots', `${enforced}item/astrite_ingot.png`],
  ['rose gold tools', `${enforced}item/rose_gold_pickaxe.png`],
  ['platinum armor', `${enforced}item/platinum_chestplate.png`],
  ['full astrite armor', `${enforced}item/astrite_chestplate.png`],
  ...equipment.map((piece) => [piece, `${enforced}item/steel_${piece}.png`]),
]);

const arsenalIcons = {
  dagger: 'dagger/iron_dagger.png',
  sickle: 'sickle/iron-sickle.png',
  rapier: 'rapier/iron-rapier.png',
  cleaver: 'cleaver/iron_cleaver.png',
  spear: 'spear/iron_spear.png',
  machete: 'machete/iron_machete.png',
  glaive: 'glaive/iron_glaive.png',
  gaundao: 'gaundao/iron_gaundao.png',
  hammer: 'hammer/iron_hammer.png',
  'battle axe': 'battle_axe/iron_battleaxe.png',
  longsword: 'long_sword/iron_longsword.png',
  pitchfork: 'pitch_fork/iron_pitchfork.png',
  broadsword: 'broad_sword/iron_broadsword.png',
  javelin: 'javelin/iron_javelin.png',
  'short bow': 'bow/short_bow/short_bow.png',
  'long bow': 'bow/long_bow/long_bow.png',
  'scatter crossbow': 'crossbow/scatter/scatter_crossbow.png',
  'dual crossbow': 'crossbow/dual/dual_crossbow.png',
  'heavy crossbow': 'crossbow/heavy/heavy_crossbow.png',
  'amethyst arrow': 'arrows/amethyst-arrow.png',
  'copper arrow': 'arrows/copper_arrow.png',
  'iron arrow': 'arrows/iron-arrow.png',
  'golden arrow': 'arrows/golden-arrow.png',
  'diamond arrow': 'arrows/diamond-arrow.png',
  'netherite arrow': 'arrows/netherite-arrow.png',
  bomb: 'bombs/bomb.png',
  'poison bomb': 'bombs/poison-bomb.png',
  'golden bomb': 'bombs/golden-bomb.png',
  'amethyst bomb': 'bombs/amethyst-bomb.png',
  'coral skewer': 'tridents/coral-skewer.png',
  'glacier trident': 'tridents/glacier-trident.png',
  hellfork: 'tridents/hellfork.png',
  staff: 'staff.png',
  'stick bit': 'stick-bit.png',
  '1 staff': 'staff.png',
  '2 stick bits': 'stick-bit.png',
  'all 14 weapon families': 'dagger/iron_dagger.png',
  'enforced metals weapons': 'spear/astrite_spear.png',
  'standalone ranged weapons': 'bow/long_bow/long_bow.png',
  'standalone tridents': 'tridents/glacier-trident.png',
  bombs: 'bombs/bomb.png',
  'special arrows': 'arrows/amethyst-arrow.png',
  'utility items': 'staff.png',
  diamond: '/assets/wiki/arsenal/gui/fletching-table/diamond.png',
};

function clean(text) {
  return text.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim();
}

export function enforcedIcon(text) {
  return enforcedIcons[clean(text)];
}

export function arsenalIcon(text) {
  const key = clean(text).replace(/ weapons$/, '');
  if (arsenalIcons[key]) return arsenalIcons[key].startsWith('/') ? arsenalIcons[key] : `${arsenal}${arsenalIcons[key]}`;
  if (key === 'rose gold') return enforcedIcons['rose gold'];
  if (['steel', 'platinum', 'astrite'].includes(key)) return enforcedIcons[key];
  return undefined;
}
