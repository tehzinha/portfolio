import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuração do EmailJS
    const serviceID = "service_iz57ruj"; 
    const templateID = "template_ttar3pe"; 
    const publicKey = "WbC_taFZ5YfBWlTzg";

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.mensagem
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Obrigado por entrar em contato! Sua mensagem foi enviada. 😀');
        setFormData({ nome: '', email: '', mensagem: '' });
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Entre em Contato</h1>
        <p>Quer conversar ou colaborar comigo? Sinta-se à vontade para me enviar uma mensagem! ✉️</p>

        {/* Links para redes sociais */}
        <div className="social-links">
          <a href="https://www.instagram.com/tek4_rs/" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/ester-vitoria-ramalho-sampaio-a3b15b220/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/tehzinha" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Formulário de contato */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Sua Mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
