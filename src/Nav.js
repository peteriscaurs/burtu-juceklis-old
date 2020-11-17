import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav justify-content-center">
    <Link className="nav-link white-text" to="/par">
      PAR
    </Link>
    <Link className="nav-link white-text active" to="/meklet">
      MEKLĒT
    </Link>
    <Link className="nav-link white-text" to="/saglabatie">
      SAGLABĀTIE
    </Link>
  </nav>
);

export default Nav;
