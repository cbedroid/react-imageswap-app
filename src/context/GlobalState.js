import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

// initial state
const initialState = {
  image: {
    id: 1,
    defaultImage: "https://www.picsum.photos/400/200/",
    largeTemplate: "https://www.picsum.photos/id/{}/400/200",
    smallTemplate: "https://www.picsum.photos/id/{}/50/50",
  },

  storedImages: [
    { key: 1, id: 1, value: null, className: "no-image" },
    { key: 2, id: 2, value: null, className: "no-image" },
    { key: 3, id: 3, value: null, className: "no-image" },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function updateImage(number) {
    dispatch({
      type: "UPDATE_IMAGE_NUMBER",
      payload: number,
    });
  }
  function updateStoredImage(storedimage) {
    dispatch({
      type: "UPDATE_STOREDIMAGE",
      payload: storedimage,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        image: state.image,
        storedImages: state.storedImages,
        updateImage,
        updateStoredImage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
