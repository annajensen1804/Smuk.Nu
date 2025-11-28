import styles from './burgerMenu.module.css'
import { NavLink } from 'react-router-dom'

const BurgerMenu = () => {
    return (
      <nav className={styles.burgerMenu}>
        <ul>
            <li><NavLink to="/">Forsiden</NavLink></li>
            <li><NavLink to="/products">Vores produkter</NavLink></li>
            <li><NavLink to="/faq">SPØRG OM SUNDHED</NavLink></li>  
        </ul>
      </nav>
    );
}

export default BurgerMenu