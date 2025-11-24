import styles from './button.module.css'

const Button = ({onClick, buttonText}) => {
    return (
        <button 
        className={styles.button}
        onClick={onClick}
        >
            <p>{buttonText}</p>
        </button>
    )
}

export default Button