 import React from 'react'
 import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container' id='Projects-section'>
    <div> <h2>Projects</h2>
    <div className="project" >
        <h3>To-Do App</h3>
        <p>A simple to-do list application built using React.js </p>
    </div>
    <div className="project">
        <h3>Weather App</h3>
        <p>A weather application built using React.js and OpenWeatherMap API.</p>
        
    </div>
    <div className="project">
        <h3>Tic-Tac-Toe Game</h3>
        <p>A classic tic-tac-toe game implemented using React.js .</p>
       
    </div>
</div>

</div>
  )
}

export default Projects