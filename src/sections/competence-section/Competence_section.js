import React from "react";
import "./Competence_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import CompetenceCard from "../../componnents/competence-card/Competence_card";
import javascripticon from "../../assets/icons/icons8-javascript.svg";
import pythonicon from "../../assets/icons/icons8-python.svg";
import javaicon from "../../assets/icons/icons8-java.svg";
import htmlicon from "../../assets/icons/icons8-html-5.svg";
import GraduationImage from "../../assets/images/Graduation.svg";

import DefaultButton from "../../componnents/buttons/default-button/Default_button";

const Competence_section = () => {
  return (
    <div className='competence-section'>
      <SectionTitle title='competence & education'>
        Here are some highlights of my areas of expertise, as well as my
        education. A more detailed representation can be found in my CV.
      </SectionTitle>
      <div className='competence-cards-container'>
        <CompetenceCard
          color='green'
          title='Javascript'
          icon={javascripticon}
          time='3 years'
          percent='80'
        >
          Worked on varies different projects involving Javascript. Efficient
          with modern techniques and frameworks such as React and Meteor
        </CompetenceCard>
        <CompetenceCard
          color='blue'
          title='HTML/CSS'
          icon={htmlicon}
          time='3 years'
          percent='90'
        >
          Worked on varies different projects involving Javascript. Efficient
          with modern techniques and frameworks such as React and Meteor
        </CompetenceCard>
        <CompetenceCard
          color='pink'
          title='Python'
          icon={pythonicon}
          time='1 year'
          percent='50'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard
          color='orange'
          title='Java'
          icon={javaicon}
          time='Upcoming'
          percent='0'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
      </div>
      <div className='education-section'>
        <div className='education-section__text-container'>
          <h4>Education</h4>
          <p>
            I have a Bachelor's degree in Interactive Media Technology from KTH.
            I am currently pursuing my Master's Degree and expect to finish the
            spring 2021. Besides this, I have also taken multiple online Courses
            in Web Development. All can be found in my CV.
          </p>
          {/* <div className='education-button-wrapper'>
            <button className='CV-button'>Download CV</button>
            <div className='CV-button-background'></div>
          </div> */}
          <DefaultButton secondaryColor={true} size='medium'>
            DOWNLOAD CV
          </DefaultButton>
        </div>
        <div className='image-container'>
          <img src={GraduationImage} alt='Graduation image'></img>
        </div>
      </div>
    </div>
  );
};

export default Competence_section;
