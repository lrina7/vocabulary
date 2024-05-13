import TableRow from "../TableRow/TableRow";
import AddNewWord from "../AddNewWord/AddNewWord";
import React, { useContext } from "react";
import { WordsContext } from "../WordsContext/WordsContext";
import styles from "./Table.module.css";

export default function Table() {
  const { words, loading } = useContext(WordsContext);

  return (
    <div>
      {loading ? (
        <div id="floatingBarsG" className={styles.spinner}>
          Loading...
          <div className={styles.blockG} id="rotateG_01"></div>
          <div className={styles.blockG} id="rotateG_02"></div>
          <div className={styles.blockG} id="rotateG_03"></div>
          <div className={styles.blockG} id="rotateG_04"></div>
          <div className={styles.blockG} id="rotateG_05"></div>
          <div className={styles.blockG} id="rotateG_06"></div>
          <div className={styles.blockG} id="rotateG_07"></div>
          <div className={styles.blockG} id="rotateG_08"></div>
        </div>
      ) : (
        <div className={styles.table_container}>
          <h2>мой словарик</h2>
          <AddNewWord />
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
      )}
    </div>
  );
}
