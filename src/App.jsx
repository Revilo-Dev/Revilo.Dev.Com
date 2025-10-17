import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import useThemeStore from './store/ThemeStore.js';
import ThemeDropdown from './components/ThemeDropDown.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Modding from './pages/Modding.jsx';
import Links from './pages/Links.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Footer from './components/Footer';
import { Home as HomeIcon, Info, Folder, Hammer, Link as LinkIcon } from 'lucide-react';
import AboutRunic from './pages/modding/runic/aboutrunic.jsx';
import AboutBoundless from './pages/modding/boundless/aboutboundless.jsx';
import RunicWiki from './pages/modding/runic/runicwiki.jsx';
import BoundlessWiki from './pages/modding/boundless/boundlesswiki.jsx';






function App() {
  const { theme } = useThemeStore();

  return (
    <Router>
      <div data-theme={theme} className="bg-base-200 min-h-max flex flex-col">

        <nav>
          <div className="NavBar">
            <Link className="btn btn-soft AH-Underline" to="/">
              <HomeIcon className="icon" />
              <span className="label">Home</span>
            </Link>
            <Link className="btn btn-soft AH-Underline" to="/About">
              <Info className="icon" />
              <span className="label">About</span>
            </Link>
            <Link className="btn btn-soft AH-Underline" to="/Projects">
              <Folder className="icon" />
              <span className="label">Projects</span>
            </Link>
            <Link className="btn btn-soft AH-Underline" to="/Modding">
              <Hammer className="icon" />
              <span className="label">Modding</span>
            </Link>
            <Link className="btn btn-soft AH-Underline" to="/Links">
              <LinkIcon className="icon" />
              <span className="label">Links</span>
            </Link>
          </div>
        </nav>

        <div className="ThemeButton">
          <ThemeDropdown />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Modding" element={<Modding />} />
          <Route path="/Links" element={<Links />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/About-Runic" element={<AboutRunic />} />
          <Route path="/About-Boundless" element={<AboutBoundless />} />
          <Route path="/Runic-Wiki" element={<RunicWiki />} />
          <Route path="/Boundless-Wiki" element={<BoundlessWiki />} />
          <Route path="/Links" element={<Links />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
