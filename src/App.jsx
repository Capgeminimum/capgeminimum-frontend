import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tournament from "./pages/Tournament"
import TournamentDetails from "./pages/TournamentDetails"
import CreateTournament from "./pages/CreateTournament"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/tournois/:id" element={<TournamentDetails />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
      </Routes>
    </BrowserRouter>
  )
}
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
