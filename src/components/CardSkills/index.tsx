import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import "./index.scss";

interface CardData {
  id: number;
  title: string;
  image: string;
}

interface CardProjectProps {
  skill: CardData;
}

const CardSkills: React.FC<CardProjectProps> = ({ skill }) => {
  return (
    <Card className="container-skill-image">
      <div className="container-img">
        <motion.img
          className="skill-image"
          src={skill.image}
          alt=""
          whileHover={{ y: -10 }}
        />
      </div>
      <div className="container-title">
        <h3>{skill.title}</h3>
      </div>
    </Card>
  );
};

export default CardSkills;
