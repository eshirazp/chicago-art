import { FunctionComponent } from "react";
import { INavBar } from "./Header.types";
import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
  logo: string;
  links: INavBar[];
}

const Header: FunctionComponent<HeaderProps> = ({ logo, links }) => {
  function handleClick() {
    document.body.classList.toggle("dark");
  }

  return (
    <div className="header">
      <div className="navigation">
        <Link to="/">
          <img src={logo} alt="aic logo" />
        </Link>
        {links.map((link: INavBar) => (
          <Link className="link" key={link.text} to={link.link}>
            <span key={link.text}>{link.text}</span>
          </Link>
        ))}
      </div>
      {/* Elush- dark mode support, more details in the Readme */}
      <div className="darkMode">
        <div onClick={handleClick} className="dot"></div>
      </div>
    </div>
  );
};

export default Header;
