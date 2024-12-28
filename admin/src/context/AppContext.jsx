// AppContext.jsx
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl= import.meta.env.VITE_BACKEND_URL
  const [token, setToken] = useState(localStorage.getItem("token") || "");

   const [appointments,setAppointments] = useState([])
    

  const value = {
    token,
    setToken,
    backendUrl
  };

  return <AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>;
};

export default AppContextProvider;