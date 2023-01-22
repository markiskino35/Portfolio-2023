import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi!</h3>
          <p className="contact_text">
            If you have any questions or would like to know more about a certain
            piece, feel free to contact me. I am very approachable!
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
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
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="row">
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="Message"></textarea>
          </div>
          <motion.div
            className="btn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
