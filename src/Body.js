import React from "react";
import "./Body.css";
import { useGlobalState } from "./ContextLayer";
import Header from "./Header";

function Body({ spotifyApi }) {
  const [{ user }, dispatch] = useGlobalState();
  return (
    <div className="body">
      <Header spotifyApi={spotifyApi} />

      <div className="body_info">
        <img src={user?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>decription...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
