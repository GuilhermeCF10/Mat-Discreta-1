// Importing Uses from React
import React, { useState, createContext, useEffect, useContext } from "react";
// ===============================================================

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Setting Main Auth Context
interface GeneralContextData {
  authenticated: boolean;
  loading: boolean;
  modalStatus: boolean;
  setModalStatus(e: any): any;
  setLoading(e: any): any;
  makeAuthentication(e: any): any;
} // ===============================================================

// Creating the auth context
const GeneralContext = createContext<GeneralContextData>(
  {} as GeneralContextData
);

export const GeneralProvider: React.FC = ({ children }) => {
  // Initial States General
  const initialStateGeneral = {
    loading: true,
    authenticated: false,
    modal: false,
  };

  // States
  const [loading, setLoading] = useState(initialStateGeneral.loading);
  const [authenticated, setAuthenticated] = useState(
    initialStateGeneral.authenticated
  );
  const [modalStatus, setModalStatus] = useState(initialStateGeneral.modal);

  console.log(authenticated);

  // UseEffect to be executed when it's starts
  // useEffect( () => {

  //     setTimeout( () => setLoading(false), 1000)

  // async function getProperties() {

  //     const { data } = await api.get("properties")

  //     setProperties(data);
  // }

  async function makeAuthentication(password: string) {
    if (password === "matematicadiscreta1") {
      setAuthenticated(true);
      setModalStatus(false);

      return toast.success("Sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return toast.error("Senha inválidos.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  // getProperties();
  // async function loadStoragedData() {

  //     const storagedUserInfo = await AsyncStorage.getItem("@RFID:user");
  //     const storagedToken = await AsyncStorage.getItem("@RFID:token");

  //     if ( storagedUserInfo && storagedToken ) {

  //         api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

  //         setUser(JSON.parse(storagedUserInfo));

  //         setAuthenticated(true);
  //     }

  //     setLoading(false);

  // loadStoragedData();
  // }, [])

  return (
    <GeneralContext.Provider
      value={{
        loading,
        setLoading,
        authenticated,
        makeAuthentication,
        modalStatus,
        setModalStatus,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export function useGeneral() {
  const context = useContext(GeneralContext);

  return context;
}
