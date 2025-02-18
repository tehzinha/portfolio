import React from 'react';
import { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.png'; // Substitua com o caminho correto da sua logo

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pdfUrl = `${window.location.origin}/portfolio/pdf/cv.pdf`;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };
  return (
    <header className="header">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className="logo">
      <a href="#" onClick={scrollToTop}>
          <img src={Logo} alt="Logo do Meu Portfólio" />
        </a>
      </div>
      
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      
      <div className="cta-button">
      <a href={pdfUrl} download>
  Baixar PDF
</a>

      </div>
    </header>
  );
}


export default Header;
