import { authReducer } from "../context";
import { types } from "../types/types";
import { useReducer } from "react";
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    autentico: !!user,
    user: user ?? {},
  };
};
export const useRegistrar = () => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const registrar = (phone = "", document = "") => {
    const user = { phone, document };

    const action = {
      type: types.registrar,
      payload: { phone, document },
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const actualizar = (name = "", lastName = "", birthDay = "") => {
    const user = { name, lastName, birthDay };
    const action = {
      type: types.actualizar,
      payload: { name, lastName, birthDay },
    };
    //  localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const seleccionar = (plan = "", costo = "") => {
    const user = { plan, costo };
    const action = {
      type: types.seleccionar,
      payload: { plan, costo },
    };
    //  localStorage.setItem("user", JSON.stringify(user));
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
    actualizar,
    seleccionar,
    salir,
  };
};
