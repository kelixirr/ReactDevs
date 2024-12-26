import { useState } from "react";
import styles from "./Toast.module.css";
import { FaBell } from "react-icons/fa";
import Author from "../../Author";

export default function Toast() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const showNotification = (type) => {
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getToastMessage = () => {
    switch(toastType) {
      case 'success': return 'Operation completed successfully!';
      case 'error': return 'An error has occurred!';
      case 'warning': return 'Warning: Please be careful!';
      default: return 'Notification message';
    }
  };

  return (
    <>
      <section className={styles.section}>
        <h2>Toast Notification Component</h2>
        <p>
          A reusable toast notification component with different types and animations.
          Click the buttons below to see different toast types:
        </p>

        <div className={styles.toastContainer}>
          <button
            className={`${styles.toastButton} ${styles.success}`}
            onClick={() => showNotification('success')}
          >
            Success Toast
          </button>

          <button
            className={`${styles.toastButton} ${styles.error}`}
            onClick={() => showNotification('error')}
          >
            Error Toast
          </button>

          <button
            className={`${styles.toastButton} ${styles.warning}`}
            onClick={() => showNotification('warning')}
          >
            Warning Toast
          </button>
        </div>

        {showToast && (
          <div className={`${styles.toast} ${styles[toastType]}`}>
            <FaBell className={styles.toastIcon} />
            <p>{getToastMessage()}</p>
          </div>
        )}

        <Author name="Victor Ezeanyika" githubLink="https://github.com/VictorEZCodes" />
      </section>
    </>
  );
}