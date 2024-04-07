import React from "react";
import queen from "./queen.jpg";
import animals from "./animals.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={animals} className={styles.image} alt="animals" />
      <h1>SMART VOCABULARY</h1>
      <img src={queen} className={styles.image} alt="queen" />
    </div>
  );
}
