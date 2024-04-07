import Cards from "../Cards/Cards";
import styles from "./Game.module.css";

export default function Game() {
  return (
    <div className={styles.game}>
     <h2>Game</h2>
      <Cards />
    </div>
  );
}
