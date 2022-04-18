import React from "react";
import s from "./NavegationTwo.module.css";
import objectOne from "../../../img/WEB/OBJETIVOS-NUM-1.png";
import objectTwo from "../../../img/WEB/OBJETIVOS-NUM-2.png";
import objectThree from "../../../img/WEB/OBJETIVOS-NUM-3.png";

export default function NavegationTwo() {
  return (
    <div className={s.navegationTwo}>
      <div className={s.container}>
        <h1 className={s.title}>
          ¿Cuáles son los objetivos <br />
          de estos encuentros?
        </h1>
        <div className={s.object}>
          <img src={objectOne} alt="" />
          <p className={s.content}>
            Motivar la observación del cielo e <br />
            incentivar la curiosidad sobre algunos <br />
            temas relacionados con la Astronomía <br />
            como planetas, estrellas y galaxias.
          </p>
        </div>
        <div className={s.object}>
          <img src={objectTwo} alt="img not found" />
          <p className={s.content}>
            Fortalecer la divulgación de la <br />
            Astronomía a través de entornos <br />
            digitales que permitan mantener la <br />
            conexión con estudiantes y maestros.
          </p>
        </div>
        <div className={s.object}>
          <img src={objectThree} alt="img not found" />
          <p className={s.content}>
            Mostrar la Tierra como un planeta muy <br />
            especial que nos conecta con su familia <br />
            planetaria y el universo en general.
          </p>
        </div>
      </div>
    </div>
  );
}
