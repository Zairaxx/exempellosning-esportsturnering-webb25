// Home.jsx
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import PlayerList from "../../components/PlayerList/PlayerList";
import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";

export default function Home() {

  return (
    <div className={styles.container}>
      <PlayerList team="A" />
      <PlayerList team="B" />
    </div>
  );
}
