import React, { createContext, useContext, useReducer } from "react";

//prepares data/context layer
export const StateContext = createContext();

//provides context to all children components
// the structure of this function is interesting:
//normally we see:
// export const function = () => {}; "returns functionality"
//but this function is:
// export const function = () => (); "simply gives back content"
export const ContextLayer = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//direct variable to let children literally 'use' the context
export const useGlobalState = () => useContext(StateContext);

//at this point I, myself, don't completely understand why the ContextLayer doesn't
//provide all the necessary functionaility. for some reason it only allows the
//children to SEE the context but
