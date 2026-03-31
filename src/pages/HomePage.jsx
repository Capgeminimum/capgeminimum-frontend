import Header from "../components/Header";
import Podium from "../components/Podium";
import TournamentCard from "../components/TournamentsCard";
import TournamentDetails from "./TournamentDetails";
// import TournamentsCard from "../components/TournamentsCard";

function HomePage() {
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