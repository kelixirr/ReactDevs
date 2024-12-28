import styles from "./Hero.module.css";
import { FaGithub, FaStar, FaQuestionCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="/react.svg" alt="React logo" />
            <span>ReactDevs</span>
          </div>
          <div className={styles.navLinks}>
            <a
              href="https://github.com/kelixirr/ReactDevs/discussions"
              target="_blank"
              rel="noopener noreferrer"
              title="Help"
            >
              <FaQuestionCircle size={24} color="currentColor" />
            </a>
            <a
              href="https://github.com/kelixirr/ReactDevs"
              target="_blank"
              rel="noopener noreferrer"
              title="Star the repository"
            >
              <FaStar size={24} color="currentColor" />
            </a>
          </div>
        </nav>
      </header>
      <section className={styles.hero}>
        <h1>🌟 Welcome to the ReactDevs Project! 🌟</h1>
        <p>
          A community-driven React project where beginners can contribute their
          own components and showcase their skills! This project will help you
          understand how to collaborate in an open source project, use git and
          github, and help you gain a solid understanding of React. If you are a
          beginner, click on contribute now button to get started.
        </p>
        <div className={styles["hero-buttons"]}>
          <a
            href="https://github.com/kelixirr/ReactDevs"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["hero-button"]} ${styles["contribute-button"]}`}
          >
            <FaGithub size={20} color="currentColor" /> Contribute Now
          </a>
        </div>
      </section>
    </div>
  );
}
