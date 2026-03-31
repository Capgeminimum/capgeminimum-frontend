import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <div className="right">
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/toornament">Tournois</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/profil">Profil</Link>
        </nav>

        <div className="user-actions">
          <Link to="/profil">
            <img className="avatar-header" src="/user.png" alt="avatar" />
          </Link>
        </div>
          <Link to="/login">
            <button className="login-btn">Connexion</button>
          </Link>
        
      </div>
    </header>
  );
}

export default Header;