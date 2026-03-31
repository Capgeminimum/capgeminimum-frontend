import GameHistory from "../components/GameHistory";
import Header from "../components/Header";
import ProfilDetails from "../components/ProfilDetails"

/**
 * Profile page.
 * Displays user profile details and game history.
 */
function Profil() {
    /**
     * Renders profile layout with user information and history.
     * @returns {JSX.Element}
     */
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