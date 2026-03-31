import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tournament from "./pages/Tournament"
import TournamentDetails from "./pages/TournamentDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/tournois/:id" element={<TournamentDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App