import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav justify-content-center">
    <Link className="nav-link white-text" to="/par">
      Par
    </Link>
    <Link className="nav-link white-text active" to="/meklet">
      Meklēt
    </Link>
    <Link className="nav-link white-text" to="/saglabatie">
      Saglabātie
    </Link>
  </nav>
);

export default Nav;
