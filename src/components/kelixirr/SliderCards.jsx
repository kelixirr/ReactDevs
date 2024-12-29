import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import styles from "./../kelixirr/SliderCards.module.css";
import { GoDot } from "react-icons/go";
import { useCallback, useEffect, useState } from "react";
import { MdAlternateEmail, MdOutlineLocationCity } from "react-icons/md";
import { RiQuillPenAiFill } from "react-icons/ri";
import Author from "../../Author";

export default function SliderCards() {
  const [activeSlider, setActiveSlider] = useState(1);

  const sliders = [
    {
      id: 1,
      name: "John Doe",
      title: "Full-Stack Developer",
      content: "Passionate about building scalable web applications.",
      image: "https://i.pravatar.cc/150?img=59",
      location: "San Francisco, USA",
      contact: "johndoe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "UI/UX Designer",
      content: "Creating intuitive and visually appealing designs.",
      image: "https://i.pravatar.cc/150?img=47",
      location: "New York, USA",
      contact: "janesmith@example.com",
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "Data Scientist",
      content: "Turning data into actionable insights.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      location: "Toronto, Canada",
      contact: "michaelbrown@example.com",
    },
    {
      id: 4,
      name: "Emily Johnson",
      title: "Digital Marketer",
      content: "Helping brands grow with data-driven strategies.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      location: "London, UK",
      contact: "emilyjohnson@example.com",
    },
    {
      id: 5,
      name: "Chris Evans",
      title: "Machine Learning Engineer",
      content: "Building intelligent systems for modern applications.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      location: "Berlin, Germany",
      contact: "chrisevans@example.com",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      title: "Content Creator",
      content: "Crafting compelling stories for a digital audience.",
      image: "https://i.pravatar.cc/150?img=35",
      location: "Madrid, Spain",
      contact: "sophiamartinez@example.com",
    },
  ];

  const handleSlide = useCallback(
    (side) => {
      if (side === "left") {
        setActiveSlider((prev) => (prev > 1 ? prev - 1 : sliders.length));
      }
      if (side === "right") {
        setActiveSlider((prev) => (prev < sliders.length ? prev + 1 : 1));
      }
    },
    [sliders.length]
  );

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") handleSlide("left");
      if (e.key === "ArrowRight") handleSlide("right");
    },
    [handleSlide]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const renderArrow = (direction) => {
    const Icon =
      direction === "left"
        ? HiOutlineArrowCircleLeft
        : HiOutlineArrowCircleRight;

    return <Icon onClick={() => handleSlide(direction)} />;
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderMain}>
          {renderArrow("left")}
          <div className={styles.sliderDiv}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${(activeSlider - 1) * 100}%)`,
              }}
            >
              {sliders.map((slider) => (
                <div key={slider.id} className={`${styles.slider}`}>
                  <img
                    src={slider.image}
                    alt={`${slider.name}'s profile`}
                    className={styles.sliderImage}
                  />
                  <div className={styles.sliderDetails}>
                    <div className={styles.sliderDetailsHead}>
                      <h2 className={styles.sliderName}>{slider.name}</h2>
                      <h3 className={styles.sliderTitle}>{slider.title}</h3>
                    </div>
                    <div className={styles.sliderDetailsBox}>
                      <p className={styles.sliderLocation}>
                        <MdOutlineLocationCity /> {slider.location}
                      </p>
                      <p className={styles.sliderContact}>
                        <MdAlternateEmail /> {slider.contact}
                      </p>
                      <p className={styles.sliderContent}>
                        <RiQuillPenAiFill />
                        {slider.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {renderArrow("right")}
        </div>
        <div className={styles.sliderDots}>
          {sliders.map((slider) => (
            <GoDot
              key={slider.id}
              onClick={() => setActiveSlider(slider.id)}
              className={`${
                activeSlider === slider.id ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
      <Author name="Amritesh Kumar" githubLink="https://github.com/kelixirr" />
    </>
  );
}
