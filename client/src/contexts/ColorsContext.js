import { createContext, useState } from "react";

const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState("#fff");

  const values = {
    colors,
    setColors,
  };
  return (
    <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
  );
};
export default ColorContext;
