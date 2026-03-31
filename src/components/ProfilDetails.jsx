import React from "react";
import "../styles/ProfilDetails.css";
import { Link } from "react-router-dom";

function ProfilDetails() {
  return (
    <section className="profile-wrapper">
      <div className="profile-card">
        <img className="user-avatar" src="/user.png" alt="avatar" />

        <div className="profile-info">
          <h1 className="username">
            Pseudo <span className="rank">#rank</span>
          </h1>

          <p className="stats">Stats (W/L) et elo</p>

          <Link to="/login">
            <button className="logout-btn">Déconnexion</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfilDetails;