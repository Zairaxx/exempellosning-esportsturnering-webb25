// Home.jsx
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import PlayerList from "../../components/PlayerList/PlayerList";

export default function Home({ teamA, teamB, removePlayer}) {
  return (
    <div className={styles.container}>
      <PlayerList teamArray={teamA} team="A" removePlayer={removePlayer} />
      <PlayerList teamArray={teamB} team="B" removePlayer={removePlayer} />
    </div>
  );
}
