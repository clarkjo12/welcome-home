import React from "react";
import { Link } from "react-router-dom";
import { NewAlbumForm } from "./NewAlbumForm";

export const Home = ({ albums }) => {
  return (
    <div className="admin">
      <p className="admin-title">Listings</p>
      <footer>
        <NewAlbumForm />
      </footer>
      <section>
        {albums.map(album => (
          <Link to={`/${album.id}`}>
            <div className="listing" key={album.name}>
              <img
                className="album-cover"
                src={album.images ? album.images[0].url : ""}
                alt="album"
              />
              <h3 className="album-title">{album.name}</h3>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
