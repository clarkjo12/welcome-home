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
      <p>{fireAddress}</p>
      <p>{fireDetails}</p>
      <form>
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={e => setAddress(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="description"
          value={details}
          name="details"
          onChange={e => setDetails(e.target.value)}
        />
      </form>
      <button onClick={handleChange}>Submit</button>
    </div>
  );
};
