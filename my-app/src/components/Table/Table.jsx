import TableRow from "../TableRow/TableRow";
import React, { useState, useContext } from "react";
import { WordsContext } from "../WordsContext/WordsContext";
import styles from "./Table.module.css";

export default function Table() {
  const { words, setWords } = useContext(WordsContext);
  return (
    <div className={styles.table_container}>
      <h2>мой словарик</h2>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th>№</th>
            <th>слово</th>
            <th>транскрипция</th>
            <th>перевод</th>
            <th>редактировать</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <TableRow key={word.id} rowData={word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
