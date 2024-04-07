import { useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./Game.module.css";

export default function Game() {
  const [result, setResult] = useState(0);

  return (
    <div className={styles.game}>
      <h2>Game</h2>
      <Cards setResult={setResult} />
      <p className={styles.result}>Сегодня изучено: {result} слов</p>
    </div>
  );
}
