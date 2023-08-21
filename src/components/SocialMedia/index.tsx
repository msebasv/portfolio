import React from "react";
import { motion } from "framer-motion";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import "./index.scss";

const SocialMedia: React.FC = () => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="container-social"
    >
      <div className="container-icons">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
        >
          <a href="https://github.com/msebasv" target="blank">
            <Github className="github" />
          </a>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
          <a href="https://www.linkedin.com/in/msebasv/" target="blank">
            <Linkedin className="linkedin" />
          </a>
        </motion.div>
      </div>
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

export default SocialMedia;

// const SocialMedia: React.FC = () => {
//   return (
//     <motion.div
//       transition={{ duration: 1 }}
//       exit={{ opacity: 0 }}
//       className="container-social"
//     >
//       <div className="container-icons">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: [0, 1, 1.5, 1] }}
//           transition={{ type: "spring", duration: 1, delay: 1 }}
//         >
//           <a href="https://github.com/msebasv" target="blank">
//             <LinkedinOutlined className="github" />
//           </a>
//         </motion.div>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: [0, 1, 1.5, 1] }}
//           transition={{ type: "spring", duration: 1, delay: 1.4 }}
//         >
//           <a href="https://www.linkedin.com/in/msebasv/" target="blank">
//             <GithubOutlined className="linkedin" />
//           </a>
//         </motion.div>
//       </div>
//       <motion.div
//         className="line-contact"
//         initial={{
//           height: 0,
//         }}
//         animate={{
//           height: "3rem",
//         }}
//         transition={{
//           type: "spring",
//           duration: 1,
//           delay: 0.8,
//         }}
//       />
//     </motion.div>
//   );
// };

// export default SocialMedia;
