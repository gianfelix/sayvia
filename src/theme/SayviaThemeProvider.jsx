import React, { createContext, useContext } from "react";
import sayviaTheme from "./sayviaTheme";

const ThemeContext = createContext(sayviaTheme);

export const SayviaThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={sayviaTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useSayviaTheme = () => useContext(ThemeContext);