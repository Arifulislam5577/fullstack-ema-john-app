import { createContext, useEffect, useState } from "react";
export const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataProvider;