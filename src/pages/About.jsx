import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Blocks, Globe2, Smartphone } from 'lucide-react';
import HeaderCard from '../components/HeaderCard';
import './About.css';

const work = [
  {
    title: 'Android apps',
    icon: Smartphone,
    description: 'OneUI first Android apps.',
    projects: [
      { name: 'Flow', detail: 'Habits & streaks', url: 'https://play.google.com/store/apps/details?id=com.revilodev.flow' },
      { name: 'OneWidget', detail: 'One UI widgets', url: 'https://play.google.com/store/apps/details?id=com.revilodev.onewidget' },
      { name: 'OneUI ToolKit', detail: 'One UI design repo', url: 'https://github.com/Revilo-Dev/oneui-design-9.0' },
    ],
  },
  {
    title: 'Websites',
    icon: Globe2,
    description: 'Building simple and functional websites.',
    projects: [
      { name: 'ReviloDev.com', detail: 'Portfolio & project hub', url: 'https://revilodev.com/' },
      { name: 'Productivity Dashboard', detail: 'Manage your tasks and goals', url: 'https://swift-dashboard-bd0ad.web.app/' },
       { name: 'Weather Dashboard', detail: 'Simple and clean weather dashboard', url: 'https://weatherdashboard-rd.web.app/' },
    ],
  },
  {
    title: 'Minecraft modding',
    icon: Blocks,
    description: 'Mods, Modpacks and Resource Packs.',
    projects: [
      { name: 'RUNIC', detail: 'Gear enhancements', url: 'https://www.curseforge.com/minecraft/mc-mods/runic-enhancements' },
      { name: 'Boundless', detail: 'Quest creation', url: 'https://www.curseforge.com/minecraft/mc-mods/boundless-quests' },
      { name: 'Mythcraft', detail: 'Exploration & progression', url: 'https://www.curseforge.com/minecraft/modpacks/mythcrafts' },
    ],
  },
];

const software = [
  { name: 'IntelliJ IDEA', detail: 'Java & modding', url: 'https://www.jetbrains.com/idea/' },
  { name: 'Android Studio', detail: 'Android apps', url: 'https://developer.android.com/studio' },
  { name: 'Visual Studio', detail: 'Development & debugging', url: 'https://visualstudio.microsoft.com/' },
  { name: 'PyCharm', detail: 'Python development', url: 'https://www.jetbrains.com/pycharm/' },
  { name: 'Figma', detail: 'Interface design', url: 'https://www.figma.com/' },
  { name: 'Aseprite', detail: 'Pixel art & sprites', url: 'https://www.aseprite.org/' },
];

function About() {
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api.github.com/users/Revilo-Dev', {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
        return response.json();
      })
      .then((profile) => setRepoCount(profile.public_repos))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return <div className="body about-body">
    <HeaderCard />
    <main className="about-page">
    <section className="about-achievements A-SlideDownBounce" aria-label="Highlights">
      <div><strong>1.2M+</strong><span>downloads across published projects</span></div>
      <div><strong>{repoCount ?? '—'}</strong><span>public GitHub repositories</span></div>
      <div><strong>2022</strong><span>the year I started publishing Minecraft projects</span></div>
    </section>

    <section className="about-work A-SlideUpBounce" aria-labelledby="about-work-heading">
      <div className="about-section-heading">
        <div><h2 id="about-work-heading">Main areas of development</h2></div>
        <Link to="/projects">See all projects <ArrowRight size={17} /></Link>
      </div>
      <div className="about-work-grid">
        {work.map(({ title, icon, description, projects }) => <article className="about-work-card bg-base-300" key={title}>
          <div className="about-work-icon">{React.createElement(icon, { size: 24, 'aria-hidden': true })}</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="about-project-links">
            {projects.map((project) => <a href={project.url} target="_blank" rel="noreferrer" key={project.name}>
              <span><strong>{project.name}</strong><small>{project.detail}</small></span><ArrowUpRight size={18} aria-hidden="true" />
            </a>)}
          </div>
        </article>)}
      </div>
    </section>

    <section className="about-software A-SlideUpBounce" aria-labelledby="about-software-heading">
      <div className="about-section-heading"><h2 id="about-software-heading">What I use</h2></div>
      <div className="about-software-grid">
        {software.map((tool) => <a className="about-software-card bg-base-300" href={tool.url} target="_blank" rel="noreferrer" key={tool.name}>
          <span><strong>{tool.name}</strong><small>{tool.detail}</small></span><ArrowUpRight size={19} aria-hidden="true" />
        </a>)}
      </div>
    </section>
    </main>
  </div>;
}

export default About;
