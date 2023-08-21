import React, { useState } from "react";
import { Card, Button } from "antd";
import ModalGeneric from "../ModalGeneric";
import "./index.scss";

interface CardData {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface CardProjectProps {
  card: CardData;
}

const CardProject: React.FC<CardProjectProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-card">
      <Card
        className="card"
        bordered={false}
        cover={<img alt="example" src={card.image} />}
        actions={[
          <Button
            className="button-card-project"
            type="primary"
            onClick={handleShow}
            key="edit"
          >
            Detail
          </Button>,
        ]}
      >
        <div className="content-card">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      </Card>
      <ModalGeneric show={isOpen} close={handleShow} card={card} />
    </div>
  );
};

export default CardProject;
