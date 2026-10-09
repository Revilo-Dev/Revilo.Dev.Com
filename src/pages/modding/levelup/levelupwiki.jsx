import ModWiki from '../wiki/ModWiki.jsx';
import { resolveWikiLink, wikiBase, wikiGroups, wikiPageBySlug, wikiPages } from './levelupData.js';

export default function LevelUpWiki() {
  return <ModWiki
    name="LevelUP"
    image="/assets/LevelUP.png"
    base={wikiBase}
    groups={wikiGroups}
    pages={wikiPages}
    pageBySlug={wikiPageBySlug}
    resolveLink={resolveWikiLink}
    heroDescription="Level Points, progression, HUD controls, configuration, and APIs for LevelUP."
    introTitle="One progression track for your modpack."
    introDescription="LevelUP tracks player levels and points, then lets mods and modpacks use that progress for requirements, rewards, milestones, and displays. Start with the basics or browse the full reference."
    sourceNote="This wiki reflects the supplied LevelUP guide for version 1.21.1-neo-5, Minecraft 1.21.1, and NeoForge 21.1."
    startPageSlug="what-levelup-does"
  />;
}
