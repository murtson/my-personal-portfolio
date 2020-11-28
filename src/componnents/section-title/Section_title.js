import React from "react";
import "./Section_title.css";

const Section_title = (props) => {
  return (
    <div className='section_title'>
      <h1 className='title--section'>{props.title}</h1>
      <h4 className='text--section'>{props.children}</h4>
      {/* <hr className='section_ending' /> */}
    </div>
  );
};

export default Section_title;
