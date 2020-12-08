import React from "react";
import "./Section_title.css";

const Section_title = (props) => {
  return (
    <div className='section-title'>
      <h3 className='title--section'>{props.title}</h3>
      <p className='subtitle--section'>{props.children}</p>
      {/* <hr className='section_ending' /> */}
    </div>
  );
};

export default Section_title;
