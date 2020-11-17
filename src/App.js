import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./particlesjs-config.json";
import Nav from "./Nav";
import Search from './Search';
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="top-line"></div>
      <Particles className="particles" params={particlesConfig} />
      <h1 className="title">Burtu Juceklis</h1>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/par" />
        </Route>
        <Route path="/par"></Route>
        <Route path="/meklet"><Search /></Route>
        <Route path="/saglabatie"></Route>
      </Switch>
    </Router>
  );
};

export default App;
