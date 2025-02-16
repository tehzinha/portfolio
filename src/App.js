import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Verifique o caminho
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router basename="/portfolio"> {/* Ajuste aqui com o basename */}
      <Header /> {/* Componente Header sendo usado */}
      <div className="main-content">
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
