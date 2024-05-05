import React, { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allPalettes,setAllPalettes] = useState([])
  let values = {
    allPalettes,
    setAllPalettes,
  };

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};
