import React from "react";
import { motion } from "framer-motion";
import { CaretUpOutlined } from "@ant-design/icons";
import "./index.scss";

const ButtonScrollTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <motion.div
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="container-button-scroll-top"
    >
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        onClick={scrollToTop}
        className=""
      >
        <CaretUpOutlined />
      </motion.button>
      <motion.div
        className="line-contact"
        initial={{
          height: 0,
        }}
        animate={{
          height: "2rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </motion.div>
  );
};

export default ButtonScrollTop;
