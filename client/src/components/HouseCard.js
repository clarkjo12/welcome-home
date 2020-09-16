import React from "react";
import HouseDetails from "../data/houses.json";
import "react-awesome-slider/dist/styles.css";
import ImageGrid from "./ImageGrid";

export default class HouseCard extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          {HouseDetails.map((houseDetails, index) => {
            return (
              <div className="main-house-card">
                <div className="line"></div>
                <p className="house-address mont-bold shadow">
                  {houseDetails.address}{" "}
                </p>
                <div className="slider">
                  <ImageGrid />
                </div>
                <p className="house-descrip mont-reg shadow">
                  {houseDetails.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
