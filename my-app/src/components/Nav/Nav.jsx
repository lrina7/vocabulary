import React from "react";
import harrie from "./Harrie.jpg";
import germiona from "./germiona.jpg";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={harrie} alt="Harrie" />
      <h2>игра</h2>
      <h2>словарик</h2>
      <h2>ещё</h2>
      <img src={germiona} alt="Germiona" />
    </div>
  );
}
