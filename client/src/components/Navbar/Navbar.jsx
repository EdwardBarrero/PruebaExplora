import React from "react";
import s from "./Navbar.module.css";
import logo from "../../img/logo.PNG";
import search from "../../img/search.PNG";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="img not found" />
      </NavLink>
      <div className={s.menu}>
        <NavLink className={s.links} to="/">
          <span>Inicio</span>
        </NavLink>
        <NavLink className={s.links} to="/navegacion">
          <span>Experimenta</span>
        </NavLink>
        <span>Conéctate</span>
        <span>Prográmate</span>
        <NavLink className={s.links} to="/aboutus">
          <span>Conócenos</span>
        </NavLink>
        <span>Suscríbete</span>
        <img className={s.search} src={search} alt="img not found" />
      </div>
    </nav>
  );
}
