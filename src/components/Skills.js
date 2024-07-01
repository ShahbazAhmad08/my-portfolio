import React from 'react';
import './Skills.css'
const Skills = () => {
  return (
    <section className="skills" id='Skills-section'>
      <h2>Skills</h2>
      <ul>
      { [ "Full-stack Development","React.js","Node.js", " MongoDB","Java",
      "Python","MySQL","Oracle","DSA","C/C++",].map((item)=>{
       return <li>{item}</li>
      })}
      </ul>
    </section>
  );
};

export default Skills