import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção de Redes Sociais */}
        <div className="social-links">
          <a href="https://github.com/tehzinha" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ester-vitoria-ramalho-sampaio-a3b15b220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href="mailto:esterramalhosampaiO@gmail.">
            <FaEnvelope className="icon" /> Contato
          </a>
        </div>

        {/* Links de Navegação */}
        <ul className="footer-nav">
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        {/* Direitos Autorais */}
        <p className="copyright">© 2025 Ester. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
