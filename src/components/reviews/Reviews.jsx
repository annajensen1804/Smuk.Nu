import { useEffect, useState } from 'react'
import styles from './reviews.module.css'
import Review from '../review/Review'

const Reviews = ({titleOne, titleTwo}) => {
    const [reviews, setReviews] = useState([])

    const fetchReviews = async () => {
        try {
            const response = await fetch("https://smuknu-vomg9.ondigitalocean.app/reviews/")

            const data = await response.json()
            setReviews(data.data)
            console.log(data.data)
        } catch (error) {
            console.log (error)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])


    return (
      <section className={styles.reviewscontainer}>
        <h1 style={{ color: "rgba(0, 0, 0, 1)" }}>{titleOne}</h1>
        <h1 style={{ color: "rgba(250, 150, 170, 1)"}}>{titleTwo}</h1>
        
        {reviews.map((review) => (
          <Review review={review} key={review._id} />
        ))}
      </section>
    );
}

export default Reviews