// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Verifique o caminho
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Componente Header sendo usado */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
