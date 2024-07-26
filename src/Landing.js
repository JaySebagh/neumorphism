import React, { useState } from 'react';
import './assets/styles/landing.css';
import pfp from './assets/images/pfp.jpg'
import Home from './components/tabs/Home';
import About from './components/tabs/About';
import Projects from './components/tabs/Projects';
import Contact from './components/tabs/Contact';

const Landing = () => {
  const tabs = [
    {
        label: 'Home',
        content: <Home />
    },
    {
        label: 'Projects',
        content: <Projects />
    },
    {
        label: 'Contact',
        content: <Contact />
    },
    {
        label: 'About',
        content: <About />
    }
]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="landing-container">
      <div className='panel-container'>
        <div className='left-panel'>
          <img className="pfp" src={pfp} alt="pfp"/>
          <h1>Jay Sebagh</h1>
          <h2>Software Engineer</h2>
          <div className="nav">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? 'tab active' : 'tab inactive'}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
          </div>
        </div>
        <div className='right-panel'>
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}

export default Landing;
