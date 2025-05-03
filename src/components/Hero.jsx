import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero-background '></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Mirësevini në</h1>
          <h2 className="hero-subtitle">Rent Ease</h2>
          <p className="hero-description">
          Zbuloni një përzgjedhje të personalizuar të shtëpive të ëndrrave — thjesht, shpejt dhe me lehtësi.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero; 