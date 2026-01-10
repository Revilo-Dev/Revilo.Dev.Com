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
              { label: 'About', to: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts', icon: Info },
              { label: 'Wiki', to: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts', icon: LinkIcon },
            ]}
          />


          <ItemCard
            image="/assets/runic.png"
            title="Runic: Enchantments"
            links={[
              { label: 'About', to: 'UNDER-CONSTRUCTION/About-Runic', icon: Info },
              { label: 'Wiki', to: 'UNDER-CONSTRUCTION/Runic-Wiki', icon: BookOpen },
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/runic-enhancements', icon: LinkIcon },
            ]}
          />
          <ItemCard
            image="/assets/Boundless.png"
            title="Boundless: Quests"
            links={[
              { label: 'About', to: '/About-Boundless', icon: Info },
              { label: 'Wiki', to: '/Boundless-Wiki', icon: BookOpen },              
              { label: 'Link', to: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests', icon: LinkIcon },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Modding;
