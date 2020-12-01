import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Landing_section.css";
import WorkingMan from "../../assets/images/working-man.svg";
import Background from "../../assets/images/lp-bg.svg";

const LandingSection = () => {
  return (
    <div className='landing_section'>
      <div className='background_container'>
        <img src={Background} className='background__pattern'></img>
        <img src={WorkingMan} className='background__working_man'></img>
        <div className='text_container'>
          <h1 className='title--landing_section'>Hi, I am Martin Mosesson</h1>
          <h3 className='subtitle--landing_section'>
            A passionate Software Enginner from Stockholm
          </h3>
          <button className='button--landing_section'>LET'S TALK!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
