import React from "react";
import harrie from "./Harrie.jpg";
import germiona from "./germiona.jpg";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img src={harrie} alt="Harrie" />
      <Link to="/">игра-тренажёр</Link>
      <Link to="/table">словарик</Link>
      <Link to="/more">ещё</Link>
      <img src={germiona} alt="Germiona" />
    </div>
  );
}
