import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import Author from "../../Author";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('system');

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getCurrentTheme = () => {
    return theme === 'system' ? getSystemTheme() : theme;
  };

  return (
    <section className={styles.section}>
      <h2>Theme Switcher</h2>
      <p className={styles.description}>
        Switch between light, dark, and system theme preferences
      </p>

      <div className={styles.themeContainer}>
        <button
          className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`}
          onClick={() => setTheme('light')}
        >
          <FaSun /> Light
        </button>
        <button
          className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`}
          onClick={() => setTheme('dark')}
        >
          <FaMoon /> Dark
        </button>
        <button
          className={`${styles.themeButton} ${theme === 'system' ? styles.active : ''}`}
          onClick={() => setTheme('system')}
        >
          <FaDesktop /> System
        </button>
      </div>

      <div className={styles.preview}>
        <h3>Theme Preview</h3>
        <div className={`${styles.card} ${styles[getCurrentTheme()]}`}>
          <h4>Sample Card</h4>
          <p>This card will update based on the selected theme.</p>
          <button className={styles.previewButton}>Sample Button</button>
        </div>
      </div>

      <Author name="Victor Ezeanyika" githubLink="https://github.com/VictorEZCodes" />
    </section>
  );
}