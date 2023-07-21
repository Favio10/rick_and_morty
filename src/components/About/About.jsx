import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <h2>Hola, bienvenidos a mi pequeño proyecto!</h2>
      <hr />
      <p className={style.parr}>
        El creador de esta proyecto es Favio Gonzalo Olivera, abajo te cuento un
        poco que me motivo a realizarla.
      </p>
      <p className={style.parr}>
        Esta pagina principalmente fue creada para la etapa M2 de la carrera
        Desarrollador Web Full Stack que estoy cursando actualmente en Henry. Me
        motivó muchisimo desde el primer dia en el que nos comentaron que ibamos
        a realizar algo asi, ya que antes de ingresar al bootcamp me encontraba
        en el bucle infinito de ver tutoriales en YouTube pero sin aplicarlo en
        un proyecto o pagina en especifico.
      </p>
    </div>
  );
}
