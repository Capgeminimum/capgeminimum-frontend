import { Link } from "react-router-dom"

function TournamentCard({ id, title, description, image }) {
  return (
    <article className="tournament-card">
      <img src={image} alt={title} className="tournament-card__image" />

      <div className="tournament-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <Link to={`/tournois/${id}`} className="tournament-card__button">
        voir
      </Link>
    </article>
  )
}

export default TournamentCard