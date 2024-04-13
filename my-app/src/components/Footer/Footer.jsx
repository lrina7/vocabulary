import { Link } from "react-router-dom";
import photo from "./me.jpg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2>ещё больше английского с нами:</h2>
      <Link
        className={styles.link}
        to="https://t.me/yourenglishlevel_bot"
        target="_blank"
        rel="noopener noreferrer"
      >
        бот определения уровня английского
      </Link>
      <Link
        className={styles.link}
        to="https://t.me/kakskazaty"
        target="_blank"
        rel="noopener noreferrer"
      >
        тренажёр готовых фраз
      </Link>
      <Link
        className={styles.link}
        to="https://t.me/Daily_english_examine"
        target="_blank"
        rel="noopener noreferrer"
      >
        Storm English
      </Link>
      <Link
        className={styles.link}
        to="https://t.me/seriesenglishhh"
        target="_blank"
        rel="noopener noreferrer"
      >
        английский по сериалам
      </Link>
      <Link
        className={styles.link}
        to="https://t.me/interviewenglishh"
        target="_blank"
        rel="noopener noreferrer"
      >
        английский по интервью
      </Link>
      <h2>для связи:</h2>
      <Link
        className={styles.link}
        to="https://t.me/lrisha25"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ирина
      </Link>
      <img className={styles.photo} src={photo} alt="logo" />
    </div>
  );
}
