import pic1 from "../images/newark9.png";
import pic2 from "../images/newark4.png";
import pic3 from "../images/newark5.png";
import pic4 from "../images/newark6.png";
import pic5 from "../images/newark7.png";
import pic6 from "../images/newark8.png";
import pic7 from "../images/newark1.png";

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slider = () => (
  <AwesomeSlider>
    <div className="pics" data-src={pic7} />
    <div data-src={pic1} />
    <div data-src={pic2} />
    <div data-src={pic3} />
    <div data-src={pic4} />
    <div data-src={pic5} />
    <div data-src={pic6} />
  </AwesomeSlider>
);

export default slider;
