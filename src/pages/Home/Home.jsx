import React from 'react';
import BemVindo from '../../assets/videos/bemVindo.mp4';
import './Home.css'; 
import About from '../../components/Section/About';
import Projects from '../../components/Section/Projects';
import Contact from '../../components/Section/Contact';

function Home() {
  return (
    <div className="home-container">
      {/* Vídeo de Boas-vindas */}
      <div className="video-container">
        <video
          src={BemVindo}
          autoPlay
          loop
          muted
          playsInline
          className="welcome-video"
        />
      </div>

      {/* Seções */}
      <section id="about" className="section">
        <About/>
      </section>
     
      <section id="projects" className="section">
        <Projects/>
      </section>

      <section id="contact" className="section">
        <Contact/>
      </section>
    </div>
  );
}

export default Home;
