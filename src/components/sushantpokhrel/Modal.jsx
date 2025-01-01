import React from "react";
import styles from "../sushantpokhrel/Modal.module.css";
import Author from "../../Author";
function Modal() {
  const [show, setShow] = React.useState(false);
  function handleOutsideClick(e) {
    console.log(e.target.id);
    if (e.target.id === "overlay-close") setShow(false);
  }
  return (
    <section className={styles.modal_container}>
      <div className={styles.modal_open}>
        <h2>Modal Component</h2>
        <button onClick={() => setShow(true)}>Open Modal</button>
      </div>
      <div
        className={`${styles.overlay} ${show ? styles.open : ""}`}
        id="overlay-close"
        onClick={(e) => handleOutsideClick(e)}
      >
        <div className={`${styles.modal} `}>
          <div className={styles.title_flex}>
            <h2>Modal title</h2>{" "}
            <button onClick={() => setShow(false)}>X</button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <Author
        name="Sushant Pokhrel"
        githubLink="https://github.com/SushantPokhrel"
      />
    </section>
  );
}

export default Modal;
