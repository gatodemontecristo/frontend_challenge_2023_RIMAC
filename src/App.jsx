import ReactDOM from "react-dom/client";
import "./estilos/normalize.css";
import "./estilos/App.css";
import { RimacApp } from "./RimacApp";
import { NavBar } from "./ui/components/NavBar";

// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./sass/customBootstrap.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <RimacApp></RimacApp>
  </React.StrictMode>
);
