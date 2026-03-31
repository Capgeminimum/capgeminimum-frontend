import React, { useState } from 'react';

/**
 * Registration page.
 * Allows a user to enter pseudo/email/password and submit registration form.
 * Current behavior: local state only + console/alert (no API call yet).
 */
export default function Register() {
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  /**
   * Updates form fields when an input changes.
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles register form submission.
   * Checks if password and confirmPassword match.
   * TODO: replace console log with backend registration request.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les tactiques ne correspondent pas ! (Mots de passe différents)");
      return;
    }
    console.log("Nouveau joueur recruté :", formData);
  };

  /**
   * Renders:
   * - auth page container
   * - registration form
   * - submit button
   * @returns {JSX.Element}
   */
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>REJOINS L'ÉQUIPE</h2>
          <p>Crée ton profil de joueur Capgeminium</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>NOM DE JOUEUR (PSEUDO)</label>
            <input name="pseudo" type="text" placeholder="ex: Zidane59" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>ADRESSE MAIL</label>
            <input name="email" type="email" placeholder="ton-mail@stade.com" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>MOT DE PASSE</label>
            <input name="password" type="password" placeholder="••••••••" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>CONFIRMER LE MOT DE PASSE</label>
            <input name="confirmPassword" type="password" placeholder="••••••••" onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-pitch">ENTRER SUR LE TERRAIN</button>
        </form>
      </div>
    </div>
  );
}