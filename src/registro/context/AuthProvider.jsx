import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";



const init = () => {
  const celular = JSON.parse(localStorage.getItem("celular"));

  return {
    dni: !!celular,
    celular: celular,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const registrar = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const salir = () =>{
    localStorage.removeItem('user');
    const action = {
      type: types.logout
    };
    dispatch(action);
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        registrar: registrar,
        salir:salir
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};