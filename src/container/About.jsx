import React from 'react';
import { about } from '../constants/data';
import { Link } from 'react-router-dom';
import '../styles/scss/button.scss';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about__main">
      {about.map((e, i) => (
        <div key={i} className="about__content">
          <h1 key={i} className="about__content-title">
            {e.title}
          </h1>
          <p key={e.name} className="about__content-desc1">
            {e.desc1}
          </p>
          <h2 key={e.name} className="about__content-subtitle">
            {e.subtitle}
          </h2>
          <p key={e.name} className="about__content-desc2">
            {e.desc2}
          </p>
        </div>
      ))}
      <button className="global__btn about__btn">
        <span className="global__btn-line"></span>
        <Link to="../product">Learn More</Link>
      </button>
    </div>
  );
};

export default About;
