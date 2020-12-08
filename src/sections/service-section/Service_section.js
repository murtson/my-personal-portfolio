import React from "react";
import "./Service_section.css";
import SectionTitle from "../../componnents/section-title/Section_title";
import ServiceCard from "../../componnents/service-card/Service_card";

import WebIcon from "../../assets/icons/web-development.svg";
import DesignIcon from "../../assets/icons/design-icon.svg";
import AppIcon from "../../assets/icons/mobile-app.svg";

const ServiceSection = () => {
  return (
    <div className='Service-section'>
      <SectionTitle title='my services'>
        Here are some of the key services and features I currently provide. I am
        however more than happy to try something new. Feel free to challenge me.
      </SectionTitle>
      <div className='service-cards-container'>
        <ServiceCard icon={WebIcon} title='Web Development'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
        <ServiceCard icon={DesignIcon} title='Design UI/UX'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
        <ServiceCard icon={AppIcon} title='App Development'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus
          quis neque et aliquam.
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServiceSection;
