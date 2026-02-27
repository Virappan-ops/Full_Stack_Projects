import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Guest",
    isPro: false,
  });

  const toggleProStatus = () => {
    setUser((prev) => ({ ...prev, isPro: !prev.isPro }));
  };

  return (
    <AppContext.Provider value={{ user, toggleProStatus }}>
      {children}
    </AppContext.Provider>
  );
};