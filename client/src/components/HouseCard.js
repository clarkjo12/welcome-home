import React from "react";
import Slider from "./Slider";

export default class HouseSlider extends React.PureComponent {
  render() {
    return (
      <div className="main-house-card">
        <div className="line"></div>
        <p className="house-address mont-bold shadow">
          2001 Newark Ave. Fayettville, NC
        </p>
        <div className="slider">
          <Slider />
        </div>
        <p className="house-descrip mont-reg shadow">
          {" "}
          3 bed, 1 bath, some new carpet already put in,  Nice corner lot with
          fairly private driveway. Home needs few repairs such as window
          replaced; but all in pretty decent home.
        </p>
      </div>
    );
  }
}
