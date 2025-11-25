import Button from '../button/Button';
import styles from './member.module.css'

const Member = () => {
    return (
      <section className={styles.memberContainer}>
        <h1>MEDLEM?</h1>
        <p>Vær med i kundeklubben for nye videoer, rabatkoder og mere!</p>
        <Button buttonText="Bliv medlem af kundeklubben" />
      </section>
    );
}

export default Member