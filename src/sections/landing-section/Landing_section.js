import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Landing_section.css";
import SVGfigure from "../../assets/images/working-man.svg";
import Background from "../../assets/images/lp-bg.svg";

const LandingSection = () => {
  return (
    <div className='landing-section'>
      <div className='landing-section__background-container'>
        <img
          src={Background}
          className='background-container__background-pattern'
        ></img>
        <img src={SVGfigure} className='background-container__figure'></img>
        <div className='landing-section__text-container'>
          <h1 className='landing-section__title'>Hi, I am Martin Mosesson</h1>
          <h5 className='landing-section__subtitle'>
            A passionate Software Enginner from Stockholm
          </h5>
          <button className='landing-section__button'>LET'S TALK!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
