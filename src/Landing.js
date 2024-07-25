import './assets/styles/landing.css';
import pfp from './assets/images/pfp.jpg'

const Landing = () => {
  return (
    <div className="landing-container">
      <div className='panel-container'>
        <div className='left-panel'>
          <img className="pfp" src={pfp}/>
          <h1>Jay Sebagh</h1>
          <h2>Software Engineer</h2>
          <div className='nav'>
            <button>Home</button>
            <button>Projects</button>
            <button>Contact</button>
            <button>About</button>
          </div>
        </div>
        <div className='right-panel'>
          <h1>JEAN-FRANCOIS "JAY" SEBAGH</h1>
          <h2>Software Engineer</h2>
          <div className='socials-container'></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
