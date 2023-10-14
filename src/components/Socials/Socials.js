import React from "react";
import './socials.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const Socials = ({ tone }) => {
  return (
    <div
      style={{ marginTop: "50px", height: "150" }}
      className="follow-me"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="seperator-div">
        <span
          className="next-steps-span"
          style={{ backgroundColor: tone === "light" ? "black" : "white" }}
        ></span>
        <h2 className="next-steps-h2">Follow Me</h2>
        <span
          className="next-steps-span"
          style={{ backgroundColor: tone === "light" ? "black" : "white" }}
        ></span>
      </div>
      <div className="home-social-links">
        <a
          href="https://github.com/NathanielGrandinette"
          className="homepage-social-link"
          target="_blank"
          aria-label="GitHub"
          data-testid="github"
          style={{
            backgroundColor: tone === "light" ? "white" : "#1E3851",
            color: tone === "dark" ? "#9CA3AF" : "black",
          }}
        >
          <i className="fab fa-github">
            <FaGithub size={30} />
          </i>
        </a>
        <a
          href="https://linkedin.com/in/nathaniel-grandinette"
          className="homepage-social-link"
          target="_blank"
          aria-label="LinkedIn"
          data-testid="linkedin"
          style={{
            backgroundColor: tone === "light" ? "white" : "#1E3851",
            color: tone === "dark" ? "#9CA3AF" : "",
          }}
        >
          <i className="fab fa-linkedin">
            <FaLinkedin size={30} />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
