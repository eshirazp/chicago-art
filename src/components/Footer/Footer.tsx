import { FunctionComponent } from "react";
import "./Footer.scss";

interface FooterProps {
  text: string;
}

const Footer: FunctionComponent<FooterProps> = ({ text }) => (
  <div className="footer">
    <span>{text}</span>
  </div>
);
export default Footer;
