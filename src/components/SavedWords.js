import { useState } from "react";
import Table from "./Table";
import WordMeaningModal from "./WordMeaningModal";

function SavedWords({ savedWords, handleDeleteButtonClick }) {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState("");

  const handleRowClick = (word) => {
    setSelectedWord(word);
    setShouldShowModal(true);
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
        <WordMeaningModal
          toggle={setShouldShowModal}
          word={selectedWord}
          selectedWord={selectedWord}
          savedWords={savedWords}
        />
      )}
    </div>
  );
}

export default SavedWords;
