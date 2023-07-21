import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({ myFavorites }) {
  return (
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
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps)(Favorites);
