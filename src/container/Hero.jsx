import React from 'react';
import { motto, model, description } from '../constants/data';
import lev from '../assets/nsl_lev.mp4';
import { Link } from 'react-router-dom';
import '../styles/scss/button.scss';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="main__hero flex__center">
      <div className="hero__section-1">
        <h1 className="hero__heading">{motto}</h1>
        <h3 className="hero__heading-model">{model}</h3>
        <p className="hero__p-desc">{description}</p>
        <button type="button" className="global__btn">
          <span className="global__btn-line" />
          <Link to="/product">Learn More</Link>
        </button>
      </div>
      <div className="hero__section-2">
        <div className="hero__video-bg">
          <video
            src={lev}
            alt="lev-video"
            autoPlay
            loop
            muted
            className="hero__video"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
