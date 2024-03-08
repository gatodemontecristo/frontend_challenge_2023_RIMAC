import { useRegistrar } from "../hooks";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const { authState, registrar,actualizar,seleccionar, salir } = useRegistrar();

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        registrar: registrar,
        actualizar: actualizar,
        seleccionar: seleccionar,
        salir: salir,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
