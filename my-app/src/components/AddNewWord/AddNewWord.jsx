import { useState, useEffect, useContext } from "react";
import styles from "../AddNewWord/AddNewWord.module.css";
import { WordsContext } from "../WordsContext/WordsContext";

export default function AddNewWord() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [text, setText] = useState({
    id: "",
    english: "",
    transcription: "",
    russian: "",
  });
  const [editedText, setEditedText] = useState("");
  const { words, setWords } = useContext(WordsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditedText({ ...text });
    postNewWord();
    setIsSubmit(true);
    setText({
      id: "",
      english: "",
      transcription: "",
      russian: "",
    });
    setIsSubmitDisabled(true);
  };

  const checkEmptyLines = () => {
    setIsSubmitDisabled(
      text.english.trim() === "" ||
        text.transcription.trim() === "" ||
        text.russian.trim() === ""
    );
  };
  useEffect(() => {
    checkEmptyLines();
  }, [text]);

  const handleChange = (event) => {
    setEditedText("");
    setIsSubmitDisabled(false);
    setIsSubmit(false);
    setText((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };

  const postNewWord = async () => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/add`,
        {
          method: "POST",
          body: JSON.stringify(text),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to ADD task");
      }
      text.id = Math.floor(Math.random() * 100000);
      setWords([...words, text]);
    } catch (error) {
      console.error("Error ADDING task:", error);
    }
  };

  return (
    <div className={styles.form_wrapper} onSubmit={handleSubmit}>
      <form className={styles.form}>
        <input
          className={styles.form_input}
          onChange={handleChange}
          name="english"
          value={text.english}
          placeholder="английское слово"
        />

        <input
          className={styles.form_input}
          onChange={handleChange}
          name="transcription"
          value={text.transcription}
          placeholder="транскрипция"
        />

        <input
          className={styles.form_input}
          onChange={handleChange}
          name="russian"
          value={text.russian}
          placeholder="перевод"
        />

        <input
          className={styles.button_input}
          type="submit"
          disabled={isSubmitDisabled}
          value="добавить"
        />
      </form>

      <div className={isSubmit ? styles.newWord : styles.newWord__off}>
        <b>Вы добавили новое слово:</b>
        <br /> слово: {editedText.english}
        <br /> транскрипция: {editedText.transcription}
        <br /> перевод: {editedText.russian}
      </div>
    </div>
  );
}
