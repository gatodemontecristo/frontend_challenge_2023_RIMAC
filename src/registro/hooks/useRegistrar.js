import { authReducer } from "../context";
import { types } from "../types/types";
import { useReducer } from "react";
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    autentico: !!user,
    user: user,
  };
};
export const useRegistrar = () => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const registrar = (name = "", lastName = "", birthDay = "", phone = "", document = "") => {
    const user = { name, lastName, birthDay,phone,document };
    const action = {
      type: types.registrar,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const salir = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.salir,
    };
    dispatch(action);
  };

  return {
    authState,
    registrar,
    salir
  };
};
