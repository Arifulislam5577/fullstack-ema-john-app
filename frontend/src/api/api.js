import { createContext } from "react";
export const DataContext = createContext();

const API = ({ children }) => {
  return <DataContext.Provider>{children}</DataContext.Provider>;
};

export default API;
