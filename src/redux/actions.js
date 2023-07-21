import { ADD_FAV, REMOVE_FAV } from "./action-type";

export const addFav = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
