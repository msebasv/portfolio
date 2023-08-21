import React from "react";
import { Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import { textAbout } from "../../data/data";
import People1 from "/assets/people1.jpeg";
import TextTitleSection from "../TextTitleSection";
import "./index.scss";

const CardAbout: React.FC = () => {
  return (
    <Card className="card-about">
      <Row>
        <Col span={24} lg={12}>
          <TextTitleSection title="About Me" backTitle="Sobre Mi" />
          {textAbout.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="/files/CV Sebastian Martinez Velandia.pdf"
            className="button-about-cv"
            download
          >
            CV RESUME
          </motion.a>
        </Col>
        <Col span={24} lg={12}>
          <div className="container-img-about">
            <div className="circle-container">
              <img alt="" src={People1} />
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default CardAbout;
