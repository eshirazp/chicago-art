import { FunctionComponent } from "react";
import { Header, INavBar } from "../components/Header";
import { Footer } from "../components/Footer";
import logo from "../assets/logo.webp";
import "./DefaultTemplate.scss";

const links: INavBar[] = [
  {
    text: "Gallery",
    link: "/gallery",
  },
];

/** Elush- all pages will follow this format to ensure a consistent look throughout the app */
const DefaultTemplate: FunctionComponent = ({ children }) => (
  <div className="App">
    <Header logo={logo} links={links} />
    <div className="app-content">{children}</div>
    <Footer text={"Worked on by Elush Shirazpour"} />
  </div>
);

export default DefaultTemplate;
