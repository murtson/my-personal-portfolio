import React, { Fragment } from "react";
import "./Section_title.css";

const Section_title = (props) => {
  let content = (
    <Fragment>
      <div className='tag-section left-tag'>
        <div className='section-tag '>
          <p>{props.tag}</p>
        </div>
      </div>
      <div className='main-section'>
        <div className='text-container'>
          <h3 className='title--section'>{props.title}</h3>
          <p className='subtitle--section'>{props.children}</p>
        </div>
        <button className='section-title-button'>Explore more</button>
      </div>
    </Fragment>
  );

  if (props.rightAlign) {
    content = (
      <Fragment>
        <div className='tag-section right-tag'>
          <div className='section-tag '>
            <p>{props.tag}</p>
          </div>
        </div>
        <div className='main-section'>
          <button className='section-title-button'>Explore more</button>
          <div className='text-container'>
            <h3 className='title--section right-align'>{props.title}</h3>
            <p className='subtitle--section right-align'>{props.children}</p>
          </div>
        </div>
      </Fragment>
    );
  }

  return <div className='section-title'>{content}</div>;
};

export default Section_title;
