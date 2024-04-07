import React from "react";
import styles from "./Card.module.css";

export default function Card({ img, russian, onCheck }) {
  const imagePath = require(`../../constants/${img}.jpg`);

  return (
    <div className={styles.card}>
      <img className={styles.img} src={imagePath} alt={russian} />
      <p className={styles.text}>{russian}</p>
      <button className={styles.button} onClick={onCheck}>
        Показать перевод
      </button>
    </div>
  );
}
