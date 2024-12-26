import { useState } from "react";
import styles from "./ProgressBar.module.css";
import { FaChartLine } from "react-icons/fa";
import Author from "../../Author";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleProgress = (amount) => {
    setProgress(prev => {
      const newValue = prev + amount;
      return Math.min(100, Math.max(0, newValue));
    });
  };

  const getProgressMessage = () => {
    if (progress === 100) return "Complete!";
    if (progress >= 75) return "Almost there!";
    if (progress >= 50) return "Halfway there!";
    if (progress > 0) return "Keep going!";
    return "Let's start!";
  };

  return (
    <>
      <section className={styles.section}>
        <h2>Progress Bar Component</h2>
        <p>
          An interactive progress bar with animations and status messages.
          Use the buttons below to control the progress:
        </p>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            >
              <span className={styles.progressText}>
                {progress}%
              </span>
            </div>
          </div>

          <p className={styles.progressMessage}>
            <FaChartLine className={styles.progressIcon} />
            {getProgressMessage()}
          </p>

          <div className={styles.buttonContainer}>
            <button
              className={styles.progressButton}
              onClick={() => handleProgress(-10)}
              disabled={progress === 0}
            >
              -10%
            </button>
            <button
              className={styles.progressButton}
              onClick={() => handleProgress(10)}
              disabled={progress === 100}
            >
              +10%
            </button>
            <button
              className={styles.progressButton}
              onClick={() => setProgress(0)}
              disabled={progress === 0}
            >
              Reset
            </button>
          </div>
        </div>

        <Author name="Victor Ezeanyika" githubLink="https://github.com/VictorEZCodes" />
      </section>
    </>
  );
}