import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegistroHijoRutas, RegistroRutas } from "../registro";
import { CotizarHijoRutas, CotizarRutas } from "../planes";
import { PrivateRoute } from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/cotizar",
    element:<PrivateRoute><CotizarRutas></CotizarRutas></PrivateRoute>,
    children: CotizarHijoRutas
  },  
  {
      path: "/",
      element:<RegistroRutas></RegistroRutas>,
      children: RegistroHijoRutas
    }
   
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
