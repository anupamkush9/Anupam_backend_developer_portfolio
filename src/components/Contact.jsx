import React from "react";
import { FaGithubSquare, FaLinkedin, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { IoLogoYoutube } from "react-icons/io";
import { FaMedium } from "react-icons/fa";
const accent = { color: "orange" };
const Contact = () => {
  return (
    <div className="container py-5" id="contact">
      <h1 data-aos="fade-right" className="mb-4 st-font">Contact me</h1>

      <div className="row d-flex justify-content-center align-content-center" id="contact-container"
        data-aos="zoom-in" data-aos-duration="1000">
        {/* Contact Info */}
        <div className="contact-item col-10">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4 className="mb-3 st-font" style={accent}>Get in Touch</h4>
              <div className="d-flex align-items-center flex-wrap mb-3">
                <FaLocationDot className="me-2" style={accent} />
                <strong className="m-2">Location:</strong>
                Indore, Madhya Pradesh
              </div>
              <div className="d-flex align-items-center flex-wrap mb-3">
                <FaEnvelope className="me-2" style={accent} />
                <strong className="m-2">Email:</strong>
                anupamkush9@gmail.com
              </div>
              <div className="d-flex align-items-center flex-wrap mb-3">
                <FaMobileAlt className="me-2" style={accent} />
                <strong className="m-2">Mobile:</strong>
                +91 9074473026
              </div>
              <h4 className="mt-5 st-font" style={accent}>Social Links</h4>
              <ul className="list-unstyled d-flex flex-wrap align-items-center mt-3">
                <a href="https://github.com/anupamkush9" target="_blank" rel="noreferrer">
                  <li className="social-link">
                    <FaGithubSquare size={28} />
                  </li>
                </a>
                <a href="https://api.whatsapp.com/send?phone=9074473026" target="_blank" rel="noreferrer">
                  <li className="social-link">
                    <FaWhatsappSquare size={28} />
                  </li>
                </a>
                <a href="https://linkedin.com/in/anupam-kushwaha-profile" target="_blank" rel="noreferrer">
                  <li className="social-link">
                    <FaLinkedin size={28} />
                  </li>
                </a>
                <a href="https://www.youtube.com/@placementupdatesbyanupam1425/videos" target="_blank" rel="noreferrer">
                  <li className="social-link">
                    <IoLogoYoutube size={30} />
                  </li>
                </a>                
                <a href="https://anupamkush9.medium.com" target="_blank" rel="noreferrer">
                  <li className="social-link">
                    <FaMedium size={28} />
                  </li>
                </a>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h4 className="mb-3 st-font" style={accent}>Send me a message</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
