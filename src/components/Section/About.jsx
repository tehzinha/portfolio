import React from 'react';
import './About.css'; // Arquivo de estilos
import QuemEuSou from '../../assets/videos/QuemEuSou.mp4'; // Vídeo de apresentação
import FotoPrincipal from '../../assets/imagens/eu.jpeg'; // Foto para outras seções
import Formatura from '../../assets/videos/Formatura.mp4';
import Hobbie from '../../assets/videos/Hobbie.mp4';

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        {/* Bloco 1 - Vídeo Esquerda, Texto Direita */}
        <div className="about-section left">
          <video 
            src={QuemEuSou} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="about-video"
          />
          <div className="about-text">
            <h1>Sobre Mim</h1>
            <p>
              Olá! Eu sou a Ester, nascida em 2007 e apaixonada por inovação, tecnologia e programação. Desde que entrei nesse universo, descobri um caminho que une criatividade e lógica, e hoje estou determinada a construir minha trajetória como desenvolvedora.
              <br /><br />
              Adoro desafios e aprender coisas novas, sempre buscando evoluir e transformar ideias em soluções eficientes. Além do código, uma das minhas maiores marcas é a alegria—acredito que rir torna qualquer jornada mais leve e inspiradora.
              <br /><br />
              Estou em constante crescimento e pronta para explorar as infinitas possibilidades da tecnologia 🚀
            </p>
          </div>
        </div>

        {/* Bloco 2 - Vídeo Direita, Texto Esquerda */}
        <div className="about-section right">
          <div className="about-text">
            <h1>O que eu faço?</h1>
            <p>
              Me formei em 2024 no ensino médio e no curso técnico de desenvolvimento de sistemas. Em meu TCC fiz, juntamente com meu grupo, uma plataforma que ajuda estudantes a estudarem. Utilizamos API, Banco de Dados, React, HTML, CSS, Node e Flutter. Foi uma experiência incrível que ampliou minha visão sobre desenvolvimento e trabalho em equipe.
            </p>
          </div>
          <video 
            src={Formatura} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="about-video"
          />
        </div>

        {/* Bloco 3 - Foto Esquerda, Texto Direita */}
        <div className="about-section left">
          <video 
            src={Hobbie} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="about-video"
          />
          <div className="about-text">
            <h1>Outros Interesses</h1>
            <p>
              Além da programação, gosto de ler, escrever, escutar música, aprender idiomas e tocar meu instrumento. Acredito que explorar diferentes áreas me ajuda a ter novas ideias e aplicar criatividade nos meus projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;