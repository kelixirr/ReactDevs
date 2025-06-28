import { useState, useRef } from "react";
import styles from "../sushantpokhrel/Carousel.module.css";
import Author from "../../Author";
const images = [
  "https://imageio.forbes.com/specials-images/imageserve/632ca7f8235da6149f7d2c2b/Lionel-Messi-won-four-Champions-League-titles-while-at-FC-Barcelona-/960x0.jpg?format=jpg&width=960",
  "https://i.redd.it/7zk7aaai68w81.jpg",
  "https://i.pinimg.com/474x/3e/5e/db/3e5edbe334c04ddde83b716208f06782.jpg",
];
function Carousel() {
  const slideRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleClick = (value) => {
    if (value === "Prev") {
      if (count === 0) {
        return;
      }
      setCount((prev) => {
        const newCount = prev - 1;
        slideRef.current.style.transform = `translateX(-${newCount * 400}px)`;
        return newCount;
      });
    } else {
      if (count === images.length - 1) return;
      setCount((prev) => {
        const newCount = prev + 1;
        slideRef.current.style.transform = `translateX(-${newCount * 400}px)`;
        return newCount;
      });
    }
  };

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel}>
        <div className={styles.slide} ref={slideRef}>
          {images.map((image) => (
            <img src={image} key={image} className={styles.image_carousel}/>
          ))}
        </div>
        <div className={styles.buttons_container}>
          <button onClick={() => handleClick("Prev")}>Prev</button>
          <button onClick={() => handleClick("Next")}>Next</button>
        </div>
      </div>
      <Author
        name="Sushant Pokhrel"
        githubLink="https://github.com/SushantPokhrel"
      />
    </div>
  );
}

export default Carousel;
