import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = () => {
    return (<nav className={styles.navbar}>
        <Link to="/">Hem</Link>
        <Link to="/addplayer">Lägg till spelare</Link>
    </nav>)
}

export default NavBar   