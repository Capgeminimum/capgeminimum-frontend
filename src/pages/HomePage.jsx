import Header from "../components/Header";
import Podium from "../components/Podium";
import TournamentCard from "../components/TournamentsCard";

/**
 * Home page.
 * Displays the main header, featured tournament cards and podium section.
 */
function HomePage() {
  /**
   * Renders the home page layout.
   * @returns {JSX.Element}
   */
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", marginTop:"200px" }}>
        <TournamentCard />
      </main>
      <Podium />
    </div>
  );
}

export default HomePage;