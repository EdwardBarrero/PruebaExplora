import React, { useState } from "react";
import s from "./Formulario.module.css";
import Input from "./Input";
import MailchimpSubscribe from "react-mailchimp-subscribe"

//Imagenes
import planetOne from "../../img/WEB/FORMULARIO-PLANETA-1.png";
import planetTwo from "../../img/WEB/FORMULARIO-PLANETA-2.png";
import whatsApp from "../../img/WEB/FORMULARIO-WHATSSAPP.png";

export default function Formulario() {
  const [nombre, setNombre] = useState({ value: "", validate: null });
  const [cedula, setCedula] = useState({ value: "", validate: null });
  const [telefono, setTelefono] = useState({ value: "", validate: null });
  const [mail, setMail] = useState({ value: "", validate: null });
  const [institucion, setInstitucion] = useState({ value: "", validate: null });
  const [navegacion, setNavegacion] = useState({ value: "", validate: null });

  let informacion = {
    nombre,
    cedula,
    telefono,
    mail,
    institucion,
    navegacion
  }

  const expresiones = {
    string: /^[a-zA-Z\ ]{1,30}$/,
    number: /^[0-9]*(\.?)[0-9]$/,
    mail: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/,
  };

  const errorMsg = {
    string: "Solo debe contener  letras mayusculas y/o minusculas",
    number: "Solo debe contener valores númericos",
    mail: "Debe contener una dirección de correo valida",
    navegacion: "Debe seleccionar una opción",
  };

  const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=${"eb5f4560c20532fd9c2a75e63"}&id=${"a7ac4aeebd"}`
    
    return(
    <div className={s.formulario}>
      <div className={s.title}>
        <img className={s.planet} src={planetOne} alt="img not found" />
        <h1>
          ¿Quieres más <br />
          información?
        </h1>
        <img className={s.planet} src={planetTwo} alt="img not found" />
      </div>
      <h2 className={s.subtitle}>Déjanos tus datos y te contactaremos</h2>      
      <div className={s.inputs}>           
        <Input
          label={"Nombre"}
          expresion_regular={expresiones.string}
          errorMsg={errorMsg.string}
          state={nombre}
          setState={setNombre}
        />
        <Input
          label={"Cédula"}
          expresion_regular={expresiones.number}
          errorMsg={errorMsg.number}
          state={cedula}
          setState={setCedula}
        />
        <Input
          label={"Telefono celular"}
          expresion_regular={expresiones.number}
          errorMsg={errorMsg.number}
          state={telefono}
          setState={setTelefono}
        />
        <Input
          label={"Correo electrónico"}
          expresion_regular={expresiones.mail}
          errorMsg={errorMsg.mail}
          state={mail}
          setState={setMail}
        />
        <Input
          label={"Nombre de institución educativa"}
          expresion_regular={expresiones.string}
          errorMsg={errorMsg.string}
          state={institucion}
          setState={setInstitucion}
        />
        <Input
          label={"Estas interesado en una navegación por el universo para:"}
          errorMsg={errorMsg.navegacion}
          state={navegacion}
          setState={setNavegacion}
          type={"select"}
        />
      </div>
      <button className={s.button}>Enviar</button>
      <img className={s.whatsApp} src={whatsApp} alt="img not found" />
      <p className={s.textWhats}>Escríbenos por Whatsapp</p>
      <p className={s.terminos}>
        Al diligenciar este formulario aceptas seguir recibiendo información del
        Parque Explora y nos autorizas para que incluyamos tus datos <br />
        personales en nuestras bases de datos, en calidad de responsable y
        encargado de los mismos, con la finalidad de enviarte información <br />
        sobre eventos y actividades. También te das por enterado de los derechos
        que tienes de consultarlos, actualizarlos, rectificarlos y <br />
        suprimirlos en cualquier momento, y conoces la política de manejo de
        datos de la Corporación, que se encuentran en la página web <br />
        www.parqueexplora.org/condiciones-legales. En ella se encuentran
        descritos los canales de atención para el ejercicio de tus derechos y la{" "}
        <br />
        presentación de quejas y reclamos. Así mismo comprendes que esta
        autorización es requerida de acuerdo a lo dispuesto por la ley 1581{" "}
        <br />
        de 2012 y sus decretos reglamentarios. Esta autorización la otorgas
        gratuitamente sin ninguna limitación de carácter temporal o territorial.
      </p>
    </div>
  );
  
}
