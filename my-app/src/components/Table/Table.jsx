import TableRow from "../TableRow/TableRow";
import words from "../../constants/words.js";
import styles from "./Table.module.css";

export default function Table() {
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
