import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Login page.
 * Allows a user to enter email/password and submit credentials.
 * Current behavior: local state only + console/alert (no API call yet).
 */
export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  /**
   * Updates `credentials` when an input value changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  /**
   * Handles login form submission.
   * Prevents default form reload.
   * TODO: replace alert/console with backend authentication request.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion :", credentials);
    alert("Analyse de la feuille de match... Connexion en cours !");
  };

  /**
   * Renders:
   * - auth page container
   * - login form (email/password)
   * - submit button
   * - link to registration page
   * @returns {JSX.Element}
   */
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