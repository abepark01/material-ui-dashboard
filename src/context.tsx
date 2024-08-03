import { createContext } from "react";

export const UserContext = createContext({
  company: {
    name: "ACME",
  },
  user: {
    name: "Dean",
  },
});
