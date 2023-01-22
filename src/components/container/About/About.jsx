import React from "react";
import "./About.scss";
import avatar from "../../../assets/myphoto.jpg";
import { bios } from "../../../Data";
import resume from "../../../assets/resume.pdf";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={avatar}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_right"
        >
          <p>
            I am computer science graduate and adept front-end developer
            focusing on JavaScript technologies. Proficient in translating
            designs & wireframes into high-quality code, and writing application
            interface code via Javascript and React.js workflows. <br />
          </p>

          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="biokey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href={resume}
            download="Resume"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
