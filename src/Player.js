import React from "react";
import "./Player.css";

import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

export default function Player({ spotifyApi }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotifyApi={spotifyApi} />
        <Footer />
      </div>
    </div>
  );
}
