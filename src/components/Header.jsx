import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <div className="right">
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/toornament">Tournois</Link>
          <Link to="/board">Leaderboard</Link>
          <Link to="/profil">Profil</Link>
        </nav>

        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

export default Header;