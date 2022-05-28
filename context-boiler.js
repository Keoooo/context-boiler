import React, { useState, createContext } from "react";

//basic boilerplate for use context set up
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

//will need to wrap <nameOfProvider><Component {...pageProps} /><nameOfProvider/> in _app
// in components  import { useWallet } from "..... location "";
//  const { } = useWallet();  deconstruct values needed
