import React from "react";
import "../assets/css/style.css"; // Main styles
import heroBg from "../assets/img/hero-bg.jpg";

const Home: React.FC = () => {
  return (
    <main className="main">
    <section id="hero" className="hero section dark-background">
    <img src={heroBg} alt="Background" data-aos="fade-in" />

      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2>Haripriya K H</h2>
        <p>
          I'm <span className="typed" data-typed-items="Software Developer, AI Enthusiast, Freelancer">Software Developer</span>
          <span className="typed-cursor typed-cursor--blink"></span>
        </p>
        <div className="social-links">
          <a href="https://linkedin.com/in/haripriyakh"><i className="bi bi-linkedin"></i></a>
          <a href="mailto:haripriyakh2021@gmail.com"><i className="bi bi-envelope"></i></a>
          <a href="/resume"><i className="bi bi-file-earmark-person"></i></a>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Home;
