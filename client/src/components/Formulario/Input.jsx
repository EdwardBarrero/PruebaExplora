import React from "react";
import s from "./Input.module.css";

export default function Input({ label, expresion_regular, errorMsg, setState, state, type = "text" }) {
    
    const onChange = (e) => {
        setState({
            ...state,
            value: e.target.value
        })
    }
    
    const validate = () => {
        if (state.value === "") setState({...state, validate: null})
        else if (expresion_regular.test(state.value)) setState({...state, validate: true});
        else setState({...state, validate: false});
      };
  
  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="input">{label}</label>
      {
          type === "text" ?
      <input className={s.input} type={"select"} name="input" id="input" onChange={(e)=> onChange(e)} onKeyUp={validate} onBlur={validate}/>
    : <select className={s.select} name="input" id="input">
        <option value="">Elige una opción...</option>
        <option value="preescolar">Preescolar</option>
        <option value="primaria">Primaria</option>
        <option value="secundaria">Secundaria</option>
    </select>  
    }
      {
        !state.validate && state.validate != null && <span className={s.error}>{errorMsg}</span> 
      }
    </form>
  );
}
