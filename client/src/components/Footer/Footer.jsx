import React from "react";
import s from "./Footer.module.css";

//imagenes
import planetario from "../../img/WEB/PLANETARIO-MEDELLIN.PNG";
import explora from "../../img/logo.PNG";
import instagram from "../../img/WEB/INSTAGRAM.PNG";
import facebook from "../../img/WEB/FACEBOOK.PNG";
import youtube from "../../img/WEB/YOUTUBE.PNG";
import mail from "../../img/WEB/MAIL.PNG";

export default function Footer() {
  return (
    
    <div className={s.footer}>
      <div className={s.informacion}>
        <div className={s.encuentranos}>
          <h3>Encuéntranos en:</h3>
          <a href="https://encasa.parqueexplora.org/" target={"_blank"}><img className={s.explora} src={explora} alt="img not found" /></a>
          <a href="https://planetariomedellin.org/" target={"_blank"}><img className={s.planetario} src={planetario} alt="img not found" /></a>
        </div>
        <div className={s.contactanos}>
          <h3>Contáctanos</h3>
          <p>
            Corporación Parque Explora <br />
            +57(4)516 83 00 <br />
            comunicaciones@parqueexplora.org
          </p>
        </div>
        <div className={s.ubicacion}>
          <h3>Ubicación</h3>
          <p>
            Carrera 52 # 73 - 75 <br />
            Medellín - Colombia <br />
            +57(4) 516 83 00
          </p>
        </div>
      </div>
      <div className={s.infoRedes}>
        <p>@ 2020 PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS</p>
        <div className={s.redes}>
          <a
            href="https://www.instagram.com/parqueexplora/?hl=es-la"
            target={"_blank"}
          >
            <img src={instagram} alt="img not found" />
          </a>
          <a href="https://www.facebook.com/ParqueExplora" target={"_blank"}>
            <img src={facebook} alt="img not found" />
          </a>
          <a href="https://www.youtube.com/c/parqueexplora" target={"_blank"}>
            <img src={youtube} alt="img not found" />
          </a>
        </div>
        <a href={`mailto:mailpruebaexplora@gmail.com`}><img className={s.mail} src={mail} alt="img not found" /></a>
      </div>
    </div>
  );
}
