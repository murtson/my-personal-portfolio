import React from "react";
import "./Footer.css";
import FacebookIcon from "../../assets/icons/facebook-square-brands.svg";
import LinkedInIcon from "../../assets/icons/linkedin-brands.svg";
import GithubIcon from "../../assets/icons/github-square-brands.svg";

const FooterLink = (props) => {
  return (
    <div className='footer-link'>
      <div className='icon-container--footer-link'>
        <img src={props.icon} alt='footer-icon'></img>
      </div>
      <div className='title-container--footer-link'>
        <h5>{props.children}</h5>
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer-content-container'>
        <h2>Interested in Collaboration?</h2>
        <div className='text-button-container'>
          <h5>
            Challenge me. I am open to any idea - big or small. Feel free to
            contact me here, or on my other social media platforms
          </h5>
          <button className='footer-button'>Let's connect</button>
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
