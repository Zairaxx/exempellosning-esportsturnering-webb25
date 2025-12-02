import { Link } from 'react-router-dom'
import styles from './PlayerList.module.css'
import { useContext } from 'react'
import { TeamContext } from '../../context/TeamContext'
const PlayerList = ({team}) => {

   const { teamA, teamB, removePlayer } = useContext(TeamContext)

   let teamArray;

   if(team === "A"){
    teamArray = teamA;
   } else {
    teamArray = teamB;
   }


    return(
    <div className={styles.team}>
            <h2>Lag {team}</h2>
            <ul>
              {teamArray.map((player) => (
                <li key={player.username} className={styles.playerItem}>
                  <Link to={`/playerinfo/${player.username}`}>
                    {player.username}
                  </Link>
                  <div className={styles.buttons}>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removePlayer(player.username, team)}
                    >
                      Ta bort
                    </button>
                  </div>
                </li>
              ))}
            </ul>
    </div>)
}

export default PlayerList