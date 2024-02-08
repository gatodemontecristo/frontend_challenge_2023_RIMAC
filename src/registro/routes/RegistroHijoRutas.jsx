import { Navigate } from "react-router-dom";
import { RegistroPagina } from "../pages";

export const RegistroHijoRutas = [
  { path: "registro", element: <RegistroPagina></RegistroPagina> },
  { path: "/*", element: <Navigate to="/registro" /> },
  { path: "/", element: <Navigate to="/registro" /> },
];
