import React, { useState } from "react";
import styles from "./TableRow.module.css";

export default function TableRow({ rowData }) {
  const { id, english, transcription, russian } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }

  function handleSave() {
    setValue({ ...value });
    setIsSelected(!isSelected);
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  return isSelected ? (
    <tr className={styles.row}>
      <td>
        <td>{id}</td>
      </td>

      <td>
        <input
          type="text"
          value={value.english}
          name={"english"}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type="text"
          value={value.transcription}
          name={"transcription"}
          onChange={handleChange}
        />
      </td>

      <td>
        <input
          type="text"
          value={value.russian}
          name={"russian"}
          onChange={handleChange}
        />
      </td>
      <button onClick={handleSave} className={styles.buttonSave}>
        Save
      </button>
      <button onClick={handleClose} className={styles.buttonClose}>
        Close
      </button>
    </tr>
  ) : (
    <tr className={styles.row}>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <td className={styles.button}>
          <button onClick={handleEdit} className={styles.buttonEdit}>
            Edit
          </button>
          <button className={styles.buttonDelete}>Delete</button>
        </td>
      </td>
    </tr>
  );
}
