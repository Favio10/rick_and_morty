import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (!data.name) {
            window.alert("No existe un persona con ese ID");
          } else {
            setCharacter(data);
          }
        });
    }, 2000);
  }, [id]);

  return !character.image ? (
    <h1 className={style.cargando}>Cargando su Personaje...</h1>
  ) : (
    <div className={style.divDetail}>
      <div className={style.div1}>
        <img src={character?.image} alt="" className={style.imagen} />
        <h2>Nombre: {character?.name}</h2>
      </div>

      <div className={style.div2}>
        <h2>Estado: {character?.status}</h2>
        <h2>Especie: {character?.species}</h2>
        <h2>Genero: {character?.gender}</h2>
        <h2>Origen: {character?.origin?.name}</h2>
      </div>
    </div>
  );
}
