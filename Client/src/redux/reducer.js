import { ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV } from "./action-type";

const initialState = {
  myFavorites: [],
  allFavorites: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      // return {
      //   ...state,
      //   myFavorites: [...state.myFavorites, action.payload],
      //   allFavorites: [...state.allFavorites, action.payload],
      // };
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case REMOVE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (char) => char.id !== Number(action.payload)
      //   ),
      // };
      return { ...state, myFavorites: action.payload };

    case ORDER_FAV:
      let favoritesOrdered = state.myFavorites.sort((a, b) => {
        return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: favoritesOrdered,
      };

    case FILTER_FAV:
      let favoriteFiltered =
        action.payload === "All"
          ? state.allFavorites
          : state.allFavorites.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: favoriteFiltered,
      };
    default:
      return state;
  }
}

export default rootReducer;
