import React from "react";
import harrie from "./Harrie.jpg";
import germiona from "./germiona.jpg";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={harrie} alt="Harrie" />
      <h3>игра</h3>
      <h3>словарик</h3>
      <h3>ещё</h3>
      <img src={germiona} alt="Germiona" />
    </div>
  );
}
