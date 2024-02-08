import { Outlet } from "react-router-dom";
import { Footer } from "../../ui/components/Footer";

export const RegistroRutas = () => {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
