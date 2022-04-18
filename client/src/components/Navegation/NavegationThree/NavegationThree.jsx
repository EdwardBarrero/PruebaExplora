import React, { useState } from "react";
import s from "./NavegationThree.module.css";

//Imagenes
import back from "../../../img/WEB/BACK.PNG";
import go from "../../../img/WEB/GO.PNG";
import caracteristicasOne from "../../../img/WEB/CARACTERISTICAS-1.png";
import caracteristicasTwo from "../../../img/WEB/CARACTERISTICAS-2.png";
import caracteristicasThree from "../../../img/WEB/CARACTERISTICAS-2.png";
import punto from "../../../img/WEB/CARACTERISTICAS-BULLET.png";

export default function NavegationThree() {
  const [nav, setNav] = useState(true);
  const puntoImg = <img className={s.bullet} src={punto} alt="img not found" />;

  return (

    <div className={s.navegationThree}>
      <div className={s.menu}>
        <img
          className={s.botton}
          onClick={() => !nav ?setNav(true): setNav(false)}
          src={back}
          alt="img not found"
        />
        {nav ? (
          <div className={s.caracteristicas}>
            <img className={s.caracteristica} src={caracteristicasOne} alt="img not found" />
            <img className={s.caracteristica} src={caracteristicasTwo} alt="img not found" />
          </div>
        ) : (
          <div className={s.caracteristicas}>
            <img className={s.caracteristica} src={caracteristicasThree} alt="img not found" />
          </div>
        )}
        <img
          className={s.botton}
          onClick={() => nav ? setNav(false): setNav(true)}
          src={go}
          alt="img not found"
        />
      </div>
      <div className={s.descripcionCaracteristicas}>
        <h1 className={s.title}>Características</h1>
        <div className={s.content} >
          {puntoImg}
          <p>
            Para estudiante <br />
            de 1 a 11
          </p>
        </div>
        <div className={s.content}>
          {puntoImg}
          <p>
            Incluye viaje por el <br />
            universo + actividad <br />
            experimental
          </p>
        </div>
        <div className={s.content}>
          {puntoImg}
          <p>
            Grupos de 20 personas <br />
            acompañados por un <br />
            mediador
          </p>
        </div>
        <div className={s.content}>
          {puntoImg}
          <p>
            1 sesión de 90 <br />
            minutos
          </p>
        </div>
        <div className={s.content}>
          {puntoImg}
          <p>
            Conexión privada <br />
            por Zoom
          </p>
        </div>
      </div>
    </div>
  );
}
