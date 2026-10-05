import React from 'react';
import ModWiki from '../wiki/ModWiki.jsx';
import { resolveWikiLink, wikiBase, wikiGroups, wikiPageBySlug, wikiPages } from './auraData.js';

function AuraWiki() {
  return <ModWiki
    name="Aura"
    image="/assets/aura.png"
    base={wikiBase}
    groups={wikiGroups}
    pages={wikiPages}
    pageBySlug={wikiPageBySlug}
    resolveLink={resolveWikiLink}
    heroDescription="Skills, elemental abilities, progression, controls, and configuration for Aura."
    introTitle="Level UP | Learn Unique abilities | Upgrade Powerful skills"
    introDescription="Aura adds permanent passive skills and seven elemental ability trees. Earn points through LevelUP, upgrade your build, then choose the active powers you want to cast."
    sourceNote="This Wiki reflects Aura Update 6 for Minecraft 1.21.1 and Neo 21.1. Aura requires LevelUP on both client and server."
  />;
}

export default AuraWiki;
