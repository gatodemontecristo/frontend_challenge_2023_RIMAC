import { useRegistrar } from "../hooks";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const { authState, registrar, salir } = useRegistrar();

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        registrar: registrar,
        salir: salir,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
