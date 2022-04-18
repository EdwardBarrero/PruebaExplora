import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import s from "./AboutUs.module.css";

//Imagenes
import baner from "../../img/BANER.jpg";
import instagram from "../../img/WEB/INSTAGRAM-2.png";
import youtube from "../../img/WEB/YOUTUBE-2.png";
import facebook from "../../img/WEB/FACEBOOK-2.png";

const AboutUs = () => {
  return (
    <div className={s.aboutus}>
      <Navbar />
      <img className={s.baner} src={baner} alt="img not found" />
        <div className={s.redes}>
            <h4>Nuestras redes</h4>
            <div>                
                <a href="https://www.instagram.com/parqueexplora/?hl=es-la" target={"_blank"}>
                    <img className={s.red} src={instagram} alt="img not found" />
                </a>
                <a href="https://www.facebook.com/ParqueExplora" target={"_blank"}>
                    <img className={s.red} src={facebook} alt="img not found" />
                </a>
                <a href="https://www.youtube.com/c/parqueexplora" target={"_blank"}>
                    <img className={s.red} src={youtube} alt="img not found" />
                </a>                 
            </div>            
        </div>
      <div className={s.container}>
        <div className={s.content}>
            <h1 className={s.title}>¿Qué es Parque Explora?</h1>
            <p className={s.intro}>
            El Parque Explora, es un museo interactivo de ciencias en la ciudad de Medellín, <br />
            Colombia, formado por un acuario con énfasis en la Amazonia, un planetario, un <br />
            taller público de experimentación -Exploratorio- y un parque con más de 300 <br />
            experiencias orientadas a la apropiación social del conocimiento. Tiene 22 mil <br />
            metros cuadrados de área interna y 15 mil de plazas públicas, con jardines nativos <br />
            que lo convierten en un atractivo parque.
            </p>
            <p className={s.info}>
                El Parque Explora está comprometido con la protección de la vida en su más cautivante expresión: la <br />
                diversidad. Es un museo de ciencias incluyente diseñado para anular barreras de diverso tipo: físicas, <br />
                actitudinales, informativas, culturales…La biodiversidad pasa por lo humano. Y por nuestra relación <br />
                con los otros. El Acuario nos incluye y pone de presente que la  fragilidad de la vida del agua es, <br />
                también, la nuestra. 
            </p>
            <p className={s.info}>
                Este escenario educativo y de conservación recrea dos ecosistemas en riesgo: el bosque húmedo <br />
                tropical y los arrecifes de coral. El Acuario rebasa el nivel exhibitorio y promueve una nueva ética de <br />
                la vida. Más de 4 mil individuos de 400 especies, nos recuerdan que no estamos solos, que nuestro <br />
                destino es común y que es preciso conocer y respetar no solo lo que se nos parece. 
            </p>
            <p className={s.info}>
                Explora es el mayor proyecto dedicado a la apropiación social de la ciencia y tecnología de Medellín, <br />
                y pone todos sus acentos en la formación de capacidades científicas y ciudadanas que nos ayuden a <br />
                vivir mejor. Tiene exhibiciones permanentes y temporales dedicadas a temas como las neurociencias, <br />
                la música, el Tiempo, las historias de la gente y los medios de comunicación que les han permitido <br />
                contarlas.  
            </p>
            <p className={s.info}>
                Es un atractivo turístico indiscutible, tanto para locales como para visitantes de otros países. Y es un <br />
                símbolo de transformación social desde la educación, ubicado en la Zona Norte de Medellín, un <br />
                sector estigmatizado durante muchos años por albergar el antiguo basurero de la ciudad y que hoy <br />
                tiene una vitalidad plural y emocionante. Con sus cuatro cajas que flotan contra el horizonte de <br />
                barrios obreros y montañas, el parque colorea el paisaje y acoge a de manera gratuita a quienes más <br />
                lo necesitan.  
            </p>
            <p className={s.info}>
                El museo, sus servicios y programas especiales, se convierte en un aliado para renovar la escuela, <br />
                con experiencias que ofrecen recursos para mejorar las prácticas pedagógicas, para activar <br />
                aprendizajes basados en proyectos STEAM y otras metodologías conectadas con los territorios, <br />
                conectadas con la posibilidad de aprender divirtiéndose y, en definitiva, conectadas con hacer del <br />
                conocimiento una aventura que no termina.  
            </p>
            <p className={s.info}>
                Con una atractiva programación el Parque Explora es un gran movilizador y articulador social que <br />
                contribuye a consolidar una opinión pública informada y deliberante. Su vida digital es profusa y <br />
                participativa, a tal punto que la gente nos ha convertido en el museo con más seguidores en redes <br />
                sociales de Colombia. Gracias a este trabajo que hacemos con las personas, consideradas <br />
                protagonistas centrales de las experiencias, hemos logrado cumplir la exigente misión que se nos ha <br />
                confiado: Inspirar, comunicar y transformar mediante escenarios de interacción que, en relación <br />
                siempre respetuosa con la vida, contribuyan a la apropiación del conocimiento necesaria para la <br />
                construcción de una mejor sociedad.     
            </p>
            <h1>Reconocimientos de Parque Explora</h1>
            <ul>
                <li><p>Smithsonian Cooper-Hewitt, concedido por el National Design Museum de Nueva York en 2010.</p></li>
                <li><p>Reconocimiento y exposición en el Netherlands Architecture Institute de Holanda: Testify, the <br/>
                    consequences of architecture, 2011.</p></li>
                <li><p>Premio de diseño Lápiz de Acero en la categoría Azul a la museografía del Acuario Parque <br/> 
                    Explora en 2011.</p></li>
                <li><p>Premio de diseño Lápiz de Acero a la mejor experiencia por Encuentros, de la Sala Conexión de <br/>
                    la Vida, en 2011.</p></li>
                <li><p>Premio a la Mejor Unidad de Comunicaciones y premio a la Innovación, concedidos por el <br/>
                    Centro Colombiano de Comunicaciones y Relaciones Públicas en 2011.</p></li>
                <li><p>Premio a la Divulgación, concedido por la Asociación Colombiana para el Avance de las Ciencias <br/>
                    – ACAC en 2012.</p></li>
                <li><p>Premio Lápiz de Acero en la categoría Identidad Visual por la exposición temporal Los mundos <br/>
                    de Julio Verne en 2014.</p></li>
                <li><p>Mención de honor en la categoría Solidaridad, concedida por la Fundación Alejandro Ángel <br/>
                    Escobar para la Investigación, la Ciencia y la Solidaridad en 2015.</p></li>
                <li><p>Beca de Creación en Astronomía a la producción audiovisual para domo, otorgada por la Alianza <br/>
                    Americana de Museos –Musseums connect– del Departamento de Estado <br/>
                    de los Estados Unidos en 2015.</p></li>
                <li><p>Premio a la Divulgación Científica en la categoría de Organizaciones, concedido por la Red de <br/>
                    Popularización de la Ciencia y la Tecnología para América Latina y el Caribe (RedPop) en 2015.</p></li>
                <li><p>Premio de las Naciones Unidas para el Desarrollo Urbanístico, otorgado al proyecto de <br/>
                    urbanismo social de la ciudad de Medellín, del que Explora forma parte, en 2016.</p></li>
                <li><p>VI Premio Iberoamericano de Educación y Museos, otorgado a la Feria de la Ciencia, la <br/>
                    Tecnología y la Innovación en 2016.</p></li>
            </ul>
            <h1>Algunas publicaciones</h1>
            <ul>
                <li><p>El museo y la escuela: Conversaciones de complemento.</p></li>
                <li><p>Tan distintos y parientes, las relaciones entre las cosas, libro de Física para el campo, publicado <br/>
                    en coedición con la Fundación Secretos para Contar.</p></li>
                <li><p>La Tierra, el cielo y más allá. Una expedición al cosmos, libro de astronomía para el campo, <br/>
                    publicado en coedición con la Fundación Secretos para Contar.</p></li>
                <li><p>Astronomía experimental. Guía de actividades para el tiempo libre, publicado en asocio con el <br/>
                    programa Jornada Complementaria de la Alcaldía de Medellín.</p></li>
                <li><p>Darwin para maestros.</p></li>
                <li><p>Agua para maestros.</p></li>
                <li><p>Mente, el mundo adentro, neurociencias para maestros.</p></li>
                <li><p>El otro y yo. La investigación en la escuela (incluye maleta didáctica).</p></li>
                <li><p>Maravillosos perseguidos, publicación digital sobre biodiversidad: murciélagos, zarigüeyas, <br/>
                    cucarachas, pirañas.</p></li>
                <li><p>Territorio expandido: Laboratorio de prácticas barriales.</p></li>
                <li><p>Gestión integral de la biodiversidad y los servicios ecosistémicos en Medellín.</p></li>
            </ul>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
