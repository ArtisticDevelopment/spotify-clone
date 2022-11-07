export const initialState = {
  user: null,

  //change token back to null after developing
  token:
    "BQA6S5xwa9ChJ7Em_DvH35hdMuJmnc501LA9WuUph5CvpJeYl3B6OXv_XMJam_b-QfpqCNMUByt47lAu3jN2mWSMzrYiDIIoTTqspB-eKMylGALsrvit1g4b2gzbgWHOiZRDBkc8_8GXC1u0HbUQ8NimZZChc6ftQKRTnSNKXmAu3XpXWrI3UwMORs8d",
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
    default:
      return state;

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
  }
};

export default reducer;
