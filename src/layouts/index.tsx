import React from "react";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import ButtonScrollTop from "../components/ButtonScrollTop";
import { menuOptions } from "../data/data";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.scss";

const Layout: React.FC = () => {
  AOS.init();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header>
        <Navbar options={menuOptions} />
      </header>
      <main>
        <SocialMedia />
        <ButtonScrollTop />
        <section id="home" className="section-home">
          <Home />
        </section>
        <section id="about" className="section-about">
          <About />
        </section>
        <section id="skills" className="section-skills">
          <Skills />
        </section>
        <section id="projects" className="section-project">
          <Projects />
        </section>
      </main>
      <footer>Made with ❤️ by Sebastian Martinez.</footer>
    </motion.div>
  );
};

export default Layout;
