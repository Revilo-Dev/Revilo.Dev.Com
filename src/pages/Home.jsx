import React from 'react';
import HeaderCard from '../components/HeaderCard';
import LinkCard from '../components/LinkCard';
import { User, Folder, Hammer, MoreHorizontal } from 'lucide-react';

function Home() {
  return (
    <div className="body">
      <HeaderCard />

      <div className="content A-SlideUpBounce grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-11/13 mt-6">

        <div className="flex flex-row gap-3 col-span-1 md:flex-col md:gap-4 w-full justify-center max-[420px]:justify-center max-[420px]:items-center">
          <p className='h-13 w-full hidden md:block'></p>

          <LinkCard icon={User} title="About Me" to="/about" />
          <LinkCard icon={Folder} title="Projects" to="/projects" />
          <LinkCard icon={Hammer} title="Modding" to="/modding" />

          <div className="hidden md:block w-full flex justify-center md:w-auto">
            <LinkCard icon={MoreHorizontal} title="More" to="/links" />
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-primary font-bold mb-4">Whats New?</h2>
          <div className="flex flex-col gap-4">
            <LinkCard title="ReviloDev.com V3.1" subtitle={"15/10/25"} to="https://github.com/Revilo-Dev" />
            <LinkCard title="Boundless Mod released" subtitle={"23/9/25"} to="https://www.curseforge.com/minecraft/mc-mods/boundless-quests" />
            <LinkCard title="RUNIC Mod released" subtitle={"30/8/25"} to="https://www.curseforge.com/minecraft/mc-mods/runic-enhancements" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
