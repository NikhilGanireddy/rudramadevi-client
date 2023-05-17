import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [bgColor, setBgColor] = useState(true);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        console.log({ data });
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, bgColor, setBgColor }}>
      {children}
    </UserContext.Provider>
  );
}
