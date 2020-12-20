import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config.json";
import Nav from "./components/Nav";
import SearchWords from "./components/SearchWords";
import SavedWords from "./components/SavedWords";
import "./App.scss";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import endpoints from "./endpoints";
import ScrabbleWordFinder from "./utilities/scrabbleWordFinder";
import useLocalStorage from "./components/useLocalStorage";
import _ from "lodash";

const App = () => {
  const [scrabbleWordFinder, setScrabbleWordFinder] = useState(null);
  const [savedWords, setSavedWords] = useLocalStorage("savedWords", []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = null;
    try {
      const response = await fetch(endpoints.latvianScrabbleWordList);
      data = await response.json();
      const wordFinder = new ScrabbleWordFinder(data.words);
      setScrabbleWordFinder(wordFinder);
    } catch (error) {
      console.log("Ooops...", error);
    }
    return data;
  };

  const saveWord = (word) => {
    const savedWordsCopy = [].concat(savedWords);
    const newSavedWords = savedWordsCopy.concat(word);
    setSavedWords(newSavedWords);
    return savedWords;
  };

  const removeWord = (word) => {
    const savedWordsCopy = [].concat(savedWords);
    const newSavedWords = _.remove(
      savedWordsCopy,
      (currentWord) => currentWord.letters !== word.letters
    );
    setSavedWords(newSavedWords);
    return savedWords;
  };

  return (
    <Router>
      <div className="top-line"></div>
      <Particles className="particles" params={particlesConfig} />
      <h1 className="title" style={{ marginBottom: "0.1em" }}>
        Burtu Juceklis
      </h1>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/par" />
        </Route>
        <Route path="/par"></Route>
        <Route path="/meklet">
          <SearchWords
            wordFinder={scrabbleWordFinder}
            saveWord={saveWord}
            savedWords={savedWords}
          />
        </Route>
        <Route path="/saglabatie">
          <SavedWords savedWords={savedWords} removeWord={removeWord} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
