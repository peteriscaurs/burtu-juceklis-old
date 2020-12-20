import { useState, useEffect } from "react";
import Table from "./Table";
import WordMeaningModal from "./WordMeaningModal";
import SearchWordsInput from "./SearchWordsInput";

function SearchWords({ wordFinder, handleSaveButtonClick, savedWords }) {
  const [searchInput, setSearchInput] = useState("");
  const [tableRows, setTableRows] = useState(null);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [selectedWord, setSelectedWord] = useState({});

  useEffect(() => {
    handleTableRowsChange(searchInput);
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
    ></i>
  );

  const handleRowClick = (word) => {
    setSelectedWord(word);
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
    setSearchInput(e.target.value);
  };

  const handleSearchInputOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTableRowsChange(searchInput);
    }
  };

  if (wordFinder !== null) {
    return (
      <div>
        <SearchWordsInput
          onInputchange={onInputchange}
          handleSearchInputOnKeyDown={handleSearchInputOnKeyDown}
          handleTableRowsChange={handleTableRowsChange}
          searchInput={searchInput}
        />
        <Table rows={tableRows} />
        {shouldShowModal && (
          <WordMeaningModal
            toggle={setShouldShowModal}
            selectedWord={selectedWord}
            handleSaveButtonClick={handleSaveButtonClick}
            savedWords={savedWords}
          />
        )}
      </div>
    );
  }
  return null;
}

export default SearchWords;
