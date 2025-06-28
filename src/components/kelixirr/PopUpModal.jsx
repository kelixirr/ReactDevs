import { useEffect, useRef, useState } from "react";
import styles from "../kelixirr/PopUpModal.module.css";

export default function PopUpModal() {
  const [modalState, setModalState] = useState(false);
  const modalOpenRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalState) {
      modalRef.current?.focus();
    }
  }, [modalState]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalState(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTabKey = (e) => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    <div className={styles.modalContainer}>
      <button
        className={styles.modalBtn}
        ref={modalOpenRef}
        onClick={() => setModalState((prev) => !prev)}
        aria-haspopup="dialog"
      >
        Open Modal
      </button>
      {modalState && (
        <div
          className={styles.ModalOverlay}
          onClick={() => setModalState(false)}
        >
          <div
            className={styles.Modal}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            onKeyDown={handleTabKey}
            aria-modal="true"
            aria-labelledby="modal-ttile"
            role="dialog"
            tabIndex={-1}
          >
            <div className={styles.ModalDiv}>
              <h2 id="modal-title">Hello</h2>
              <button
                onClick={() => setModalState(false)}
                aria-label="close modal"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
