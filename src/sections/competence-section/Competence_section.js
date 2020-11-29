import React from "react";
import "./Competence_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import CompetenceCard from "../../componnents/competence-card/Competence_card";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import pythonIcon from "../../assets/icons/python.svg";
import javaIcon from "../../assets/icons/java.svg";
import HtmlCssIcon from "../../assets/icons/htmlCss.svg";
import GraduationImage from "../../assets/images/Graduation.svg";

const Competence_section = () => {
  return (
    <div className='Competence_section'>
      <SectionTitle title='competence & education'>
        Here are some highlights on my areas of expertise, as well as my
        education. A more detailed representation can be found in my CV, which
        can be downloaded down below.
      </SectionTitle>
      <div className='competence_card__container'>
        <CompetenceCard
          color='green'
          title='Javascript'
          icon={JavascriptIcon}
          time='3 years'
          percent='80'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard
          color='blue'
          title='HTML/CSS'
          icon={HtmlCssIcon}
          time='3 years'
          percent='90'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard
          color='pink'
          title='Python'
          icon={pythonIcon}
          time='1 year'
          percent='50'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard
          color='orange'
          title='Java'
          icon={javaIcon}
          time='Upcoming'
          percent='0'
        >
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
      </div>
      <div className='education-section--container'>
        <div className='text-container'>
          <h4>Education</h4>
          <p>
            I have a Bachelor's degree in Interactive Media Technology from KTH.
            I am currently pursuing my Master's Degree and expect to finish the
            spring 2021. Besides this, I have also taken multiple online Courses
            in Web Development. All can be found in my CV.
          </p>
          <div className='button-wrapper'>
            <button className='CV-button'>Download CV</button>
            <div className='CV-button-background'></div>
          </div>
        </div>
        <div className='image-container'>
          <img src={GraduationImage} alt='Graduation image'></img>
        </div>
      </div>
    </div>
  );
};

export default Competence_section;
