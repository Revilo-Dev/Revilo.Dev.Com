const root = '/assets/wiki/runic/';
const statIds = new Set(`ability_power aegis attack_damage attack_range attack_speed blast_resistance bleeding_chance bonus_chance draw_speed durability fall_reduction fangs fire_resistance flame_chance freezing_chance healing_efficiency health jump_height knockback_resistance leeching_chance looting mining_speed movement_speed nether_damage poison_chance power projectile_resistance resistance shocking_chance stone_skin stun_chance sweeping_range swimming_speed toughness undead_damage water_breathing weakening_chance withering_chance`.split(' '));
const effectIds = new Set(`acrobat air_jump aqua_affinity backstabbing binding_curse blocking breach capacity catalysis channeling chill_aura density depth_strider destruction discharge ensnaring feather_falling fire_react flame fortune frost_walker ground_slam impaling infinity lolths_curse longfooted looting loyalty luck_of_the_sea lure mending multishot multi_roll mystical_enlightenment piercing potato_recovery punch purification renewal respiration riptide sculk_smite silk_touch soul_siphoner soul_speed stasis swift_sneak thorns vanishing_curse voltaic_shot wind_burst`.split(' '));

const itemIcons = {
  etching: 'etching.png',
  rune: 'rune.png',
  'blank etching': 'blank_etching.png',
  'blank inscription': 'blank_inscription.png',
  'expansion rune': 'expansion_rune.png',
  'nullification rune': 'nullification_rune.png',
  'upgrade rune': 'upgrade_rune.png',
  'restoration/repair rune': 'repair_rune.png',
  'repair rune': 'repair_rune.png',
  'reroll inscription': 'reroll_inscription.png',
  'cursed inscription': 'cursed_inscription.png',
  'wild inscription': 'wild_inscription.png',
  'extraction inscription': 'extraction_inscription.png',
  'resonance inscription': 'inscriptions/resonance-inscription.png',
  'purification inscription': 'inscriptions/purification-inscription.png',
  'stabilization inscription': 'inscriptions/stabilisation-inscription.png',
  'tempering inscription': 'inscriptions/tempering-inscription.png',
  'relic socket inscription': 'inscriptions/relic-inscription.png',
  'dissonant inscription': 'inscriptions/dissonant-inscription.png',
  'wither charge': 'relic/wither-charge.png',
  'warden soul': 'relic/warden-soul.png',
  'elder guardian eye': 'relic/elder-gardian-eye.png',
  'dragon heart': 'relic/dragon-heart.png',
};

export function runicIcon(label) {
  const key = label.toLowerCase().trim().replaceAll(' ', '_');
  if (statIds.has(key)) return `${root}item/icons/stat/${key}.png`;
  if (effectIds.has(key)) return `${root}item/icons/effect/${key}.png`;
  const item = itemIcons[label.toLowerCase().trim()];
  return item ? `${root}item/${item}` : undefined;
}

const topicIcons = {
  'getting-started': 'item/rune.png',
  'runes-and-etchings': 'item/etching.png',
  'enchantments-and-base-stats': 'item/icons/stat/attack_damage.png',
  'enchanting-table': 'item/blank_etching.png',
  'etching-table': 'block/etching_table_front.png',
  'artisans-workbench': 'block/artisans_workbench.png',
  forging: 'item/enhanced_rune.png',
  inscriptions: 'item/blank_inscription.png',
  'corruption-and-attributes': 'item/cursed_inscription.png',
  synergies: 'item/inscriptions/synergy-inscription.png',
  'mythic-runes': 'item/enhanced_rune.png',
  relics: 'item/relic/dragon-heart.png',
};

export function runicTopicIcon(page) {
  return topicIcons[page.slug] ? `${root}${topicIcons[page.slug]}` : undefined;
}
