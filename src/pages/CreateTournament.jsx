import { useState } from "react"
import "../styles/tournaments.css"

function CreateTournament() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [players, setPlayers] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTournament = {
      title,
      description,
      players,
    }

    console.log("Tournoi créé :", newTournament)

    // reset
    setTitle("")
    setDescription("")
    setPlayers("")
  }

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