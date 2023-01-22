import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { navLinks } from "../../Data";
import { socialIcons } from "../../Data";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll ? "header active" : "header"}
    >
      <div className="Nav_container">
        <a href="/#" className="logo_link">
          <div className="logo">
            <h3>A</h3>
          </div>
        </a>

        <ul className="nav_links">
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </ul>

        <div className="icon_container">
          {socialIcons.map((S_icon) => {
            return (
              <div className="social_icons" key={S_icon.id}>
                <a href={S_icon.link} target="_blank">
                  {S_icon.icon}
                </a>
              </div>
            );
          })}
        </div>

        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>

        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div
          className="menuX"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLink, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
