import React from "react";
import "./Service_card.css";

const ServiceCard = (props) => {
  return (
    <div className='service-card'>
      <div className='service-card__icon-container'>
        <img className='service-icon' src={props.icon}></img>
      </div>
      <div className='service-card__text-container'>
        <h5>{props.title}</h5>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
