import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Landing_section.css";
import SVGfigure from "../../assets/images/working-man.svg";
import Background from "../../assets/images/lp-bg.svg";

import DefaultButton from "../../componnents/buttons/default-button/Default_button";
import HeroCharacter from "../../assets/images/hero-character.svg";
import HeroPlanets from "../../assets/images/hero-planets.svg";
import HeroTopCornerPattern from "../../assets/images/hero-top-corner-pattern.svg";
import HeroBottomCornerPattern from "../../assets/images/hero-bottom-corner-pattern.svg";
import HeroBottomPattern from "../../assets/images/hero-bottom-pattern.svg";

const LandingSection = () => {
  return (
    <div className='landing-section'>
      <div className='landing-section__background-container'>
        <div className='hero-bg'>
          <img src={HeroBottomPattern} className='hero-bottom-pattern'></img>
          <img
            src={HeroTopCornerPattern}
            className='hero-top-corner-pattern'
          ></img>
          <img
            src={HeroBottomCornerPattern}
            className='hero-bottom-corner-pattern'
          ></img>
        </div>
        <div className='hero-figures'>
          <img src={HeroCharacter} className='hero-character'></img>
          <img src={HeroPlanets} className='hero-planets'></img>
        </div>
        <div className='hero-text'>
          <h1>I AM MARTIN MOSESSON</h1>
          <h5>Software Enginner / Web Developer / UI/UX-Designer</h5>
          <button className='hero-button'>LET'S TALK!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
