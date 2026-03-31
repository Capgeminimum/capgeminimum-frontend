import Header from "../components/Header";
import Podium from "../components/Podium";
import ToornamentCard from "../components/ToornamentCard";

function HomePage() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px", marginTop:"80px" }}>
        <ToornamentCard /> 
      </main>
      <Podium />
    </div>
  );
}

export default HomePage;