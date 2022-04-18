import React from "react";
import s from "./NavegationOne.module.css";
import Navbar from "../../Navbar/Navbar";
import introwhatsapp from "../../../img/WEB/INTRO-WHATSAPP.png";

export default function Navegationone() {
  return (
    <div>
      <div className={s.navegationone}>
      <Navbar />
        <div className={s.contain}>
          <p className={s.title}>
            Navegación <br />
            por el universo <br />
            para colegios{" "}
          </p>
          <p className={s.content}>
            En este viaje en vivo conoceremos los logros y descubrimientos{" "}
            <br />
            que hicieron mujeres y hombres inquietos por observar <br />
            los misterios del cosmos. Acompañados por la curiosidad y el <br />
            asombro, seremos testigos de la diversidad de objetos que hay en{" "}
            <br />
            nuestro universo y, a través de historias, viajaremos por lugares ya{" "}
            <br />
            conocidos y por conocer.
          </p>
          <img
            className={s.introWhatsApp}
            src={introwhatsapp}
            alt="img not found"
          />
          <p className={s.textwhatsapp}>Escríbenos por Whatsapp</p>
        </div>
      </div>
    </div>
  );
}
