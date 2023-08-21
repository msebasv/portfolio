import React from "react";
import Typewriter from "typewriter-effect";
import "./index.scss";

const Text: React.FC = () => {
  return (
    <div className="container-text">
      <h3>
        Hi, I'm
        <br />
        Sebastian Martinez
      </h3>
      <h2 className="typewriter-container">
        <Typewriter
          options={{
            strings: ["Web developer"],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
          }}
        />
      </h2>
    </div>
  );
};

export default Text;
