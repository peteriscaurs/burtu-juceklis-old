import { useState } from "react";
import Table from "./Table";
import WordMeaningModal from "./WordMeaningModal";

function SavedWords({ savedWords, removeWord }) {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState("");

  const handleRowClick = (word) => {
    setSelectedWord(word.letters);
    setShouldShowModal(true);
  };

  const handleDeleteButtonClick = (event, word) => {
    event.stopPropagation();
    removeWord(word);
  };

  return (
    <div>
      <Table
        savedWords
        rows={savedWords.map((word) => ({
          word: word.letters,
          length: word.letters.length,
          value: word.value,
          saved: (
            <i
              className="fa fa-times-circle fa-lg"
              onClick={(event) => handleDeleteButtonClick(event, word)}
            ></i>
          ),
          clickEvent: () => handleRowClick(word),
        }))}
      />
      {shouldShowModal && (
        <WordMeaningModal toggle={setShouldShowModal} word={selectedWord} />
      )}
    </div>
  );
}

export default SavedWords;
