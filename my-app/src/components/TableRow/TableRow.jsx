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

  const [errors, setErrors] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }

  function handleSave() {
    const newErrors = {
      english: !/^[\p{Script=Latin}\s]+$/u.test(value.english)
        ? "Используйте только английские буквы!"
        : false,
      russian: !/^[\p{Script=Cyrillic}\s]+$/u.test(value.russian)
        ? "Используйте только русские буквы!"
        : false,
    };
    const hasErrors = Object.values(newErrors).some((error) => error !== false);
    if (!hasErrors) {
      setValue({ ...value });
      setIsSelected(false);
    }
    setErrors(newErrors);
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });

    setErrors({
      ...errors,
      [event.target.name]:
        event.target.value.trim() === ""
          ? "Поля должны быть заполнены!"
          : false,
    });
  }

  const isBtndesabled = Object.values(errors).some((elem) => elem);

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
          className={errors.english ? styles.error_border : ""}
        />
        <p>{errors.english}</p>
      </td>

      <td>
        <input
          type="text"
          value={value.transcription}
          name={"transcription"}
          onChange={handleChange}
          className={errors.transcription ? styles.error_border : ""}
        />
        <p>{errors.transcription}</p>
      </td>

      <td>
        <input
          type="text"
          value={value.russian}
          name={"russian"}
          onChange={handleChange}
          className={errors.russian ? styles.error_border : ""}
        />
        <p>{errors.russian}</p>
      </td>
      <button
        onClick={handleSave}
        className={styles.buttonSave}
        disabled={isBtndesabled}
      >
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
