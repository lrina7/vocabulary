import mistake from "./404.jpg";
import styles from "./Mistakes.module.css";

export default function Mistakes() {
  return <img className={styles.mistake} src={mistake} alt="mistake"></img>;
}
