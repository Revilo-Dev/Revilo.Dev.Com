import React from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';

function About() {

    return (
      <>
      <div className="body">
          <HeaderCard/>
        <br></br>
        <div className="content A-SlideUpBounce">

        <InfoCard
          title={"Core Stack"}
          subtitle={"Languages & tools I use to ship my projects"}
          row1={<p><b>Primary:</b> JavaScript / TypeScript, React, HTML, CSS</p>}
          row2={<p><b>Backend / Data:</b> Firebase, MongoDB, REST APIs</p>}
          row3={<p><b>Also used:</b> Java, Python, C#, Swift, GDScript</p>}
        />
        <InfoCard
          title={"Frontend & UI Engineering"}
          subtitle={"Component-driven UI with modern styling workflows"}
          row1={<p><b>UI:</b> React, React Router, React DOM</p>}
          row2={<p><b>State:</b> Zustand</p>}
          row3={<p><b>Styling:</b> Tailwind CSS, DaisyUI, Lucide Icons</p>}
        />
        <InfoCard
          title={"Game Dev & Modding"}
          subtitle={"Large-scale systems, content pipelines, and live updates"}
          row1={<p><b>Java Modding:</b> Minecraft mods/modpacks with long-term support</p>}
          row2={<p><b>Scale:</b> 800K+ total downloads across published projects</p>}
          row3={<p><b>Game Dev:</b> Godot + published prototypes / demos</p>}
        />
        <InfoCard
          title={"Product Design (UI/UX)"}
          subtitle={"I design interfaces that feel clean, modern, and usable"}
          row1={<p><b>Tools:</b> Figma, Aseprite</p>}
          row2={<p><b>Focus:</b> Layout, hierarchy, readability, interaction flow</p>}
          row3={<p><b>Practice:</b> UI redesign concepts to improve clarity + polish</p>}
        />
        <InfoCard
          title={"Delivery & Workflow"}
          subtitle={"How I build, maintain, and ship projects"}
          row1={<p><b>Dev Tools:</b> IntelliJ IDEA, Visual Studio, GitHub</p>}
          row2={<p><b>Deployment:</b> Firebase Hosting, hosted web demos</p>}
          row3={<p><b>Project Work:</b> Planning, iteration, maintenance, updates</p>}
        />
        <InfoCard
          title={"Freelance & Collaboration"}
          subtitle={"Client-style delivery and real-world iteration"}
          row1={<p><b>Work:</b> Website & software demos, prototypes, UI builds</p>}
          row2={<p><b>Strengths:</b> Clear scope, fast iteration, clean handover</p>}
          row3={<p><b>Community:</b> Creator ecosystem experience + user feedback loops</p>}
        />

        
      </div>
      </div>
      </>
    )
  }

export default About;