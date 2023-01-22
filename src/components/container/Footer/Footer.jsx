import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="footer"
      >
        <div className="copyRight">
          <p>
            Copyright&copy;2023 All rights reserved.Made by
            <span> Alief Mukhlis</span>
          </p>
        </div>
        <div className="followMe">
          <h4>Follow Me</h4>
          <div className="stick"></div>
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
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
