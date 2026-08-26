import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';
import '../App.css';
import '../Animate.css';
import { faDiscord, faFigma, faGithub, faLinkedin, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HeaderCard = () => {
  return (
    <div className='bg-base-300 w-12/13 rounded-lg min-h-55 p-6 mt-16 flex flex-col md:flex-row items-center md:items-start shadow-lg z-10 max-[420px]:p-4 max-[420px]:mt-12'>
      <div className='w-40 h-40 md:w-75 md:h-75 max-[420px]:w-32 max-[420px]:h-32 rounded-3xl border-4 border-primary mb-6 md:mb-0 md:mr-8 mx-auto md:mx-0 self-center flex-shrink-0'>
        <img
          className='w-full h-full object-cover rounded-2xl'
          src="/assets/revilo.png"
          alt="Revilo.Dev Icon"
        />
      </div>
      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <a href='https://github.com/Revilo-Dev/Revilo.Dev.com'><h1 className='text-4xl font-bold mb-1 text-primary AH-Underline max-[420px]:text-3xl'>Revilo.Dev</h1></a>

        <p className='mb-4 max-[420px]:text-sm max-[420px]:leading-snug'>Hey there! I’m reviloDev, an independent Polish programmer and creator. I’m an experienced React web developer and aspiring software engineer, currently focused on developing Minecraft mods in Java.
Across my projects, I’ve amassed over 1.2 million downloads, with some of my most prominent mods including Runic (140k+), Mythcraft (200k+), and Boundless (300k+). I’m also affiliated with Kinetic Hosting.
I’m passionate about graphic and UX design, and I use Figma to design my apps, interfaces, assets, and graphics. I’ve worked across several areas of development, including Minecraft modding, web development, and game development.
Outside of development, I’m interested in all things software and technology, particularly Apple, Samsung, operating systems, and the wider tech ecosystem.</p>
        <div className='flex items-center mb-4'>
          <FontAwesomeIcon icon={faLocationDot} className="mr-2"/> <span><b>Australia | QLD</b></span>
        </div>
        <div className='flex space-x-4 mb-4'>
          <a href="https://github.com/Revilo-Dev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.figma.com/@revilodev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow max-[420px]:hidden" aria-label="Figma"><FontAwesomeIcon icon={faFigma} /></a>
          <a href="https://discord.gg/DARzByw6VW" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
          <a href="https://x.com/ReviloDev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="X/Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https.www.reddit.com/user/revilodev/" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow max-[420px]:hidden" aria-label="Reddit"><FontAwesomeIcon icon={faReddit} /></a>
          <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className='AH-Pulse AH-Underline flex items-center text-zinc-400 hover:text-primary max-[420px]:text-sm'>
          <Mail size={20} className="mr-2 max-[420px]:w-4 max-[420px]:h-4" />
          <a href="mailto:Revilo2.Dev@gmail.com" className="hover:underline">
            Revilo2.Dev@gmail.com
          </a>
          <ExternalLink size={16} className="ml-1 max-[420px]:w-3 max-[420px]:h-3" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;