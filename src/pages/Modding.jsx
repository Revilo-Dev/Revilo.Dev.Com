import React from 'react';
import HeaderCard from '../components/HeaderCard';
import ItemCard from '../components/ItemCard';
import { Info, BookOpen, Link as LinkIcon } from 'lucide-react';

function Modding() {
  return (
    <div className="body">
      <HeaderCard />
      <div className="content A-SlideDownBounce mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <ItemCard
            image="/assets/MC5.png"
            title="Mythcraft 5"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts', icon: LinkIcon },
            ]}
          />


          <ItemCard
            image="/assets/runic.png"
            title="Runic: Enchantments"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/runic-enhancements', icon: LinkIcon },
            ]}
          />
          <ItemCard
            image="/assets/Boundless.png"
            title="Boundless: Quests"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests', icon: LinkIcon },
            ]}
          />
                    <ItemCard
            image="/assets/codex.png"
            title="Codex: Skills & Abilities"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests', icon: LinkIcon },
            ]}
          />
            <ItemCard
            image="/assets/LevelUP.png"
            title="LevelUP: Leveling API"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests', icon: LinkIcon },
            ]}
          />
          <ItemCard
            image="/assets/gatesavarice.png"
            title="Gateways to Avarice"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests', icon: LinkIcon },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Modding;
