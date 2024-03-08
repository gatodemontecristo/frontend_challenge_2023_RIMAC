import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../registro/context";

export const PrivateRoute = ({children}) => {

    const { autentico } = useContext(AuthContext);

    return (autentico)
    ? children
    : <Navigate to="/registro"></Navigate>
}