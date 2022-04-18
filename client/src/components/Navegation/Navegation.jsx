import React from "react";
import NavegationOne from "./NavegationOne/NavegationOne.jsx";
import NavegationTwo from "./NavegationTwo/NavegationTwo.jsx";
import NavegationThree from "./NavegationThree/NavegationThree.jsx";
import Formulario from "../Formulario/Formulario.jsx";
import Footer from "../Footer/Footer.jsx";


export default function Navegation() {
  return (
    <div>
      <NavegationOne />
      <NavegationTwo />
      <NavegationThree />
      <Formulario />
      <Footer />
    </div>
  );
}
