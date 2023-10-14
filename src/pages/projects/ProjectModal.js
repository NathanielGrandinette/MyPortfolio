import React from "react";
import Modal from "@mui/material/Modal";

const ProjectModal = () => {
  return (
    <Modal
      style={{ marginTop: "500px", margin: "0 auto", width: "90%", height: "600px", color: "white", border: "2px solid black", backgroundColor: "red" }}
      open={false}
    >
      <div>
        <h2>My Title</h2>
        <div>
            map images
        </div>
        <div>
            <div>
                <h3>About Client</h3>
                <div>name: name</div>
                <div>services: Fullstack, etc.</div>
                <div>Website: site link</div>
            </div>
            <div>
                <h3>Objective</h3>
                <div>Provide objective paragraph</div>
            </div>
            <div>
                <h3>Tools & Technologies</h3>
                <div>Map through technologies used</div>
            </div>
            <div>
                <h3>Challenge</h3>
                <div>Describe in detail some of the challenges faced with this project</div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
