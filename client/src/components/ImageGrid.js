import React from "react";
import useFirestore from "../hooks/useFirestore";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  console.log({ docs });

  return (
    <AwesomeSlider>
      {docs && docs.map(doc => <div data-src={doc.url} />)}
    </AwesomeSlider>
  );
};

export default ImageGrid;
