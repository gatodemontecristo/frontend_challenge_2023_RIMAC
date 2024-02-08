import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RegistroHijoRutas, RegistroRutas } from "../registro";

const router = createBrowserRouter([
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
