import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "../styles/Tournaments.css"

function TournamentDetails() {
  const { id } = useParams()
  const [joined, setJoined] = useState(false)
  const navigate = useNavigate()

  const tournaments = [
    {
      id: "1",
      title: "BBF2026",
      details:
        "Tournoi compétitif 5v5 avec phase de groupes, matchs à élimination directe et finale.",
      status: "Ouvert",
      participants: [
        "Andri",
        "Lucas",
        "Sarah",
        "Mickael",
        "Nina",
        "Kevin",
      ],
    },
    {
      id: "2",
      title: "Winter Cup",
      details:
        "Compétition hivernale avec format simple elimination et matchs intenses.",
      status: "Fermé",
      participants: ["Emma", "Noah", "Lina", "Tom"],
    },
    {
      id: "3",
      title: "Spring Clash",
      details:
        "Tournoi de printemps ouvert aux nouvelles équipes et aux participants invités.",
      status: "Ouvert",
      participants: ["Yanis", "Jade", "Mehdi", "Inès", "Adam"],
    },
  ]

  const tournament = tournaments.find((item) => item.id === id)

  if (!tournament) {
    return <h1 style={{ color: "white", padding: "40px" }}>Tournoi introuvable</h1>
  }

  return (
    <section className="details-page">
    <button
      className="close-button"
      onClick={() => navigate("/tournois")}
    >
      ✖
    </button>
      <h1 className="details-page__title">{tournament.title}</h1>

      <div className="details-page__card">
        <p className="details-page__text">{tournament.details}</p>

        <p className="details-page__status">
          Statut : <span>{tournament.status}</span>
        </p>

        <button
          className={`details-page__button ${joined ? "is-joined" : ""}`}
          onClick={() => setJoined(!joined)}
        >
          {joined ? "Déjà rejoint" : "Rejoindre"}
        </button>
      </div>

      <div className="participants-card">
        <h2 className="participants-card__title">Participants</h2>

        <div className="participants-list">
          {tournament.participants.map((participant, index) => (
            <div key={index} className="participant-chip">
              {participant}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TournamentDetails