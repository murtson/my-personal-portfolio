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
        <CompetenceCard color='green' title='Javascript'>
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard color='blue' title='HTML/CSS'>
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard color='pink' title='Python'>
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
        <CompetenceCard color='orange' title='Java'>
          Worked on varies different projects involving Javascript. Proficient
          with popular frameworks such as React JS and Meteor JS
        </CompetenceCard>
      </div>
    </div>
  );
};

export default Competence_section;
