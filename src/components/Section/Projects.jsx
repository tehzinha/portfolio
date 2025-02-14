import React, { useState, useRef } from "react";
import "./Projects.css";
import { FaPlay } from "react-icons/fa";
import Game1 from "../../assets/videos/Game1.mp4";
import Romance from "../../assets/videos/Romance.mp4";
import Game2 from "../../assets/videos/Game2.mp4";

const projectsData = [
  {
    id: 1,
    video: Game1,
    title: "Os lendários-Adventure",
    description: "Um jogo de aventura e multiplayer, onde os heróis que uma vez já eram adorados por todos, foram esquecidos pela nova geração. Mas um novo perigo se aproxima e eles sentem que é hora de voltar! Precisam derrotar os inimigos e passar por níveis difíceis. Foi utilizado as linguagens CSS, HTML e JavaScript. Além disso, a cutscene e narração foram feitas por mim, utilizando plataformas digitais.",
    github: "https://github.com/tehzinha/jogoPrincipal",
  },
  {
    id: 2,
    video: Romance,
    title: "Jogo de história-Drama",
    description: "Típico jogo de escolhas romântico. Utilizei CSS, HTML e JavaScript.",
    github: "https://github.com/tehzinha/jogoInteracao",
  },
  {
    id: 3,
    video: Game2,
    title: "Monkey Game-Adventure",
    description: "Um jogo de aventura, níveis e coleta. Para avançar o macaco precisa coletar as bananas e passar por obstáculos. Utilizei CSS, HTML e JavaScript.",
    github: "https://github.com/tehzinha/jogoMacaco",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [playing, setPlaying] = useState({});

  const handlePlayPause = (id, event) => {
    const video = event.target;
    if (video.paused) {
      video.play();
      setPlaying((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlaying((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <h1>Meus Projetos</h1>
        <p className="projects-warning">
          🚧 Os jogos ainda estão em manutenção e por isso não são jogáveis... Por enquanto! Logo, disponibilizei uma prévia de como estão e em breve lançarei ainda mais prévias. Também está disponível o link para acessar no github. 🚀
        </p>

        <div className="projects-scroll" ref={scrollRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="video-containerr" onClick={(e) => handlePlayPause(project.id, e)}>
                {!playing[project.id] && <div className="play-icon"><FaPlay /></div>}
                <video
                  src={project.video}
                  className="project-video"
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  🔗 Ver no GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
