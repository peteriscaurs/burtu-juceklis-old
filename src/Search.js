import { useState, useEffect } from "react";
import ScrabbleWordFinder from "./utilities/scrabbleWordFinder";

const Search = () => {
  const [scrabbleWordFinder, setScrabbleWordFinder] = useState(null);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/peteriscaurs/latvian-scrabble-word-list/main/wordList.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const instance = new ScrabbleWordFinder(data.words);
        setScrabbleWordFinder(instance);
      });
  }, []);
  async function f(letters) {
    const promise = new Promise(function (resolve) {
      // the function is executed automatically when the promise is constructed

      // after 1 second signal that the job is done with the result "done"
      const result = scrabbleWordFinder.find(letters);
      resolve(result);
    });
    // const words = scrabbleWordFinder.find(letters)
    // let promise = Promise.resolve(words)
    let result = await promise; // wait until the promise resolves (*)
    return result;
  }
  function onInputchange(e) {
    setInput(e.target.value);
  }
  if (scrabbleWordFinder) {
    return (
      <div>
        {/* {f('ampelēties').then(words => words.map((word) => (
          <div>{word.letters}</div>
        )))} */}
        <div style={{ width: '400px', margin: '1em auto', textAlign: 'center' }}>
            <input
            type="text"
            class="form-control"
            aria-label="Find Scrabble words"
            onChange={onInputchange}
            ></input>
            <button
            type="button"
            class="btn btn-success btn-lg"
            onClick={() => f(input).then((words) => setResults(words))}
            >
            meklēt
            </button>
        </div>
        {results.length !== 0 &&
          results.map((word) => <div>{word.letters}</div>)}
        <div className="table-responsive d-flex justify-content-center">
          <table
            //   style={{ margin: "1em auto", borderRadius: '5px !important' }}
            className="table table-light table-striped rounded w-50"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Meaning</th>
                <th scope="col">Save</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>HLOROGĻŪDEŅRAŽI</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>i</td>
                <td>s</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Peter</td>
                <td>Miller</td>
                <td>@pmo</td>
                <td>i</td>
                <td>s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return null;
};

export default Search;
