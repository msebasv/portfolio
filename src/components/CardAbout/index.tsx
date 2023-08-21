import React from "react";
import { Card, Row, Col, Button } from "antd";
import { motion } from "framer-motion";
import { textAbout } from "../../data/data";
import People from "../../assets/img/people.png";
import People1 from "../../assets/img/people1.jpeg";
import TextTitleSection from "../TextTitleSection";
import "./index.scss";

const CardAbout: React.FC = () => {
  return (
    <Card className="card-about">
      <Row>
        <Col span={24} lg={12}>
          {/* <h1>About Me</h1> */}
          <TextTitleSection title="About Me" backTitle="Sobre Mi" />
          {textAbout.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="/public/files/CV Sebastian Martinez Velandia.pdf"
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