import React, { useState } from "react";
import { timestamp, app } from "../firebase/config";

const db = app.firestore();

export const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = e => {
    setAlbumName(e.target.value);
  };

  const onAlbumCreate = () => {
    if (!albumName) {
      return;
    }
    const createdAt = timestamp();
    db.collection("albums")
      .doc(albumName)
      .set({
        name: albumName,
        description: {
          address: "",
          details: ""
        },
        createdAt
      });
    setAlbumName("");
  };

  return (
    <>
      <input value={albumName} onChange={onAlbumNameChange} type="text" />
      <button className="mont-bold-gray" onClick={onAlbumCreate}>
        Create album
      </button>
    </>
  );
};
