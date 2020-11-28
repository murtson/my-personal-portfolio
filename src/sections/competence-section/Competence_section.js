import React from "react";
import "./Competence_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import CompetenceCard from "../../componnents/competence-card/Competence_card";

const Competence_section = () => {
  return (
    <div className='Competence_section'>
      <SectionTitle title='competence & education'>
        Here are some highlights on my areas of expertise, as well as my
        education. A more detailed representation can be found in my CV, which
        can be downloaded down below.
      </SectionTitle>
      <div className='competence_card__container'>
        <CompetenceCard></CompetenceCard>
        <CompetenceCard></CompetenceCard>
        <CompetenceCard></CompetenceCard>
        <CompetenceCard></CompetenceCard>
      </div>
    </div>
  );
};

export default Competence_section;
