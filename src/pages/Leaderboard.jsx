
import Board from "../components/Board";
import Header from "../components/Header";

/**
 * Leaderboard page.
 * Shows ranking board with the shared application header.
 */
function Leaderboard() {
    /**
     * Renders leaderboard content.
     * @returns {JSX.Element}
     */
    return (
        <div>
            <Header />
            <main style={{ marginTop:"150px" }}>
                <Board />
            </main>
        </div>
    );

}


export default Leaderboard; 