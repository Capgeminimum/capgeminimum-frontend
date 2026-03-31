import { Route, Routes } from "react-router-dom";
import Login from "./pages/AuthLogin";
import Register from "./pages/AuthRegister";
import CreateTournament from "./pages/CreateTournament";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import Profil from "./pages/Profil";
import Tournament from "./pages/Tournament";
import TournamentDetails from "./pages/TournamentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tournois" element={<Tournament />} />
      <Route path="/tournois/:id" element={<TournamentDetails />} />
      <Route path="/create-tournament" element={<CreateTournament />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
