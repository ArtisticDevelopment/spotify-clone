export const initialState = {
  user: null,

  //change token back to null after developing
  token:
    "--eKMylGALsrvit1g4b2gzbgWHOiZRDBkc8_8GXC1u0HbUQ8NimZZChc6ftQKRTnSNKXmAu3XpXWrI3UwMORs8d",
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action); //debugging tip
  //Action --> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
