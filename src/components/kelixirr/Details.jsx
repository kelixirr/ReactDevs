import { useState } from "react";
import styles from "../kelixirr/Details.module.css";
import { FaCartShopping } from "react-icons/fa6";
import Author from "../../Author";

export default function Details() {
  const [count, setCount] = useState(0);

  const handleCount = type => {
    setCount(prev => {
      if (type === "increase" && prev < 20) {
        return prev + 1;
      } else if (type === "decrease" && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const getCartMessage = () => {
    if (count === 20) return `${count} - Maximum limit reached`;
    if (count > 0) return `${count} - items in your cart`;
    return `${count} - Your cart is empty`;
  };

  return (
    <>
      <section className={styles.section}>
        <h2>An Example:</h2>
        <p>
          Welcome to the <strong>ReactDevs</strong> project! This project allows
          contributors to add React components that are simple yet creative.
          It&apos;s a great way to practice, collaborate, and learn React in an
          open source environment. Here is an example:
        </p>

        <div className={styles.cartContainer}>
          <button
            className={styles.cartButton}
            onClick={() => handleCount("decrease")}
            disabled={count === 0}
            aria-label="Decrease quantity"
          >
            -
          </button>

          <p className={styles.cartInfo}>
            <FaCartShopping className={styles.cartIcon} />
            {getCartMessage()}
          </p>

          <button
            className={styles.cartButton}
            onClick={() => handleCount("increase")}
            disabled={count === 20}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <Author name="Your Name" githubLink="https://github.com/kelixirr" />
        <p>
          Once you have created your component, add the Author component as
          shown above to get the credit. Here is the example code:
        </p>
        <pre className={styles.codeBlock}>
          <code>
            {`import { useState } from "react";
import styles from "../your_username/Cart.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import Author from "../../Author";

export default function Cart() {
  const [count, setCount] = useState(0);

  const handleCount = (type) => {
    setCount((prev) => {
      if (type === "increase" && prev < 20) {
        return prev + 1;
      } else if (type === "decrease" && prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      <div className={styles.cartContainer}>
        <button
          className={styles.cartButton}
          onClick={() => handleCount("decrease")}
          disabled={count === 0}
        >
          -
        </button>
        <p className={styles.cartInfo}>
          <FaCartShopping />
          {count === 20
            ? \`\${count} - Maximum limit reached\`
            : count > 0
            ? \`\${count} - items in your cart\`
            : \`\${count} - Your cart is empty\`}
        </p>
        <button
          className={styles.cartButton}
          onClick={() => handleCount("increase")}
          disabled={count === 20}
        >
          +
        </button>
      </div>
      <Author name="Your Name" githubLink="Your GitHub Link" />
    </>
  );
}`}
          </code>
        </pre>
        <p style={{ textAlign: "center", marginTop: "2.4rem" }}>
          Good Luck! We can&apos; wait to see you being part of this project!{" "}
          <a
            href="https://github.com/kelixirr/ReactDevs"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#222",
              fontWeight: "600",
              borderBottom: "1px solid #333",
            }}
          >
            Start Now!
          </a>
        </p>
      </section>
    </>
  );
}
