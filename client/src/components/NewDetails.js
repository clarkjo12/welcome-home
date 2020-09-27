import React, { useState, useEffect } from "react";
import { app } from "../firebase/config";

export const DetailInput = ({ currentAlbum }) => {
  //   const [name, setName] = React.useState(spell.name);

  const [address, setAddress] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [fireAddress, setFireAddress] = React.useState("");
  const [fireDetails, setFireDetails] = React.useState("");

  const db = app.firestore();

  useEffect(() => {
    const unmount = db
      .collection("albums")
      .doc(currentAlbum)
      .onSnapshot(doc => {
        if (doc.data().description.address === null) return;

        setFireAddress(doc.data().description.address || []);
        setFireDetails(doc.data().description.details || "");
      });
    return unmount;
  }, []);

  const handleChange = () => {
    db.collection("albums")
      .doc(currentAlbum)
      .update({
        description: {
          address: address,
          details: details
        }
      });
  };
  return (
    <div>
      <p className="mont-bold fire-addy shadow">{fireAddress}</p>
      <br />
      <p className="mont-bold fire-dets">{fireDetails}</p>
      <br />
      <form className="input-form">
        <input
          className="mont-bold-gray"
          type="text"
          placeholder="address"
          name="address"
          onChange={e => setAddress(e.target.value)}
        />
        <textarea
          type="text"
          className="mont-bold-gray input-details"
          placeholder="description"
          value={details}
          name="details"
          onChange={e => setDetails(e.target.value)}
        />
      </form>
      <button className="info-submit mont-bold" onClick={handleChange}>
        Submit
      </button>
    </div>
  );
};
