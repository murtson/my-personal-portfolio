import React from "react";
import "./Home_page.css";
import LandingSection from "../../sections/landing-section/Landing_section";
import CompetenceSection from "../../sections/competence-section/Competence_section";

const HomePage = (props) => {
  return (
    <div className='HomePage'>
      <LandingSection />
      <CompetenceSection />
    </div>
  );
};

export default HomePage;
