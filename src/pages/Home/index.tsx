import React from "react";
import { Col, Row } from "antd";
import Text from "../../components/Text";
import "./index.scss";

const Home: React.FC = () => {
  return (
    <div className="container-home" data-aos="fade-up" data-aos-duration="2000">
      <Row className="row" justify="center" align="middle">
        <Col span={24} lg={12}>
          <Text />
        </Col>
        <Col span={24} lg={12}>
          <div className="container-brand-home">
            <div className="home-img" />
            <span className="shadow-brand" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
