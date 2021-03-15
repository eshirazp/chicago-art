import { FunctionComponent, MouseEvent } from "react";
import "./Dropdown.scss";

interface IDropdownProps {
  title: string;
  handleClick: (e: MouseEvent) => void;
  options?: string[];
}

const Dropdown: FunctionComponent<IDropdownProps> = ({
  title,
  handleClick,
  options = [],
}) => (
  <nav className="dropdown-wrapper" role="navigation">
    <ul>
      <li className="title">
        <p>{title}</p>
        <ul onClick={handleClick} className="dropdown">
          {options.map((option) => {
            return (
              <li key={option}>
                <p>{option}</p>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  </nav>
);

export default Dropdown;
