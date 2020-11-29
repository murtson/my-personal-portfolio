import React from "react";
import "./Service_card.css";

const ServiceCard = (props) => {
  return (
    <div className='service-card'>
      <div className='icon-container--service'>
        <img className='icon--service' src={props.icon}></img>
      </div>
      <div className='text-container--serivce'>
        <h4>{props.title}</h4>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
