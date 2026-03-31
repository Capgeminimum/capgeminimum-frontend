import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Leaderboard from "./pages/Leaderboard";
import Profil from "./pages/Profil"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
