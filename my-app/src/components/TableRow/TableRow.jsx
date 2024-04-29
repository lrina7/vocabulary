import React, { useState, useContext } from "react";
import { WordsContext } from "../WordsContext/WordsContext";
import styles from "./TableRow.module.css";

export default function TableRow({ rowData }) {
  const { words, setWords } = useContext(WordsContext);
  const { handleSave } = useContext(WordsContext);
  const { id, english, transcription, russian } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({
    id: id,
    english,
    transcription,
    russian,
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

  function handleSaveWord() {
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
      handleSave(value, value.id);
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        ` http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      console.log("delete id", id);
      setWords(words.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

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
        onClick={handleSaveWord}
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
          <button onClick={handleDelete} className={styles.buttonDelete}>
            Delete
          </button>
        </td>
      </td>
    </tr>
  );
}
