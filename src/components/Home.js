// src/components/Home.js
import React from 'react';
import img from './my-img.jpg'; 
import './Home.css';

const Home = () => {
  return (
      <section className="home" id='Home-section'>
        <div className='left-side'>
          <h2>Welcome to my Portfolio!</h2>
          <p>
            I am Shahbaz Ahmad, a Full-Stack Developer
          </p>
        </div>
        <div className='right-side'>
          <img src={img} alt='my-uimg' className='img'/>
        </div>
      </section>
  );
};

export default Home;
