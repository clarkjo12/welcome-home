import React, { useState, useEffect } from "react";
import HouseDetails from "../data/houses.json";
import "react-awesome-slider/dist/styles.css";
import useFirestore from "../hooks/useFirestore";
import AwesomeSlider from "react-awesome-slider";
import { app } from "../firebase/config";

const db = app.firestore();

const HouseCard = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const unmount = db
      .collection("albums")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const tempAlbums = [];
        snapshot.forEach(doc => {
          tempAlbums.push({ ...doc.data(), id: doc.id });
        });
        setAlbums(tempAlbums);
      });
    return unmount;
  }, []);

  console.log({ albums });
  return (
    <div>
      {albums.map(album => {
        return (
          <div className="main-house-card">
            <div className="line"></div>
            <p className="house-address mont-bold shadow">
              {album.description.address}{" "}
            </p>
            <div className="slider">
              <AwesomeSlider>
                {album.images &&
                  album.images.map(images => <div data-src={images.url} />)}
              </AwesomeSlider>
            </div>
            <p className="house-descrip mont-reg shadow">
              {album.description.details}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HouseCard;
