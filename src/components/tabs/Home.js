import React, { useState } from "react";
import '../../assets/styles/home.css'

const Home = () => {
  const emailCopy = "jaysebagh@gmail.com"

  const delay = async (ms) => {
      return new Promise((resolve) => 
          setTimeout(resolve, ms));
  };

  const [copyText, setCopyText] = useState(" ");

  const [fade, setFade] = useState(0);

  return(
      <div className="home-container">
        <h1>JEAN-FRANCOIS "JAY" SEBAGH</h1>
        <h2>Software Engineer</h2>
        <p className="copied"
                fade={fade}
                onAnimationEnd={() => setFade(0)}
            >{copyText}</p>
        <div className='socials-container'>
          <a href="https://github.com/jaysebagh/" target="_blank" rel="noreferrer">
            <button className='social1'>
              <i class="fab fa-github socials"></i>
            </button>
          </a>
          <a href="https://linkedin.com/in/jean-francois-sebagh/" target="_blank" rel="noreferrer">
            <button className='social2'>
              <i class="fab fa-linkedin-in socials"></i>
            </button>
          </a>
          <button
            className='social3 email'
            onClick={ async () => {
                navigator.clipboard.writeText(emailCopy);
                setFade(1)
                setCopyText("COPIED EMAIL!");
                await delay(1000);
                setCopyText(" ");
            }}
          >
            <i class="far fa-envelope socials"></i>
          </button>
          <button className='social4'>
            <i class="far fa-file socials"></i>
          </button>
        </div>
      </div>
  )
};

export default Home;