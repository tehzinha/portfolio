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
            Olá! Meu nome é Ester, nascida em 2007, e sou apaixonada por inovação, tecnologia e desenvolvimento de software. Desde que entrei nesse universo, descobri uma conexão única entre criatividade e lógica, e sigo determinada a construir minha trajetória como desenvolvedora.
              <br /><br />
              Gosto de desafios e estou sempre em busca de aprendizado, aprimorando minhas habilidades para transformar ideias em soluções eficientes. Além da tecnologia, acredito que um ambiente positivo e colaborativo torna qualquer jornada mais produtiva e inspiradora.
              <br /><br />
              Estou em constante evolução e pronta para explorar novas possibilidades no mundo da tecnologia. 🚀
            </p>
          </div>
        </div>

        {/* Bloco 2 - Vídeo Direita, Texto Esquerda */}
        <div className="about-section right">
          <div className="about-text">
            <h1>O que eu faço?</h1>
            <p>
            Concluí o ensino médio e o curso técnico em Desenvolvimento de Sistemas em 2024. No meu Trabalho de Conclusão de Curso (TCC), desenvolvi, junto com meu grupo, uma plataforma voltada para auxiliar estudantes na preparação para o Enem e outros vestibulares. O projeto incluiu videoaulas, conteúdos filtrados, listas de exercícios com gabarito e um chatbot automatizado para responder dúvidas gerais. Utilizamos tecnologias como API, Banco de Dados, React, HTML, CSS, Node e Flutter. Essa experiência ampliou minha visão sobre desenvolvimento de software e reforçou minha capacidade de trabalho em equipe.
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
            Além da programação, tenho interesse em leitura e escrita, e atualmente estou trabalhando em um livro de romance e crítica, com planos de publicação. Também sou apaixonada por música e estudo órgão desde os cinco anos, o que considero uma prática terapêutica. Além disso, gosto de patinar e aprender novos idiomas—durante a pandemia, estudei mandarim. Tenho conhecimento em Libras, pois meu pai é deficiente auditivo. Acredito que explorar diferentes áreas amplia minha criatividade e enriquece meus projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;