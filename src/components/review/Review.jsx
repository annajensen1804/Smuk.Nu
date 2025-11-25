import styles from './review.module.css'

const Review = ({review}) => {
    return (
      <article className={styles.review}>
        <img className={styles.reviewImg} src={review.image} alt={review.titel} />
        <p>{review.content}</p>
        <p className={styles.reviewName}>{review.name}</p>
        <p className={styles.reviewKunde}>Tilfreds Kunde</p>
      </article>
    );
}

export default Review