import React from "react";
import "./Competence_card.css";

const Competence_card = (props) => {
  return (
    <div className='competence-card'>
      <div
        className={`competence-card__icon-container icon-container-color--${props.color}`}
      >
        <img
          src={props.icon}
          alt='icon'
          className='competence-card__competence-icon'
        ></img>
      </div>
      <p className='competence-card__title'>{props.title}</p>
      <div className='competence-card__progress-container'>
        <div className='progress-bar__bar-background'>
          <div
            className={`progress-bar__bar-progress ${props.color} progress-width--${props.percent}`}
          ></div>
        </div>
        <div className='progress-bar__stats-container'>
          <p className='progress-bar-stats--year'>{props.time}</p>
          <p className='progress-bar-stats--percent'>{props.percent} %</p>
        </div>
      </div>
    </div>
  );
};

export default Competence_card;
