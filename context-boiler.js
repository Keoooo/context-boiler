import React, { useState, createContext } from "react";

export const nameOfContext = createContext();

export const nameOfProvider = (props) => {
  const value = {};
  return <WalletContextProvider value={value} {...props} />;
};

export const useWallet = () => {
  const context = useContext(nameOfContext);
  if (context === undefined) {
    throw new Error(`nameOfContext must be used within a nameOfProvider.`);
  }
  return context;
};
