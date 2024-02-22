import React, { useEffect } from "react";
import AOS from "aos";
import events from "./events";
import "aos/dist/aos.css";
import "./projects.css";
import { useNavigate, Link } from "react-router-dom";

const Projects = ({ tone }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const style = {
    border: tone === "light" ? "2px solid black" : "2px solid white",
    boxShadow: tone === "light" ? "4px 4px 0 0 black" : "4px 4px 0 0 white",
  };

  return (
    <div className="timeline">
      {window.location.pathname === "/projects" ? (
        <h1 style={{ marginTop: 50 }}>
          MY <span className="about-me-header-name">PROJECTS</span>
        </h1>
      ) : (
        <h1></h1>
      )}
      {events.map((event, index) => (
        <div
          key={index}
          className="timeline-event"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="timeline-events">
            <div className="timeline-event-content">
              <div className="timeline-event-image">
                <Link to={`/projects/${event.name}`}>
                  <img
                    src={`/images/${event.name}/${event.images[0]}`}
                    alt={event.name}
                    className="port-img"
                  />
                </Link>
              </div>
              <div className="project-details">
                <h2 style={style}>{event.name}</h2>
                <div className="timeline-event-date">{event.date}</div>
                <p
                  className="project-description"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {event.description}
                </p>
                <div className="project-skills">
                  {event.skillsUsed.map((skill, index) => (
                    <div
                      key={index}
                      className="skill"
                      style={{ margin: "10px" }}
                    >
                      {skill}{" "}
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  {event.github ? (
                    <a href={event.github} target="_blank">
                      Github
                    </a>
                  ) : (
                    ""
                  )}
                  {event.live ? (
                    <a href={event.live} target="_blank">
                      Live
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
