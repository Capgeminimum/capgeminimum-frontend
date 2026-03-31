import React from "react";
import "../style/Header.css";

function Header() {
  return (
        <header className="header">
    <div className="logo">LOGO</div>

    <div className="right">
        <nav className="nav">
        <a href="/home">Accueil</a>
        <a href="/toornament">Tournois</a>
        <a href="/board">Leaderboard</a>
        <a href="/profil">Profil</a>
        </nav>

        <button className="login-btn">Login</button>
    </div>
    </header>
  );
}

export default Header;