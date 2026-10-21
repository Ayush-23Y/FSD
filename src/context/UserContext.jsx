import { createContext } from "react";

export const UserContext = createContext("Ayush");

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value="Ayush">
      {children}
    </UserContext.Provider>
  );
}