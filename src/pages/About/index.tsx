import React from "react";
import CardAbout from "../../components/CardAbout";
import TextTitleSection from "../../components/TextTitleSection";

import "./index.scss";

const About: React.FC = () => {
  return (
    <div
      className="container-about"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <CardAbout />
    </div>
  );
};

export default About;
