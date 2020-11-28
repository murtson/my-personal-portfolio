import React from "react";
import "./Competence_card.css";
import JavascriptIcon from "../../assets/icons/javascript.svg";

const Competence_card = (props) => {
  return (
    <div className='competence_card'>
      <div className={`competence_card__icon_container ${props.color}`}>
        <img src={JavascriptIcon} alt='icon'></img>
      </div>
      <div className='competence_card__text_container'>
        <h4 className='title--competence_card'>{props.title}</h4>
        <p className='text--competence_card'>{props.children}</p>
      </div>
    </div>
  );
};

export default Competence_card;
