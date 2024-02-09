import { Outlet } from "react-router-dom";
import { Footer } from "../../ui/components";

export const RegistroRutas = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
