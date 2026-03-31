import Tournament from "./pages/Tournament"
import TournamentDetails from "./pages/TournamentDetails"
import CreateTournament from "./pages/CreateTournament"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import Profil from "./pages/Profil"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/tournois/:id" element={<TournamentDetails />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/tournois/:id" element={<TournamentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
