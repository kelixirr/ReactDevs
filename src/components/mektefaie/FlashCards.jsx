import styles from "../mektefaie/FlashCards.module.css";
import Author from "../../Author";
import { useState } from "react";

const cards = [
  {
    id: 1,
    question: "The creator of ReactDevs project?",
    answer: "Amritesh Kumar",
  },
  {
    id: 2,
    question: "When was ReactDevs project created?",
    answer: "2024",
  },
  {
    id: 3,
    question: "The first contributor to ReactDevs project?",
    answer: "Victor Ezeanyika",
  },
  {
    id: 4,
    question: "Best React course?",
    answer: "Jonas Schmedtmann's Ultimate React course on Udemy",
  },
  {
    id: 5,
    question: "Best Frontend bootcamp?",
    answer: "Scrimba.com",
  },
  {
    id: 6,
    question: "Best Backend bootcamp?",
    answer: "Boot.dev",
  },
];

export default function FlashCards() {
  const [selectedId, setSelectedID] = useState(null);

  function handleClick(id) {
    setSelectedID(id === selectedId ? null : id);
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.description}>Flashcards</h2>
      <p className={styles.description}>
        Interactive Flashcards: click on each card to reveal the answer.
      </p>
      <div className={styles.flashcards}>
        {cards.map((question) => (
          <div
            key={question.id}
            className={question.id === selectedId ? styles.selected : ""}
            onClick={() => handleClick(question.id)}
          >
            {question.id === selectedId ? question.answer : question.question}
          </div>
        ))}
      </div>
      <Author
        name="Mahmoud Ektefaie"
        githubLink="https://github.com/mektefaie"
      />
    </section>
  );
}
