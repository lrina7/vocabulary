import React, { useState } from "react";
import Card from "../Card/Card";
import words from "../../constants/words";
import styles from "./Cards.module.css";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex === words.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? words.length - 1 : currentIndex - 1);
  };

  return (
    <div className={styles.cards}>
      <button onClick={handlePrev}>Prev</button>
      <Card
        img={currentIndex + 1}
        russian={words[currentIndex].russian}
        onCheck={() => alert("Показать перевод")}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Cards;
