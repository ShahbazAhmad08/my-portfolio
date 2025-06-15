import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container" id="Projects-section">
      <h2>Projects</h2>

      <div className="project">
        <div className="project-info">
          <h3>User Authentication App</h3>
          <p>
            A full-stack authentication system built using Node.js, Express,
            MongoDB, and React. This app supports user signup, login, and
            authentication with secure JWT handling and database storage.
          </p>
          <p>
            Explore the live preview
            <a
              href="https://mern-app-ui-eight.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="project-image">
          <img src="auth-image.png" alt="User Authentication App" />
        </div>
      </div>

      <div className="project">
        <div className="project-info">
          <h3>Food Delivery Website</h3>
          <p>
            An interactive food ordering platform built with React. Users can
            browse menus, place orders, and experience a seamless food delivery
            process with a modern UI.
          </p>
          <p>
            Explore the live preview{" "}
            <a
              href="https://maueatz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="project-image">
          <img src="food-delivery-image.png" alt="Food Delivery Website" />
        </div>
      </div>

      <div className="project">
        <div className="project-info">
          <h3>Wonder Lust</h3>
          <p>
            A feature-rich Airbnb clone built using Node.js, Express, MongoDB,
            and EJS templates. The project will include user authentication,
            property listings, booking functionality, and an intuitive UI.
          </p>
          <p>Stay tuned for updates!</p>
        </div>
        <div className="project-image">
          <img src="wonder-lust-image.png" alt="Wonderlust Airbnb Clone" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
