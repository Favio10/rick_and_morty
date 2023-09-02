import { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {
  const { id, name, status, species, gender, origin, image, myFavorites } =
    props.character;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (myFavorites && myFavorites.length > 0) {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, props.id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, status, species, gender, origin, image, id });
    }
  };

  return (
    <div className={styles.divCard}>
      <img
        src={image}
        alt={`No se encuentra la imagen de ${props.name}`}
        className={styles.imagen}
      />
      <Link to={`/detail/${id}`}>
        <h2>Nombre: {name}</h2>
      </Link>
      <h2>Estado: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>Origen: {origin.name}</h2>

      <button onClick={props.onClose} className={styles.botonCard}>
        ❌
      </button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
