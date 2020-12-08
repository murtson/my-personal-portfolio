import React from "react";
import "./Default_button.css";

const DefaultButton = (props) => {
  let buttonColor = "primary-button-color";
  let buttonSize = "md-size-button";
  if (props.secondaryColor) {
    buttonColor = "secondary-button-color";
  }
  if (props.size === "large") {
    buttonSize = "lg-size-button";
  }
  if (props.size === "small") {
    buttonSize = "sm-size-button";
  }

  return (
    <div className={`default-button ${buttonColor} ${buttonSize}`}>
      {props.children}
    </div>
  );
};

export default DefaultButton;
