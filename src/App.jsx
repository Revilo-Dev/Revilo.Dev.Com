import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import useThemeStore from './store/ThemeStore.js';
import ThemeDropdown from './components/ThemeDropDown.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Links from './pages/Links.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Footer from './components/Footer';


function App() {
  const {theme} = useThemeStore()
  return (
    <Router>
      <div data-theme={theme} className='bg-base-200 min-h-max flex flex-col'>
        
        <nav className='TransparentUI'>
          <div className='flex justify-center w-full gap-1'>
            <Link className='btn btn-soft AH-Underline' to="/">Home</Link>
            <Link className='btn btn-soft AH-Underline' to="/Projects">Projects</Link>
            <Link className='btn btn-soft AH-Underline' to="/Links">Links</Link>
          </div>
          <ThemeDropdown/>
        </nav> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Links" element={<Links />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    
  );
}


export default App;

