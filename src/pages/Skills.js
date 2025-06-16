import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills" id="Skills-section">
      <h2>Skills</h2>
      <ul>
        {[
          "Full-stack Development",
          "React.js",
          "Node.js",
          " MongoDB",
          "Java",
          "Python",
          "MySQL",
          "Oracle",
          "DSA",
          "C/C++",
        ].map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </section>
  );
};

export default Skills;
