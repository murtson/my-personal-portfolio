import React from "react";
import "./Home_page.css";
import LandingSection from "../../sections/landing-section/Landing_section";
import CompetenceSection from "../../sections/competence-section/Competence_section";
import ServiceSection from "../../sections/service-section/Service_section";

const HomePage = (props) => {
  return (
    <div className='HomePage'>
      <LandingSection />
      <CompetenceSection />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
