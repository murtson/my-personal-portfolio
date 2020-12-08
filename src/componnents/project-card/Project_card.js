import React from "react";
import { useMediaQuery } from "react-responsive";

import DoubleButton from "../buttons/double-button/Double_button";
import ArrowRightIcon from "../../assets/icons/arrow-right-solid.svg";

import "./Project_card.css";

const ProjectCard = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });

  let tags = props.tags.map((tag) => {
    return (
      <div className={"project-tag" + (tag.length > 1 ? " tag-wide" : "")}>
        <p>{tag.name}</p>
      </div>
    );
  });

  let leftSide = (
    <div className={`information-side--project-card`}>
      <div className='text-container'>
        <h5>{props.title}</h5>
        <p>{props.subjects}</p>
      </div>
      <div className='tags-button-container'>
        <div className='tags-container'>{tags}</div>
        <DoubleButton icon={ArrowRightIcon} secondaryColor={false} size='large'>
          VIEW PROJECT
        </DoubleButton>
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
          <h5>{props.title}</h5>
          <p>{props.subjects}</p>
        </div>
        <div className='tags-button-container'>
          <div className='tags-container'>{tags}</div>
          <DoubleButton
            icon={ArrowRightIcon}
            secondaryColor={false}
            size='large'
          >
            VIEW PROJECT
          </DoubleButton>
        </div>
      </div>
    );
  }

  let desktopCardLayout = (
    <div className='project-card'>
      {leftSide}
      {rightSide}
    </div>
  );

  let mobileCardLayout = (
    <div className='project-card'>
      <div
        className={`picture-side--project-card picture-right card-color--${props.color}`}
      ></div>
      <div className={`information-side--project-card`}>
        <div className='text-container'>
          <h5>{props.title}</h5>
          <p>{props.subjects}</p>
        </div>
        <div className='button-container'>
          {/*  <button
            className={`button--project-card button-color--${props.color}`}
          >
            VIEW PROJECT
          </button> */}
          <DoubleButton
            icon={ArrowRightIcon}
            secondaryColor={false}
            size='large'
          >
            VIEW PROJECT
          </DoubleButton>
        </div>
      </div>
    </div>
  );

  return <div>{isMobile ? mobileCardLayout : desktopCardLayout}</div>;
};

export default ProjectCard;
