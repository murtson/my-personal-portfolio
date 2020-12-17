import React from "react";
import "./Competence_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import CompetenceCard from "../../componnents/competence-card/Competence_card";
import javascripticon from "../../assets/icons/icons8-javascript.svg";
import pythonicon from "../../assets/icons/icons8-python.svg";
import javaicon from "../../assets/icons/icons8-java.svg";
import htmlicon from "../../assets/icons/icons8-html-css.svg";
import FirebaseIcon from "../../assets/icons/firebase-icon.svg";
import ReactIcon from "../../assets/icons/react-icon.svg";
import ReactNativeIcon from "../../assets/icons/react-native-icon.svg";
import MeteorIcon from "../../assets/icons/meteor-icon.svg";
import AdobeXDIcon from "../../assets/icons/adobe-xd-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";

import BgCircles from "../../assets/images/bg-circles-01.svg";

import CodingLanguageUnderline from "../../assets/icons/coding-language-underline.svg";
import LibrariesUnderline from "../../assets/icons/libraries-underline.svg";
import ToolsUnderline from "../../assets/icons/tools-underline.svg";

const CompetenceSubTitle = (props) => {
  return (
    <div className='competence-subtitle'>
      <h4>{props.children}</h4>
      {/*    <img className='subtitle-underline' src={props.underline}></img> */}
    </div>
  );
};

const Competence_section = () => {
  return (
    <div className='competence-section'>
      <SectionTitle title='My competence and expertise' tag='competence'>
        Here are some highlights of my areas of expertise, as well as my
        education. A more detailed representation can be found in my CV.
      </SectionTitle>
      <img src={BgCircles} className='background-circles'></img>
      <CompetenceSubTitle underline={CodingLanguageUnderline}>
        Coding languages
      </CompetenceSubTitle>
      <div className='competence-cards-container'>
        <CompetenceCard
          title='Javascript'
          icon={javascripticon}
          time='3 years'
          percent='80'
          color='red'
        ></CompetenceCard>
        <CompetenceCard
          title='HTML/CSS'
          icon={htmlicon}
          time='3 years'
          percent='90'
          color='red'
        ></CompetenceCard>
        <CompetenceCard
          title='Python'
          icon={pythonicon}
          time='1 year'
          percent='50'
          color='red'
        ></CompetenceCard>
        {/*    <CompetenceCard
          color='orange'
          title='Java'
          icon={javaicon}
          time='Upcoming'
          percent='0'
        ></CompetenceCard> */}
      </div>
      <CompetenceSubTitle underline={LibrariesUnderline}>
        Libraries
      </CompetenceSubTitle>
      <div className='competence-cards-container'>
        <CompetenceCard
          title='React JS'
          icon={ReactIcon}
          time='3 years'
          percent='70'
          color='blue'
        ></CompetenceCard>
        <CompetenceCard
          title='React Native'
          icon={ReactNativeIcon}
          time='3 years'
          percent='60'
          color='blue'
        ></CompetenceCard>
        <CompetenceCard
          title='Firebase'
          icon={FirebaseIcon}
          time='1 year'
          percent='70'
          color='blue'
        ></CompetenceCard>
        <CompetenceCard
          title='Meteor JS'
          icon={MeteorIcon}
          time='Upcoming'
          percent='80'
          color='blue'
        ></CompetenceCard>
      </div>
      <CompetenceSubTitle underline={ToolsUnderline}>Tools</CompetenceSubTitle>
      <div className='competence-cards-container'>
        <CompetenceCard
          title='Adobe XD'
          icon={AdobeXDIcon}
          time='1 year'
          percent='60'
          color='yellow'
        ></CompetenceCard>
        <CompetenceCard
          title='Github'
          icon={GithubIcon}
          time='3 years'
          percent='80'
          color='yellow'
        ></CompetenceCard>
      </div>
    </div>
  );
};

export default Competence_section;
