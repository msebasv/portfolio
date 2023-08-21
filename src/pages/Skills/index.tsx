import React from "react";
import { Row, Col } from "antd";
import { logoSkills } from "../../data/data";
import CardSkills from "../../components/CardSkills";
import TextTitleSection from "../../components/TextTitleSection";
import "./index.scss";

const Skills: React.FC = () => {
  return (
    <div
      className="container-skills"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <TextTitleSection title="Skills" backTitle="Habilidades" />
      <div className="container-cardskills">
        <Row>
          {logoSkills.map((skill) => (
            <Col span={12} lg={4} key={skill.id}>
              <CardSkills skill={skill} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
