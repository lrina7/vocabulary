import React, { createContext, useState, useEffect } from "react";

const API_ALL_WORDS = "http://itgirlschool.justmakeit.ru/api/words";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(API_ALL_WORDS);
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      setWords(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const updateWord = async (id, updatedWord) => {
    const body = {
      id: id,
      english: updatedWord.english,
      russian: updatedWord.russian,
      transcription: updatedWord.transcription,
      tags: "",
      tags_json: '[""]',
    };
    try {
      const response = await fetch(`${API_ALL_WORDS}/${id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      setWords((prevWords) =>
        prevWords.map((word) => (word.id === id ? data : word))
      );
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const deleteWord = async (wordId) => {
    try {
      const response = await fetch(`${API_ALL_WORDS}/${wordId}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      console.log(words);
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <WordsContext.Provider
      value={{ words, setWords, loading, setLoading, updateWord, deleteWord }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export { WordsProvider, WordsContext };
