import { useState, useEffect } from 'react'
import styles from './questions.module.css'
import Question from '../question/question'

const Questions = () => {

const [questions, setQuestions] = useState([])
const fetchQuestions = async () => {
    try {
        const response = await fetch("https://smuknu-vomg9.ondigitalocean.app/qas/")
        const data = await response.json()
            setQuestions(data.data)
            console.log(data.data)
    } catch (error) {
        console.log(error)
    }
    }
    useEffect(() => {
        fetchQuestions();
    }, []);
    
    return (
      <section className={styles.questionsContainer}>
        {questions.map((question) => (
          <Question question={question} key={question._id} />
        ))}
      </section>
    );
}

export default Questions