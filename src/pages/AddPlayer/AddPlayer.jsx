import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddPlayer.module.css";
import PlayerForm from "../../components/PlayerForm/PlayerForm";
export default function AddPlayer() {

  return (
    <div className={styles.container}>
      <h2>Lägg till spelare</h2>
      <PlayerForm />
    </div>
  );
}