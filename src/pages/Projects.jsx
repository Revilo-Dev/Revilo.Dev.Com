import React, { useState, useEffect } from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';
import TagSelector from '../components/TagSelector';


const allProjects = [
  {
    title: "ReviloDev.com",
    subtitle: "Personal developer website",
    img: "/assets/revilo.png",
    description: "",
    rows: [
      { content: <p><b>Published:</b> Jan 08, 2025</p> },
      { content: <p><b>Last updated:</b> Jan 10, 2026</p> },
    ],
    linkUrl: "https://revilodev.com/",
    linkname: "Visit",
    tag: "Websites",
  },
  {
    title: "ReviloLib",
    subtitle: "Open-source code library for reuse across projects",
    img: "/assets/Lib.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Mar 29, 2025</p> }],
    linkUrl: "https://github.com/revilo-dev/revilodevcom",
    linkname: "Visit",
    tag: "Websites",
  },
  {
    title: "Itch WebGames",
    subtitle: "Collection of Itch.io web games",
    img: "/assets/itch.png",
    description: "",
    rows: [
      { content: <p><b>Published:</b> Apr 06, 2025</p> },
      { content: <p><b>Last updated:</b> Apr 06, 2025</p> },
    ],
    linkUrl: "https://github.com/revilo-dev/revilodevcom",
    linkname: "Visit",
    tag: "Websites",
  },
  {
    title: "Stacks",
    subtitle: "Chat app demo to learn backend development",
    img: "/assets/Stacks.png",
    description: "",
    rows: [
      { content: <p><b>Published:</b> Apr 17, 2025</p> },
      { content: <p><b>Last updated:</b> Apr 21, 2025</p> },
    ],
    linkUrl: "https://stacks-j2s9.onrender.com/",
    linkname: "Visit",
    tag: "Websites",
  },
  {
    title: "Weather Dashboard",
    subtitle: "Live weather dashboard with API data",
    img: "/assets/weather.png",
    description: "",
    rows: [
      { content: <p><b>Published:</b> Apr 11, 2025</p> },
      { content: <p><b>Last updated:</b> Apr 11, 2025</p> },
    ],
    linkUrl: "https://weatherdashboard-rd.web.app/",
    linkname: "Visit",
    tag: "Websites",
  },
  {
    title: "RUNIC",
    subtitle:
      "Find vanilla's Enchantment system boring and unbalanced? This mod redefines upgrading gear in an RPG-style way.",
    img: "/assets/runic.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Aug 30, 2025</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/mc-mods/runic-enhancements",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Boundless Quests",
    subtitle: "Quest system for Minecraft modpacks and progression",
    img: "/assets/Boundless.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Sep 23, 2025</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/mc-mods/runic-enhancements",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Mythcraft",
    subtitle: "Exploration, questing, looting, and progression — Minecraft like never before",
    img: "/assets/MC5.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Dec 12, 2022</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/modpacks/mythcrafts",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "MC-Factory",
    subtitle: "A mix of factory progression and Minecraft",
    img: "/assets/MCF.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Dec 22, 2022</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/modpacks/mc-factory",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Chocolate",
    subtitle: "Enhanced Vanilla Minecraft modpack",
    img: "/assets/chocolate.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Feb 01, 2023</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/modpacks/chocolate-r2",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "StardewCraft",
    subtitle: "Stardew Valley x Minecraft modpack",
    img: "/assets/Stardew.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Jul 20, 2023</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/modpacks/stardewcraft-r2",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Amethyst Theme",
    subtitle: "Minecraft UI pack with an amethyst makeover",
    img: "/assets/amethyst.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Jul 27, 2024</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/texture-packs/amethyst-theme",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "DarkUI",
    subtitle: "Dark mode UI pack for 1.21+",
    img: "/assets/darkUI.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Oct 06, 2024</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/texture-packs/darkui",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "StardewUI",
    subtitle: "Stardew-themed UI pack for Minecraft",
    img: "/assets/Stardew-pack.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Oct 11, 2024</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/texture-packs/stardew-ui",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Modern Aesthetic",
    subtitle: "Clean, modern UI inspired by Satisfactory",
    img: "/assets/MCF-theme.png",
    description: "",
    rows: [{ content: <p><b>Published:</b> Feb 17, 2025</p> }],
    linkUrl: "https://www.curseforge.com/minecraft/texture-packs/modern-aesthetic",
    linkname: "Visit",
    tag: "Modding",
  },
  {
    title: "Twilight Zone",
    subtitle: "My first published game",
    img: "/assets/Twilight.png",
    description: "",
    rows: [
      { content: <p><b>Published:</b> Dec 13, 2024</p> },
      { content: <p><b>Last updated:</b> Dec 13, 2024</p> },
    ],
    linkUrl: "https://revilodev.itch.io/twilightzone",
    linkname: "Visit",
    tag: "Games",
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
