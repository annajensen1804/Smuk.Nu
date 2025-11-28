import styles from './questions.module.css'
import Question from '../question/question'
import { useLoaderData } from 'react-router-dom'

const Questions = () => {

  const data = useLoaderData()
      
    return (
      <section className={styles.questionsContainer}>
        {data.map((question) => (
          <Question question={question} key={question._id} />
        ))}
      </section>
    );
}

export default Questions