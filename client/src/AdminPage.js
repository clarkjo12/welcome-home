import React, { useState, useEffect } from "react";
import { NewAlbumForm } from "./components/NewAlbumForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { app } from "./firebase/config";
import { Album } from "./components/Album";
import { Home } from "./components/Home";

const db = app.firestore();

function AdminPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const unmount = db.collection("albums").onSnapshot(snapshot => {
      const tempAlbums = [];
      snapshot.forEach(doc => {
        tempAlbums.push({ ...doc.data(), id: doc.id });
      });
      setAlbums(tempAlbums);
    });
    return unmount;
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/admin" render={() => <Home albums={albums} />} />
        <Route path="/:album" component={Album} />
      </Switch>
    </Router>
  );
}

export default AdminPage;
