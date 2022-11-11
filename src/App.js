import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useGlobalState } from "./ContextLayer";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useGlobalState();

  //onload
  useEffect(() => {
    //in spotify.js
    const hash = getTokenFromURL();

    //hides the token from public url
    window.location.hash = "";

    //local variable for storing online-token
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((spotifyUser) => {
        dispatch({
          type: "SET_USER",
          user: spotifyUser,
        });
      });
      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotifyApi.getPlaylist("37i9dQZEVXcPUQwVhtaGdo").then((discover_weekly) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
