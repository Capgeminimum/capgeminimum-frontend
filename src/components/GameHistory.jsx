import React from "react";
import "../styles/GameHistory.css";

function GameHistory() {
  const games = [
    {
      id: 1,
      result: "Victoire",
      date: "31/03/2026",
      score: "10-6",
      type: "Solo",
      elo: "+10",
    },
    {
      id: 2,
      result: "Défaite",
      date: "28/03/2026",
      score: "7-10",
      type: "Solo",
      elo: "-9",
    },
  ];

  return (
    <section className="history-section">
      <h2 className="history-title">Historique des parties</h2>

      <div className="history-grid history-header">
        <div>Résultat</div>
        <div>Date</div>
        <div>Score</div>
        <div>Type</div>
        <div>Elo</div>
      </div>

      {games.map((game) => (
        <div className="history-grid history-row" key={game.id}>
          <div
            className={`result-cell ${
              game.result === "Victoire" ? "win" : "lose"
            }`}
          >
            {game.result}
          </div>

          <div className="date-cell">{game.date}</div>
          <div className="score-cell">{game.score}</div>
          <div className="type-cell">{game.type}</div>

          <div
            className={`elo-cell ${
              game.elo.startsWith("+") ? "elo-positive" : "elo-negative"
            }`}
          >
            {game.elo}
          </div>
        </div>
      ))}
    </section>
  );
}

export default GameHistory;