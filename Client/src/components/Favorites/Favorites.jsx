import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderFav, filterFav } from "../../redux/actions";

function Favorites() {
  const [aux, setAux] = React.useState(false);

  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const handlerFilter = (event) => {
    dispatch(filterFav(event.target.value));
  };
  const handleOrder = (event) => {
    dispatch(orderFav(event.target.value));
    setAux(!aux);
  };
  return (
    <div className={style.contenedor}>
      <select onChange={handleOrder}>
        <option value="Ascendente">ASCENDENTE</option>
        <option value="Descendente">DESCENDENTE</option>
      </select>

      <select onChange={handlerFilter}>
        {optionsGender.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div>
        {myFavorites?.map(
          ({ id, name, gender, image, origin, status, species }) => (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              image={image}
              gender={gender}
            />
          )
        )}
      </div>
    </div>
  );
}

// export function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

//export default connect(mapStateToProps)(Favorites);

export default Favorites;
