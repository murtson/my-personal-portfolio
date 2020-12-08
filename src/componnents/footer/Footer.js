import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/icons/facebook-square-brands.svg";
import LinkedInIcon from "../../assets/icons/linkedin-brands.svg";
import GithubIcon from "../../assets/icons/github-square-brands.svg";

import DoubleButton from "../buttons/double-button/Double_button";
import DefaultButton from "../buttons/default-button/Default_button";

const FooterLink = (props) => {
  return (
    <div className='footer-link'>
      <div className='footer-link__icon-container'>
        <img src={props.icon} alt='footer-icon'></img>
      </div>
      <div className='footer-link__title-container'>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-content-container'>
        <h3>Interested in Collaboration?</h3>
        <div className='footer__text-container'>
          <p>
            Challenge me. I am open to any idea - big or small. Feel free to
            contact me here, or on my other social media platforms
          </p>
          {/*  <button className='footer-button'>Let's connect</button> */}
          <DoubleButton secondaryColor={false} size='medium'>
            Let's connect
          </DoubleButton>
        </div>
        <div className='footer-links-container'>
          <FooterLink icon={LinkedInIcon}>LinkedIn</FooterLink>
          <FooterLink icon={GithubIcon}>Github</FooterLink>
          <FooterLink icon={FacebookIcon}>Facebook</FooterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
