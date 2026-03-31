import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion :", credentials);
    alert("Analyse de la feuille de match... Connexion en cours !");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>COUP D'ENVOI</h2>
          <p>Connecte-toi pour gérer tes tournois</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>ADRESSE MAIL</label>
            <input 
              name="email" 
              type="email" 
              placeholder="ton-mail@stade.com" 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>MOT DE PASSE</label>
            <input 
              name="password" 
              type="password" 
              placeholder="••••••••" 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn-pitch">SE CONNECTER</button>
        </form>

        <div className="auth-footer">
          <p>Pas encore dans l'effectif ? <Link to="/register">Crée ton compte</Link></p>
        </div>
      </div>
    </div>
  );
}