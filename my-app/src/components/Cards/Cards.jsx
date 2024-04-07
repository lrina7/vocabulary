import React, { useState } from "react";
import Card from "../Card/Card";
import words from "../../constants/words";
import styles from "./Cards.module.css";
import left from "./left.png";
import right from "./right.png";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNext = () => {
    setCurrentIndex(currentIndex === words.length - 1 ? 0 : currentIndex + 1);
    setShowTranslation(false);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? words.length - 1 : currentIndex - 1);
    setShowTranslation(false);
  };

  const handleCheck = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.cards}>
      <button className={styles.button} onClick={handlePrev}>
        <img className={styles.img} src={left} alt="назад" />
      </button>
      <Card
        img={currentIndex + 1}
        russian={words[currentIndex].russian}
        english={words[currentIndex].english}
        showTranslation={showTranslation}
        onCheck={handleCheck}
      />
      <button className={styles.button} onClick={handleNext}>
        <img className={styles.img} src={right} alt="вперёд" />
      </button>
    </div>
  );
};

export default Cards;
