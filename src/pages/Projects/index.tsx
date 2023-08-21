import React from "react";
import CarouselProjects from "../../components/CarouselProjects";
import TextTitleSection from "../../components/TextTitleSection";
import "./index.scss";

const Projects: React.FC = () => {
  return (
    <div
      className="container-projects"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <TextTitleSection title="Projects" backTitle="Proyectos" />
      <CarouselProjects />
    </div>
  );
};

export default Projects;
