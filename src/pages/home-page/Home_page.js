import React, { Fragment } from "react";
import "./Home_page.css";
import LandingSection from "../../sections/landing-section/Landing_section";
import CompetenceSection from "../../sections/competence-section/Competence_section";
import ServiceSection from "../../sections/service-section/Service_section";
import ProjectsSection from "../../sections/projects-section/Projects_section";
import EducationSection from "../../sections/education-section/Education_section";
import Footer from "../../componnents/footer/Footer";

const HomePage = (props) => {
  return (
    <div className='HomePage'>
      <LandingSection />
      <CompetenceSection />
      <EducationSection />
      <ServiceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
