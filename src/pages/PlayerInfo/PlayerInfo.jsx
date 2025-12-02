// PlayerInfo.jsx
import { useParams, Link } from "react-router-dom";
import styles from "./PlayerInfo.module.css";
import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";

export default function PlayerInfo() {

  const { teamA, teamB } = useContext(TeamContext)
  const allPlayers = [...teamA,...teamB];
  
  const params = useParams();

  const player = allPlayers.find((p) => p.username === params.username);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{player.username}</h2>
        <p>{player.firstName} {player.lastName}</p>
        <p>Ålder: {player.age}</p>
        <p>Land: {player.country}</p>
        <p>Ranking: {player.ranking}</p>
        <Link to="/" className={styles.backBtn}>
          Tillbaka
        </Link>
      </div>
    </div>
  );
}
