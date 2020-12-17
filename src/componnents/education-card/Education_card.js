import React from "react";
import "./Education_card.css";
import ArrowUp from "../../assets/other/education-arrow-up.svg";
import ArrowDown from "../../assets/other/education-arrow-down.svg";

const EducationCard = (props) => {
  let arrow = <img className='education-arrow-up' src={ArrowUp}></img>;
  if (props.arrowDown) {
    arrow = <img className='education-arrow-down' src={ArrowDown}></img>;
  }

  return (
    <div className='education-card'>
      {arrow}
      <div className='education-card-icon-container'>
        <img className='education-card-icon' src={props.icon}></img>
      </div>
      <div className='education-card-text-container'>
        <p className='education-card-exam-text'>{props.exam}</p>
        <p className='education-card-school-text'>{props.school}</p>
        <p className='education-card-time-text'>{props.timeSpan}</p>
      </div>
    </div>
  );
};

export default EducationCard;
