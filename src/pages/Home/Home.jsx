// Home.jsx
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home({ teamA, teamB, removePlayer}) {
  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <h2>Lag A</h2>
        <ul>
          {teamA.map((player) => (
            <li key={player.username} className={styles.playerItem}>
              <Link to={`/playerinfo/${player.username}`}>
                {player.username}
              </Link>
              <div className={styles.buttons}>
                <button
                  className={styles.removeBtn}
                  onClick={() => removePlayer(player.username, "A")}
                >
                  Ta bort
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.team}>
        <h2>Lag B</h2>
        <ul>
          {teamB.map((player) => (
            <li key={player.username} className={styles.playerItem}>
              <Link to={`/playerinfo/${player.username}`}>
                {player.username}
              </Link>
              <div className={styles.buttons}>
                <button
                  className={styles.removeBtn}
                  onClick={() => removePlayer(player.username, "B")}
                >
                  Ta bort
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
