import React from "react";
import "./Projects_section.css";

import SectionTitle from "../../componnents/section-title/Section_title";
import ProjectCard from "../../componnents/project-card/Project_card";

const listTagsOne = [
  { name: "Meteor JS", length: 1 },
  { name: "Mongo DB", length: 1 },
  { name: "Node JS", length: 1 },
  { name: "gsap", length: 1 },
  { name: "Neumorphism", length: 2 },
  { name: "Javascript", length: 2 },
  { name: "PWA", length: 1 },
];

const listTagsTwo = [
  { name: "D3 JS", length: 1 },
  { name: "CSS animations", length: 2 },
  { name: "Clinical Trial API", length: 2 },
  { name: "Javascript", length: 1 },
];

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
          tags={listTagsOne}
        />
        <ProjectCard
          title='Visualisation of Clinical Trials'
          subjects='Front end, Design'
          rightAlign={false}
          color='purple'
          tags={listTagsTwo}
        />
      </div>
    </div>
  );
};

export default ProjectSection;
