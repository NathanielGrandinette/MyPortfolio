import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import events from "./events";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiTag } from "react-icons/fi";

const ProjectDetails = ({ tone }) => {
  const { name } = useParams();
  const project = events.find((event) => event.name === name);

  return (
    <div className="project-details-page">
      <h2 className="project-title">{project.name}</h2>
      <div className="date-type">
        <div className="date">
          <AiOutlineClockCircle />
          <span>{project.date}</span>
        </div>
        <div className="type">
          <FiTag />
          <span>{project.type}</span>
        </div>
      </div>
      <div className="img-container">
        {project.images.map((image) => {
          return (
            <img src={`/images/${project.name}/${image}`} />
          )
        })}
        {/* <img src={`/images/${project.name}/${project.images[0]}`} />
        <img src={`/images/${project.name}/${project.images[1]}`} />
        <img src={`/images/${project.name}/${project.images[2]}`} /> */}
      </div>
      <div>
        <div className="info">
          <div className="about">
            <div className="about-client">
              <h4>About Project</h4>
              <div>
                <p>Name: {project.name}</p>
                <p>Services: {project.services}</p>
                {project.live ? 
                <div>
                  Website:  
                  <Link to={project.live}> {project.name}</Link>
                </div> : ""}
                <div>
                  Github: 
                  <Link to={project.github}> {project.github}</Link>
                </div>
              </div>
            </div>
            <div className="objective">
              <h4>Objective</h4>
              <p>{project.objective}</p>
            </div>
            <div className="tools">
              <h4>Tools & Technologies</h4>
              <p>{project.skillsUsed.join(", ")}</p>
            </div>
          </div>
          <div className="challenge-section">
            <h4 className="challenge-header">Challenge</h4>
            <p className="challenge-paragraph">{project.challenge}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
