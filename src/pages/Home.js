// src/components/Home.js
import "./Home.css";
import img from "../assets/my-img.jpg";

const Home = () => {
  return (
    <section className="home" id="Home-section">
      <div className="left-side">
        <h2>Welcome to my Portfolio!</h2>
        <p>
          I'm Shahbaz Ahmad, and I specialize in Full-Stack Development. I build
          websites and applications using both front-end and back-end
          technologies. I focus on making user-friendly designs and reliable
          backend systems. Check out my portfolio to see what I've created!
        </p>
      </div>
      <div className="right-side">
        <img src={img} alt="my-img" className="img" />
      </div>
      {/* <ParticleBackground/> */}
    </section>
  );
};

export default Home;
