import React from 'react';
import HeaderCard from '../components/HeaderCard';
import ItemCard from '../components/ItemCard';
import { Info, BookOpen, Link as LinkIcon } from 'lucide-react';

function Modding() {
  return (
    <div className="body">
      <HeaderCard />
      <div className="content A-SlideUpBounce mt-6">
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
            image="/assets/MC6.png"
            title="Mythcraft 6"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/modpacks/mythcraft-6', icon: LinkIcon },
            ]}
          />


          <ItemCard
            image="/assets/runic.png"
            title="Runic: Enchantments"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/projects/runic/wiki', icon: BookOpen },
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
            image="/assets/aura.png"
            title="Aura: Skills & Abilities"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/projects/aura/wiki', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/codex-skills-abilities', icon: LinkIcon },
            ]}
          />
            <ItemCard
            image="/assets/LevelUP.png"
            title="LevelUP: Leveling API"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/levelup-leveling-api', icon: LinkIcon },
            ]}
          />
          <ItemCard
            image="/assets/avarice.png"
            title="Gateways to Avarice"
            links={[
              { label: 'About', to: '/Under-Development', icon: Info },
              { label: 'Wiki', to: '/Under-Development', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/gateways-to-avarice', icon: LinkIcon },
            ]}
          />
            <ItemCard
            image="/assets/utilized-icon.png"
            title="Utilized: Magnets and paxels"
            links={[         
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/utilized-magnets-and-paxels', icon: LinkIcon },
            ]}
          />
            <ItemCard
            image="/assets/arsenal.png"
            title="Arsenal: Weaponry"
            links={[              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/arsenal-weaponry', icon: LinkIcon },
            ]}
          />
            <ItemCard
            image="/assets/gatesavarice.png"
            title="Re-Enforced: Metals"
            links={[          
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/re-enforced-metals', icon: LinkIcon },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Modding;
