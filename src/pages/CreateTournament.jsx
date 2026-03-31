import { useState } from "react"
import "../styles/tournaments.css"

/**
 * Tournament creation page.
 * Lets a user enter a title, description and number of players.
 * Current behavior: local state + console log (no API request yet).
 */
function CreateTournament() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [players, setPlayers] = useState("")

  /**
   * Handles form submission.
   * Prevents page reload, builds a tournament payload, logs it,
   * then resets all form fields.
   * TODO: connect this payload to backend API.
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    const newTournament = {
      title,
      description,
      players,
    }

    console.log("Tournoi créé :", newTournament)

    setTitle("")
    setDescription("")
    setPlayers("")
  }

  /**
   * Renders the tournament creation form UI.
   * @returns {JSX.Element}
   */
  return (
    <section className="create-page">
      <h1 className="create-title">Créer un tournoi</h1>

      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du tournoi"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Nombre de joueurs"
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
        />

        <button type="submit">Créer</button>
      </form>
    </section>
  )
}

export default CreateTournament