import React from 'react';
import ModWiki from '../wiki/ModWiki.jsx';
import { resolveWikiLink, wikiBase, wikiGroups, wikiPageBySlug, wikiPages } from './runicData.js';
import { runicIcon, runicTopicIcon } from './runicIcons.js';

function RunicWiki() {
  return <ModWiki
    name="RUNIC"
    image="/assets/runic.png"
    base={wikiBase}
    groups={wikiGroups}
    pages={wikiPages}
    pageBySlug={wikiPageBySlug}
    resolveLink={resolveWikiLink}
    tableIcon={runicIcon}
    topicIcon={runicTopicIcon}
    heroDescription="Your guide to enhancements, forging, synergies, relics, and using RUNIC."
    introTitle="Build gear your way."
    introDescription="RUNIC adds etchings, runes, inscriptions, synergies, and relics to Enchanting. Learn more about how to use RUNIC and the way features interact with each other."
  />;
}

export default RunicWiki;
