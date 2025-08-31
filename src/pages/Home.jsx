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
          row1={<p><b>Fundamentals:</b> Python, C# </p>}
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
        row1={<p>Intellij Idea <b>:</b> Firebase Studio <b>:</b> Github <b>:</b> Figma <b>:</b> Godot <b>:</b> Visual Studio <b>:</b> Firebase hosting <b>:</b> MongoDB <b>:</b> Asprite</p>}
        />

        <InfoCard
        title={"Skills"}
        subtitle={"My skills and interests"}
        row1={<p><b>Development:</b> Ive created multiple fullstack web applications and refine my skills in creation every day</p>}
        row2={<p><b>Modding:</b> Im a Java minecraft modder, which tought me how to properly develop manage and plan large projects</p>}
        row3={<p><b>Design:</b> Desining all my own assets and graphics on Figma, ive learned key graphic design principles and refine my abilites constantly</p>}
        
        />
        
      </div>
      </div>
      </>
    )
  }

export default Home;