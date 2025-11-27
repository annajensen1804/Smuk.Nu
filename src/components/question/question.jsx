import { useState } from 'react';
import styles from './question.module.css'
import { FaQuestion } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

const Question = ({question}) => {

    const [open, setOpen] = useState(false)

    return (
      <article className={styles.question}>
        <div
          className={styles.questionMark}
          onClick={() =>
            setOpen((prev) => !prev)
          } /* skifter mellem true og false, så vi kan åbne og lukke svar, når vi klikker på spørgsmål */
        >
          <FaQuestion 
          className={open ? styles.activeIcon : styles.defaultIcon}/>
          <p>{question.question}</p>
        </div>

        <AnimatePresence>
          {open && (
            <motion.p // element <p> (svar), som skal animeres
              className={styles.answer}
              initial={{ opacity: 0, height: 0 }} // skjult i starten
              animate={{ opacity: 1, height: "auto" }} // bliver synlig, når det vises
              exit={{ opacity: 0, height: 0 }} // skjult igen
              transition={{ duration: 0.3 }}
            >
              {question.answer}
            </motion.p>
          )}
        </AnimatePresence>

        {/* <p className={styles.answer}>{question.answer}</p> */}
      </article>
    );
}

export default Question