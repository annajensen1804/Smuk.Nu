import styles from './reviews.module.css'
import Review from '../review/Review'
import { useLoaderData } from 'react-router-dom'

const Reviews = ({titleOne, titleTwo}) => {
  const data = useLoaderData()

    return (
      <section className={styles.reviewscontainer}>
        <h1 style={{ color: "rgba(0, 0, 0, 1)" }}>{titleOne}</h1>
        <h1 style={{ color: "rgba(250, 150, 170, 1)"}}>{titleTwo}</h1>
        
        {data.reviews.map((review) => (
          <Review review={review} key={review._id} />
        ))}
      </section>
    );
}

export default Reviews