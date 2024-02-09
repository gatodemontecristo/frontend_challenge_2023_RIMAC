import { Navigate } from "react-router-dom";
import { PlanesPagina, ResumenPagina } from "../pages";
export const CotizarHijoRutas = [
    { path: "planes", element: <PlanesPagina></PlanesPagina> },
    { path: "resumen", element: <ResumenPagina></ResumenPagina> },
    { path: "/cotizar/*", element: <Navigate to="/planes" /> },
    { path: "/cotizar/", element: <Navigate to="/planes" /> },
  ];
