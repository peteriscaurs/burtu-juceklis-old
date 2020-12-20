function SearchWordsInput({
  onInputchange,
  handleSearchInputOnKeyDown,
  handleTableRowsChange,
  input,
}) {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "1em auto",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="maize"
        className="form-control text-input"
        aria-label="Atrodi Scrabble vardus"
        onChange={onInputchange}
        onKeyDown={handleSearchInputOnKeyDown}
      ></input>
      <button
        type="button"
        className="btn btn-primary btn-md"
        onClick={() => handleTableRowsChange(input)}
      >
        <i className="fa fa-search fa-lg"></i>
      </button>
    </div>
  );
}

export default SearchWordsInput;
