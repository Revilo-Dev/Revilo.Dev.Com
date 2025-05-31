import React from 'react';
import HeaderCard from '../components/HeaderCard';
import InfoCard from '../components/InfoCard';

function Links() {
    return (
      <>
        <div className="body">
            <HeaderCard/>
          <br></br>
          <div className="content A-SlideUpBounce">

          <InfoCard
            title={"Github"}
            description={"This projects GitHub page with all the open Source Code"}
            linkUrl={"https://github.com/Revilo-Dev/"}
            linkname={"Visit"}
            img={"/assets/I-Github.png"}
            imgAlt={"alt"}
          />

          <InfoCard
            title={"Figma"}
            description={"All my assetes design Docs and Resources"}
            linkUrl={"https://www.figma.com/@revilodev"}
            linkname={"Visit"}
            img={"/assets/I-Figma.png"}
            imgAlt={"alt"}
          />

          <InfoCard
            title={"X"}
            description={"My Personal X Profile to keep up with other projects"}
            linkUrl={"https://x.com/ReviloDev"}
            linkname={"Visit"}
            img={"/assets/I-X.png"}
            imgAlt={"alt"}
          />

          <InfoCard
            title={"Cursforge"}
            description={"My Cursforge account"}
            linkUrl={"https://www.curseforge.com/members/revilodev/projects"}
            linkname={"Visit"}
            img={"/assets/forge.png"}
            imgAlt={"alt"}
          />

          <InfoCard
            title={"Modrinth"}
            description={"My Modrinth account"}
            linkUrl={"https://modrinth.com/user/ReviloDev"}
            linkname={"Visit"}
            img={"/assets/mod.png"}
            imgAlt={"alt"}
          />

          

          




    
        </div>
        </div>
      </>
    );
  }

export default Links;