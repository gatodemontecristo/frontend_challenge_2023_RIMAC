import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegistroHijoRutas, RegistroRutas } from "../registro";
import { CotizarHijoRutas, CotizarRutas } from "../planes";

const router = createBrowserRouter([
  {
    path: "/cotizar",
    element:<CotizarRutas></CotizarRutas>,
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
