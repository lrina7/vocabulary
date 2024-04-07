import React from "react";
import styles from "./Card.module.css";

export default function Card({
  img,
  russian,
  english,
  onCheck,
  showTranslation,
}) {
  const imagePath = require(`../../constants/${img}.jpg`);

  return (
    <div className={styles.card}>
      <img className={styles.img} src={imagePath} alt={russian} />
      <p className={styles.text}>{russian}</p>
      <button className={styles.button} onClick={onCheck}>
        {showTranslation ? english : "Показать перевод"}
      </button>
    </div>
  );
}
