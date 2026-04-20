import { createContext, useState } from "react";
import { tutors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = "https://tutor-backend-6djl.onrender.com";
  const [token, setToken] = useState(
   localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const value = {
    tutors,
    backendUrl,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

//
