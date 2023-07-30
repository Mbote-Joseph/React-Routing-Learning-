import { Link } from "react-router-dom";
import logo from "./../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div>
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <ul>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="about">
          About
        </Link>
        <Link className="link" to="contact">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Header;
