import { FunctionComponent } from "react";
import "./Banner.scss";
import banner from "../../assets/banner.webp";

const Banner: FunctionComponent = () => (
  <div className="banner">
    <img src={banner} alt="aic logo" />
    <div className="container">
      <h1>{"Art Institute"}</h1>
      <h1>{"of"}</h1>
      <h1>{"Chicago"}</h1>
    </div>
  </div>
);

export default Banner;
