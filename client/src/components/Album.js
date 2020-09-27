import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { NewPhoto } from "./NewPhoto";
import { DetailInput } from "./NewDetails";
import { app } from "../firebase/config";
import StackGrid from "react-stack-grid";

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
    <div className="album ">
      <section className="album-div">
        <header>
          <h1 className="admin-title mont-bold shadow">{albumName}</h1>
          <p className="back-button mont-bold">
            Back to <Link to="/admin">Albums</Link>
          </p>
        </header>{" "}
        <DetailInput currentAlbum={album} />
        <footer className="uploader">
          <NewPhoto currentAlbum={album} />
        </footer>
        <StackGrid columnWidth={150}>
          {images.map(image => (
            <aside key={image.name}>
              <img className="single-image" src={image.url} alt="album" />
            </aside>
          ))}
        </StackGrid>
      </section>
    </div>
  );
};
