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
    const hash = getTokenFromURL();
    window.location.hash = "";

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
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotifyObject={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
