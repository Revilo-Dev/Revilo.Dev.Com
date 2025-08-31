import React from 'react';
import {Mail, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'
import '../App.css'
import '../Animate.css'
import { faDiscord, faFigma, faGithub, faLinkedin, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const HeaderCard = () => {
  return (
    <div className='bg-base-300 w-full min-h-55 p-6 mt-16 flex flex-col md:flex-row items-center md:items-start shadow-lg z-10'>
      <img className='AH-Pulse rounded-3xl w-40 h-40 md:w-65 md:h-65 object-cover mb-6 md:mb-0 md:mr-8 border-4 border-primary mx-auto md:mx-0 self-center' src="/assets/revilo.png" alt="Revilo.Dev Icon" />
      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <a href='https://github.com/Revilo-Dev/Revilo.Dev.com' ><h1 className='text-4xl font-bold mb-1 text-primary AH-Underline'>Revilo.Dev</h1></a>
        <p className='text-sm text-zinc-400 m-1 p-0'>A creator with a passion for programming, modding, and design.</p>
        <p className='mb-4'>I'm Revilo.Dev, A polish programmer and creator, I have experience in web development, learning languages such as HTML, CSS and JavaScript, creating most of my projects in React. I'm experienced in Java through Minecraft modding where I have amassing over 68K downloads through my projects, I'm also affiliated with kinetic hosting servers. I'm very much into graphic design creating UI, graphics and Designs for most of my projects, refining my skills through creating UI redesign concepts. I've done some freelance work, creating website / software demos and have experience in properly managing and maintaining projects. </p>
        <div className='flex space-x-4 mb-4'>
        <a href="https://github.com/Revilo-Dev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.figma.com/@revilodev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Figma"><FontAwesomeIcon icon={faFigma} /></a>
        <a href="https://discord.gg/DARzByw6VW" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="https://x.com/ReviloDev" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="X/Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="https://www.reddit.com/user/revilodev/" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Reddit"><FontAwesomeIcon icon={faReddit} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className=' AH-Pulse AH-Underline flex items-center text-zinc-400 hover:text-primary'>
          <Mail size={20} className="mr-2" />
          <a href="mailto:Revilo2.Dev@gmail.com" className="hover:underline">
            Revilo2.Dev@gmail.com
          </a>
          <ExternalLink size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;

