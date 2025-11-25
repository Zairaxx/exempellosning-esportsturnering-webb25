import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './PlayerForm.module.css';

const PlayerForm = ({ teamA, teamB, addPlayer }) => {
      const [username, setUsername] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [age, setAge] = useState("");
      const [country, setCountry] = useState("");
      const [ranking, setRanking] = useState("Nybörjare");
      const [team, setTeam] = useState(teamA.length < 5 ? "A" : teamB.length < 5 ? "B" : "");


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let newPlayer = {
            username,
            firstName,
            lastName,
            age,
            country,
            ranking,
            team
        }

        if ([...teamA , ...teamB].find((p) => p.username === username)) {
            alert("Användarnamn är redan taget! Välj ett annat");
        } else {
          addPlayer(newPlayer);
          navigate("/");
        }
    };

    return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Förnamn"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Efternamn"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Ålder"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Land"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <select value={ranking} onChange={(e) => setRanking(e.target.value)}>
          <option>Järn</option>
          <option>Brons</option>
          <option>Silver</option>
          <option>Guld</option>
          <option>Diamant</option>
        </select>

        <select value={team} onChange={(e) => setTeam(e.target.value)}>
          {teamA.length < 5 && <option value="A">Lag A</option>}
          {teamB.length < 5 && <option value="B">Lag B</option>}
        </select>

        {teamA.length < 5 && teamB.length < 5 ? <button type="submit" className={styles.submit}>Lägg till</button> : <strong className={styles.error}>Bägge lag är fulla!</strong>}
      </form>
      )
}

export default PlayerForm