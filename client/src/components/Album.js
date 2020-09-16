import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { NewPhoto } from "./NewPhoto";
import { app } from "../firebase/config";

const db = app.firestore();

export const Album = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const match = useRouteMatch("/:album");
  const { album } = match.params;

  useEffect(() => {
    const unmount = db
      .collection("albums")
      .doc(album)
      .onSnapshot(doc => {
        setImages(doc.data().images || []);
        setAlbumName(doc.data().name);
      });
    return unmount;
  }, []);

  return (
    <div className="album">
      <section>
        <header>
          <h1 className="admin-title">{albumName}</h1>
          <p className="back-button">
            Back to <Link to="/admin">Albums</Link>
          </p>
        </header>{" "}
        <footer className="uploader">
          <NewPhoto currentAlbum={album} />
        </footer>
        {images.map(image => (
          <aside key={image.name}>
            <img className="single-image" src={image.url} alt="album" />
          </aside>
        ))}
      </section>
    </div>
  );
};
