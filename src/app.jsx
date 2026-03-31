import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* Navigation épurée et transparente */}
      <nav className="main-nav">
        <Link to="/login">Connexion</Link>
        <Link to="/register">Inscription</Link>
        <Link to="/">Accueil</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1 className="welcome-title">CAPGEMINIUM <span className="highlight">FC</span></h1>} />
        </Routes>
      </div>
    </div>
  );
}