const root = '/assets/wiki/aura/';
const abilities = new Set(`fire fire_nova fire_burst fire_implode fire_storm ice ice_nova ice_burst ice_implode ice_pierce ice_glacier ice_storm lightning lightning_nova lightning_zap lightning_implode lightning_strike lightning_storm poison poison_nova poison_burst poison_implode force blood wind`.split(' '));
const abilityAliases = {
  fire_aura: 'fire_nova',
  ice_aura: 'ice_nova',
  lightning_aura: 'lightning_aura',
  poison_aura: 'poison_nova',
  force_aegis: 'foce_aegis',
  force_burst: 'force-shockwave',
  force_rampage: 'foce_rampage',
  blood_heal: 'heal',
  blood_cleanse: 'cleanse',
  blood_burst: 'blood-burst',
  blood_drain: 'blood_beam',
  wind_dash: 'dash',
  wind_leap: 'leap',
  wind_lunge: 'lunge',
  dash: 'dash',
  leap: 'leap',
  lunge: 'lunge',
  soulfire: 'ultimate-soulfire',
  permafrost: 'ultimate-permafrost',
  plasma: 'ultimate-plasma',
  toxin: 'ultimate-toxin',
  singularity: 'ultimate-singularity',
  bloodfire: 'ultimate-bloodfire',
  tempest: 'ultimate-tempest',
};
const skills = {
  strength: 'strength',
  power: 'strength-power',
  'crit power': 'strength-crit',
  'attack speed': 'agility',
  haste: 'strength-haste',
  resistance: 'resistance',
  'fire resistance': 'resistance-fire',
  'projectile resistance': 'resistance-projectile',
  'knockback resistance': 'resistance-knockback',
  'blast resistance': 'resistance-blast',
  agility: 'agility',
  leaping: 'agility-jump',
  'swimming speed': 'agility-water',
  vitality: 'vitaility',
  regeneration: 'vitaility-regen',
  'health boost': 'vitaility-health_boost',
  cleanse: 'vitaility-cleanse',
  leaching: 'vitaility-heal',
  immunity: 'vitaility-cleanse',
  luck: 'luck',
  looting: 'luck-looting',
  fortune: 'luck-fortune',
  'luck of the sea': 'luck-sea',
  'xp fortune': 'luck-xp',
};

export function auraIcon(label) {
  const name = label.toLowerCase().trim().replace(/ final form$/, '').replace(/ ability$/, '');
  const id = name.replaceAll(' ', '_');
  if (abilities.has(id)) return `${root}gui/abilities/${id}.png`;
  if (abilityAliases[id]) return `${root}gui/abilities/${abilityAliases[id]}.png`;
  if (skills[name.replaceAll('_', ' ')]) return `${root}gui/skills/${skills[name.replaceAll('_', ' ')]}.png`;
  if (name === 'ability selector') return `${root}gui/icon/ability_orb.png`;
  if (name === 'skills and abilities book' || name === 'open aura book') return `${root}item/skills_book.png`;
  return undefined;
}

const topicIcons = {
  'getting-started': 'item/skills_book.png',
  'skills-and-abilities-book': 'item/skills_book.png',
  'skill-points-and-rules': 'gui/icon/skill_orb.png',
  'complete-skill-reference': 'gui/skills/strength.png',
  'ability-points-unlocking-and-selection': 'gui/icon/ability_orb.png',
  'ability-scaling': 'gui/effect/ability-power.png',
  'complete-ability-defaults': 'gui/abilities/magic.png',
  'fire-and-soulfire': 'gui/abilities/fire.png',
  'ice-and-permafrost': 'gui/abilities/ice.png',
  'lightning-and-plasma': 'gui/abilities/lightning.png',
  'poison-and-toxin': 'gui/abilities/poison.png',
  'force-and-singularity': 'gui/abilities/force.png',
  'blood-and-bloodfire': 'gui/abilities/blood.png',
  'wind-and-tempest': 'gui/abilities/wind.png',
  'ability-hud': 'gui/icon/ability_orb.png',
  'items-enchantment-effects-and-potions': 'item/skills_book.png',
};

export function auraTopicIcon(page) {
  return topicIcons[page.slug] ? `${root}${topicIcons[page.slug]}` : undefined;
}
