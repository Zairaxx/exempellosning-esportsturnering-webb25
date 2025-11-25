import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddPlayer.module.css";
import PlayerForm from "../../components/PlayerForm/PlayerForm";
export default function AddPlayer({ teamA, teamB, addPlayer }) {

  return (
    <div className={styles.container}>
      <h2>Lägg till spelare</h2>
      <PlayerForm teamA={teamA} teamB={teamB} addPlayer={addPlayer} />
    </div>
  );
}