import styles from './navigation.module.css';
import logo from '../../assets/images/logo.png'

const Navigation = () => {
    return (
        <nav>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.basketBurger}>
                <p>Kurv</p>
                <p>Burger</p>
            </div>
            
        </nav>
    )
}

export default Navigation