import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import LogoWeb from "/assets/logo.png";
import "./index.scss";

// SPECIFY TYPE OF DATA
interface Option {
  id: number;
  title: string;
}

// IMPLEMENTS OTHER INTERFACES TO PROPS
interface NavbarProps {
  options: Option[];
}

const Navbar: React.FC<NavbarProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-navbar">
      <div className="container-brand">
        <motion.img
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
          dragElastic={0.2}
          className="brand"
          src={LogoWeb}
          alt="Image da Home"
        />
      </div>

      <nav
        className={isOpen ? "nav-container nav-menu-visible" : "nav-container"}
      >
        <ul>
          {options.map((option) => (
            <li key={option.id}>
              <Link
                activeClass="active"
                to={option.title.toLowerCase()}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={handleMenuToggle}
                delay={200}
              >
                {option.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="icon-menu-hamburger" onClick={handleMenuToggle}>
        <span className={isOpen ? "line-1 spin1" : "line-1"}></span>
        <span className={isOpen ? "line-2 spin2" : "line-2"}></span>
        <span className={isOpen ? "line-3 spin3" : "line-3"}></span>
      </div>
    </div>
  );
};

export default Navbar;
