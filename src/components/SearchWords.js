import { useState, useEffect } from "react";
import Table from "./Table";
import WordMeaningModal from "./WordMeaningModal";
import SearchWordsInput from "./SearchWordsInput";

function SearchWords({ wordFinder, saveWord, savedWords }) {
  const [input, setInput] = useState("");
  const [tableRows, setTableRows] = useState(null);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    handleTableRowsChange(input);
  }, [savedWords]);

  const isSaved = (letters) => {
    return savedWords.some((word) => word.letters === letters)
      ? "rgb(141, 212, 122)"
      : "#212121";
  };

  const renderWordSaved = (word) => (
    <i
      className={`fa fa-star fa-lg`}
      style={{ color: `${isSaved(word.letters)}` }}
      onClick={() => saveWord(word)}
    ></i>
  );

  const handleRowClick = (word) => {
    setSelectedWord(word.letters);
    setShouldShowModal(true);
  };

  const handleTableRowsChange = (letters) => {
    if (wordFinder !== null && letters.length !== 0) {
      const res = wordFinder.find(letters);
      const rows = res.map((word) => ({
        word: word.letters,
        length: word.letters.length,
        value: word.value,
        saved: renderWordSaved(word),
        clickEvent: () => handleRowClick(word),
      }));
      setTableRows(rows);
    }
  };

  const onInputchange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchInputOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTableRowsChange(input);
    }
  };

  if (wordFinder !== null) {
    return (
      <div>
        <SearchWordsInput
          onInputchange={onInputchange}
          handleSearchInputOnKeyDown={handleSearchInputOnKeyDown}
          handleTableRowsChange={handleTableRowsChange}
          input={input}
        />
        {tableRows !== null && <Table rows={tableRows} />}
        {shouldShowModal && (
          <WordMeaningModal toggle={setShouldShowModal} word={selectedWord} />
        )}
      </div>
    );
  }
  return null;
}

export default SearchWords;
