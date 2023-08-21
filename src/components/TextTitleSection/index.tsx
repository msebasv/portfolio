import React from "react";
import LabelIcon from "/public/img/labelIcon.png";
import "./index.scss";

interface TextTitleSectionProps {
  title: string;
  backTitle: string;
}

const TextTitleSection: React.FC<TextTitleSectionProps> = (props) => {
  const { title, backTitle } = props;
  return (
    <h2 className="container-text-title">
      <div className="container-title">
        <img src={LabelIcon} alt="" className="image-label" />
        {title}
      </div>
      <span>{backTitle}</span>
    </h2>
  );
};

export default TextTitleSection;
