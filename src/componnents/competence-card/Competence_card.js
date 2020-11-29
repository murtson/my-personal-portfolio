import React from "react";
import "./Competence_card.css";

const Competence_card = (props) => {
  return (
    <div className='competence-card'>
      <div className={`icon-container ${props.color}`}>
        <img src={props.icon} alt='icon' className='competence-icon'></img>
      </div>
      <div className='text-container'>
        <h4 className='competence-title'>{props.title}</h4>
        <p className='competence-text'>{props.children}</p>
      </div>
      <div className='progress-bar-container'>
        <div className='progress-bar-stats-container'>
          <p className='stats--year'>{props.time}</p>
          <p className='stats--percent'>{props.percent} %</p>
        </div>
        <div className='progress-bar--background'>
          <div
            className={`progress-bar--progress width-${props.percent}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Competence_card;
