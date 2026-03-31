import React from "react";
import "../styles/Board.css";

function Board() {
  const players = [
    { rank: 1, name: "Test", elo: 1000, WR: 100 },    
  ];

  return (
    <section className="leaderboard-section">
      <h2 className="leaderboard-title">Classement : BabyFoot </h2>

      <div className="leaderboard-grid header-row">
        <div>Rang</div>
        <div>Joueur</div>
        <div>Elo</div>
        <div>Win rate</div>
      </div>

      {players.map((player) => (
        <div className="leaderboard-grid player-row" key={player.rank}>
          <div className="rank-cell">#{player.rank}</div>
          <div className="name-cell">{player.name}</div>
          <div className="elo-cell">{player.elo}</div>
          <div className={`WR-cell ${player.WR}`}>
            {player.WR}%
          </div>
        </div>
      ))}
    </section>
  );
}

export default Board;