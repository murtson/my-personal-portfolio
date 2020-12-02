import React from "react";
import "./Projects_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import ProjectCard from "../../componnents/project-card/Project_card";

const ProjectSection = () => {
  return (
    <div className='projects-section'>
      <SectionTitle title='my work & projects'>
        Here are the projects and earlier work I've delivered. This varies from
        proferssional work to school projects I've completed throughout my
        years. Feel free to have a look.
      </SectionTitle>
      <div className='projects-container'>
        <ProjectCard
          title='Neumorphism in Studyguide'
          subjects='Front end, Design'
          rightAlign={true}
          color='green'
        />
        <ProjectCard
          title='Visualisation of Clinical Trials'
          subjects='Front end, Design'
          rightAlign={false}
          color='purple'
        />
      </div>
    </div>
  );
};

export default ProjectSection;
