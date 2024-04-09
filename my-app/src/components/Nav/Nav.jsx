import React from "react";
import harrie from "./Harrie.jpg";
import germiona from "./germiona.jpg";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={harrie} alt="Harrie" />
      <Link className={styles.link} to="/">
        тренажёр
      </Link>
      <Link className={styles.link} to="/table">
        словарик
      </Link>
      <Link className={styles.link} to="/more">
        ещё
      </Link>
      <img src={germiona} alt="Germiona" />
    </div>
  );
}
