//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientId = "5c5fb27379954cbc9b3cf70b627e8268";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//pulling accessToken from URL
export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1) // removes # from url string
    .split("&") // creates array
    .reduce((initial, item) => {
      let parts = item.split("="); //removes accessToken from string
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
