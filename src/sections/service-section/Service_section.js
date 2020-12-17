import React from "react";
import "./Service_section.css";
import SectionTitle from "../../componnents/section-title/Section_title";
import ServiceCard from "../../componnents/service-card/Service_card";

import WebIcon from "../../assets/icons/web-development-icon.svg";
import DesignIcon from "../../assets/icons/ui-ux-design-icon.svg";
import AppIcon from "../../assets/icons/app-development-icon.svg";

const ServiceSection = () => {
  return (
    <div className='Service-section'>
      <SectionTitle title='My special services' tag='services'>
        Here are some of the key services and features I currently provide. I am
        however more than happy to try something new. Feel free to challenge me.
      </SectionTitle>
      <div className='service-cards-container'>
        <ServiceCard icon={WebIcon} title='Web Development' color='yellow'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
        <ServiceCard icon={DesignIcon} title='Design UI/UX' color='blue'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
        <ServiceCard icon={AppIcon} title='App Development' color='dark'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServiceSection;
