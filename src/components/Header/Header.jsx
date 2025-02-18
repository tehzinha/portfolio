import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.png'; // Substitua com o caminho correto da sua logo

function Header() {
  const pdfUrl = `${window.location.origin}/portfolio/pdf/cv.pdf`;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };
  return (
    <header className="header">
      <div className="logo">
      <a href="#" onClick={scrollToTop}>
          <img src={Logo} alt="Logo do Meu Portfólio" />
        </a>
      </div>
      
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about" className="nav-item">Sobre</a></li>
          <li><a href="#projects" className="nav-item">Projetos</a></li>
          <li><a href="#contact" className="nav-item">Contato</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      
      <div className="cta-button">
      <a href={pdfUrl} download>
  Baixar PDF
</a>

      </div>
    </header>
  );
}


export default Header;
