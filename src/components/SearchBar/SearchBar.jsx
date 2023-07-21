import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = (id) => {
    onSearch(id);
    setId("");
  };

  const random = () => {
    return Math.floor(Math.random() * 826);
  };

  const navigate = useNavigate();

  return (
    <div className={styles.segundoDiv}>
      <button onClick={(setId) => [navigate("/"), (setId = "")]}>
        Log Out
      </button>
      <button onClick={() => navigate(-1)}>Volver</button>
      <button onClick={() => navigate("/about")} className={styles.boton2}>
        About
      </button>

      <button onClick={() => navigate("/home")} className={styles.boton2}>
        Home
      </button>

      <input
        className={styles.inputDiv}
        value={id}
        id="inputSearch"
        type="search"
        placeholder="Inserta un ID"
        onChange={handleChange}
      />
      <button
        className={styles.boton}
        onClick={() => {
          handleSearch(id);
        }}
      >
        Buscar
      </button>
      <button
        className={styles.boton}
        onClick={() => {
          random();
          handleSearch(random());
        }}
      >
        {" "}
        Personaje random{" "}
      </button>
      <Link to="/favorites">
        <button>🤍</button>
      </Link>
    </div>
  );
}
