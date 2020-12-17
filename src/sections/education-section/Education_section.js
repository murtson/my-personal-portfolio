import React from "react";
import "./Education_section.css";
import SectionTitle from "../../componnents/section-title/Section_title";
import EducationCard from "../../componnents/education-card/Education_card";

import HighschoolIcon from "../../assets/icons/high-school-exam-icon.svg";
import BachelorDegreeIcon from "../../assets/icons/bachelor-degree-icon.svg";
import MasterDegreeIcon from "../../assets/icons/master-degree-icon.svg";

const EducationSection = (props) => {
  return (
    <div className='education-section'>
      <SectionTitle
        title='A five year long journey'
        tag='Education'
        rightAlign={true}
      >
        I have a Bachelor's degree in Interactive Media Technology from KTH. I
        am currently pursuing my Master's Degree and expect to finish the spring
        2021. Besides this, I have also taken multiple online Courses in Web
        Development. All can be found in my CV.
      </SectionTitle>
      <div className='education-cards-container'>
        <EducationCard
          exam='Naturvetenskapsprogrammet inriktning naturvetenskap'
          school='Norra Real Gymnasium'
          timeSpan='2012-2015'
          icon={HighschoolIcon}
        ></EducationCard>
        <EducationCard
          exam="Bachelor's Degree in Interactive Media Technology"
          school='Royal Institute of Technology (KTH)'
          timeSpan='2016-2019'
          icon={BachelorDegreeIcon}
          arrowDown={true}
        ></EducationCard>
        <EducationCard
          exam="Master's Degree in Interactive Media Technology"
          school='Royal Institute of Technology (KTH)'
          timeSpan='2019-2021'
          icon={MasterDegreeIcon}
        ></EducationCard>
        <button className='download-cv-button'>Download my CV</button>
      </div>
    </div>
  );
};

export default EducationSection;
