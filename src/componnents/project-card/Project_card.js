import React from "react";
import "./Project_card.css";

const ProjectCard = (props) => {
  let leftSide = (
    <div className={`information-side--project-card`}>
      <div className='text-container'>
        <h2>{props.title}</h2>
        <h5>{props.subjects}</h5>
      </div>
      <div className='button-container'>
        <button className={`button--project-card button-color--${props.color}`}>
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
  let rightSide = (
    <div
      className={`picture-side--project-card picture-right card-color--${props.color}`}
    ></div>
  );
  if (props.rightAlign) {
    leftSide = (
      <div
        className={`picture-side--project-card picture-left card-color--${props.color}`}
      ></div>
    );
    rightSide = (
      <div className='information-side--project-card '>
        <div className='text-container'>
          <h2>{props.title}</h2>
          <h5>{props.subjects}</h5>
        </div>
        <div className='button-container'>
          <button
            className={`button--project-card button-color--${props.color}`}
          >
            VIEW PROJECT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='project-card'>
      {leftSide}
      {rightSide}
    </div>
  );
};

export default ProjectCard;
