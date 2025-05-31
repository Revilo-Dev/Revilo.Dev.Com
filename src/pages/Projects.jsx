import React, { useState, useEffect } from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';
import TagSelector from '../components/TagSelector';


const allProjects = [
  {
    title: "Revilo.Dev.Com",
    subtitle: "My own personal dev site",
    img: '/assets/revilo.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Jan 8th 2025 </p> },
      { content: <p><b>Updated:</b> June 1st 2025</p> },
    ],
    linkUrl: 'https://revilodev.web.app/',
    linkname: 'Visit', 
    tag: 'Websites',
  },
  {
    title: "Revilo.Lib",
    subtitle: "A Website where i store all my open source code to reuse in other projects (All availible on github)",
    img: '/assets/Lib.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> 29th March 2025</p> },
    ],
    linkUrl: 'https://github.com/revilo-dev/revilodevcom',
    linkname: 'Visit', 
    tag: 'Websites',
  },
  {
    title: "Itch.WebGames",
    subtitle: "A Collection of Itch.io webgames",
    img: '/assets/itch.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Apr 6th 2025</p> },
      { content: <p><b>Updated:</b> Apr 6th 2025</p> },
    ],
    linkUrl: 'https://github.com/revilo-dev/revilodevcom',
    linkname: 'Visit', 
    tag: 'Websites',
  },

  {
    title: "Stacks",
    subtitle: "A simple chat app demo built to learn backend development",
    img: '/assets/Stacks.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Apr 17th 2025</p> },
      { content: <p><b>Updated:</b> Apr 21st 2025</p> },
    ],
    linkUrl: 'https://stacks-j2s9.onrender.com/',
    linkname: 'Visit', 
    tag: 'Websites',
  },
  {
    title: "Weather Dasboard",
    subtitle: "My first Shot at implementing API's and live Data",
    img: '/assets/weather.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Apr 11th 2025 </p> },
      { content: <p><b>Updated:</b> Apr 11th 2025 </p> },
    ],
    linkUrl: 'https://weatherdashboard-rd.web.app/',
    linkname: 'Visit', 
    tag: 'Websites',
  },
  {
    title: "Mythcraft",
    subtitle: "All About: Exploration - Questing - Looting - Progression. Minecraft 1.21 like never before",
    img: '/assets/MC5.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b>Dec 12th 2022</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "MC-Factory",
    subtitle: "A cross between satisfactoy and minecraft",
    img: '/assets/MCF.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Dec 22nd 2022</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/modpacks/mc-factory',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "Chocolate",
    subtitle: "Enchanced Vanilla Minecraft",
    img: '/assets/chocolate.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Feb 1st 2023</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/modpacks/chocolate-r2',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "StardewCraft",
    subtitle: "Stardew Valley X Minecraft",
    img: '/assets/Stardew.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> July 20th 2023</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/modpacks/stardewcraft-r2',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "Amethyst Theme",
    subtitle: "Minecraft UI, With an amethyst makeover",
    img: '/assets/amethyst.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> July 27th 2024</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/texture-packs/amethyst-theme',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "DarkUI",
    subtitle: "Dark Mode for 1.21+",
    img: '/assets/darkUI.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Oct 6th 2024</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/texture-packs/darkui',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "StardewUI Oct 11th 2025",
    subtitle: "Stardew theme for minecraft",
    img: '/assets/Stardew-pack.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Oct 11th 2024</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/texture-packs/stardew-ui',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "Modern Aesthetic",
    subtitle: "Simple, Clean, Modern; inspired by Satisfactory UI",
    img: '/assets/MCF-theme.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> Feb 17th 2025</p> },
    ],
    linkUrl: 'https://www.curseforge.com/minecraft/texture-packs/modern-aesthetic',
    linkname: 'Visit', 
    tag: 'Modding',
  },
  {
    title: "Twilight Zone",
    subtitle: "",
    img: '/assets/Twilight.png',
    description: 'My very first published game',
    rows: [
      { content: <p><b>Published:</b> Dec 13th 2024</p> },
      { content: <p><b>Updated:</b> Dec 13th 2024</p> },
    ],
    linkUrl: 'https://revilodev.itch.io/twilightzone',
    linkname: 'Visit', 
    tag: 'Games',
  },
  {
    title: "Nothing here... yet",
    subtitle: "",
    img: '/assets/revilo.png',
    description: 'Check Github for updates',
    linkUrl: 'https://github.com/Revilo-Dev',
    linkname: 'Visit', 
    tag: 'Software',
  },

];

  {/* template
  {
    title: "",
    subtitle: "",
    img: '/assets/revilo.png',
    description: '',
    rows: [
      { content: <p><b>Published:</b> </p> },
      { content: <p><b>Updated:</b> </p> },
    ],
    linkUrl: '',
    linkname: 'Visit', 
    tag: 'Websites',
  },
  */}

function Projects() {
  const tags = ['Websites', 'Modding', 'Software', 'Games']; // Define tags

  const [selectedTag, setSelectedTag] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.tag === selectedTag));
    }
  }, [selectedTag]);

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div className="body">
      <HeaderCard />
      <br />
      <div className="flex justify-center w-1/1 A-SlideDownBounce"><TagSelector className='justify-center' tags={tags} onTagSelect={handleTagSelect} /></div>
      <div className="content A-SlideUpBounce">

        <br />

        {/* Render InfoCards based on filteredProjects */}
        {filteredProjects.map((project, index) => (
          <InfoCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            row1={project.rows && project.rows[0] ? project.rows[0].content : null}
            row2={project.rows && project.rows[1] ? project.rows[1].content : null}
            row3={project.rows && project.rows[2] ? project.rows[2].content : null}
            img={project.img} // Use img prop
            description={project.description}
            linkUrl={project.linkUrl} // Use linkUrl prop
            linkname={project.linkname} // Use linkname prop
          />
        ))}

      </div>
    </div>
  );
}

export default Projects;
