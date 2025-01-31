import React from "react";
import styles from "./Login.module.css";
import Author from "../../Author";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
      <Author name="rrusyaidii" githubLink="https://github.com/rrusyaidii" />
    </>
  );
};

export default Login;
