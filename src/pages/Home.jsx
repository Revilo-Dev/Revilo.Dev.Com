import React from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';

function Home() {

    return (
      <>
      <div className="body">
          <HeaderCard/>
        <br></br>
        <div className="content A-SlideUpBounce">

        <InfoCard
          title={"Programming Languages"}
          subtitle={"My knowlege in programming languages"}
          row1={<p><b>Basic knowlegde:</b> Python, C# </p>}
          row2={<p><b>Intermediate:</b> Java.Script, Swift, Java</p>}
          row3={<p><b>Experienced:</b> GD.Script, HTML, CSS, React.JS </p>}
        />

        <InfoCard
        title={"Framworks / Libraries / Plugins"}
        subtitle={"My experience with frameworks, libraries and plugins"}
        row1={<p><b>Frameworks:</b> Tailwind.CSS</p>}
        row2={<p><b>Libraries:</b> React <b>:</b> Zustand <b>:</b> React DOM <b>:</b> React-Router-Dom <b>:</b> Lucide </p>}
        row3={<p><b>Plugins:</b> DaisyUI</p>}
        />
  
        <InfoCard
        title={"Software"}
        subtitle={"Software im experienced in using"}
        row1={<p>Firebase Studio <b>:</b> Github <b>:</b> Figma <b>:</b> Godot <b>:</b> Visual Studio <b>:</b> Firebase hosting <b>:</b> Asprite</p>}
        />

        <InfoCard
        title={"Hobbies"}
        subtitle={"My hobbies and interests"}
        row1={<p><b>Development:</b> Mainly Fullstacks development with prior knowlegde in game development</p>}
        row2={<p><b>Modding:</b> I create and maintain modded minecraft experiences on Curseforge</p>}
        row3={<p><b>Design:</b> I design all my own assets and graphics on Figma, I like creating UI concepts and redesigns</p>}
        
        />
        
      </div>
      </div>
      </>
    )
  }

export default Home;