import React from "react";
import "./Double_button.css";
import DefaultIcon from "../../../assets/icons/arrow-right-solid.svg";

const DoubleButton = (props) => {
  let buttonColor = "primary-button-color";
  let buttonSize = "double-button-md";
  let buttonIcon = DefaultIcon;
  if (props.secondaryColor) {
    buttonColor = "secondary-button-color";
  }
  if (props.size === "large") {
    buttonSize = "double-button-lg";
  }
  if (props.size === "small") {
    buttonSize = "double-button-sm";
  }

  return (
    <div className={`double-button ${buttonSize}`}>
      <div className={`double-button__left-side ${buttonColor}`}>
        {props.children}
      </div>
      <div className={`double-button__right-side ${buttonColor}`}>
        <img src={buttonIcon} alt='double-button-icon'></img>
      </div>
    </div>
  );
};

export default DoubleButton;
