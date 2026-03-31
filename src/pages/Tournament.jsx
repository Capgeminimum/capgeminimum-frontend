import TournamentCard from "../components/TournamentsCard"
import Header from "../components/Header"
import "../styles/tournaments.css"

/**
 * Tournament listing page.
 * Shows a list of available tournaments.
 */
function Tournament() {
  // Temporary static dataset. Replace with API data when backend is connected.
  const tournaments = [
    {
      id: 1,
      title: "BBF2026",
      description: "Tournoi principal avec plusieurs équipes.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Winter Cup",
      description: "Compétition hivernale intense.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Spring Clash",
      description: "Tournoi ouvert à tous les joueurs.",
      image: "https://via.placeholder.com/150",
    },
  ]

  /**
   * Renders the tournament list page.
   * @returns {JSX.Element}
   */
  return (
    <div>
      <Header />
      <div style={{ padding: "40px", marginTop:"80px" }}>

        <h1>Tournois</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {tournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              id={tournament.id}
              title={tournament.title}
              description={tournament.description}
              image={tournament.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tournament