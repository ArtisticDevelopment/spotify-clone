export const initialState = {
  user: null,

  //change token back to null after developing
  token: null,
  song: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
