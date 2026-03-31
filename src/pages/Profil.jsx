import GameHistory from "../components/GameHistory";
import Header from "../components/Header";
import ProfilDetails from "../components/ProfilDetails"

function Profil() {
    return (
        <div>
            <Header />
            <main style={{ marginTop:"150px" }}>
                <ProfilDetails />
                <GameHistory />
            </main>
        </div>
    )
}




export default Profil;