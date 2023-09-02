let myFavorites = [];
const postFav = (req, res) => {
  //? req.body --> {id, name,status} = req.body
  //! ojo si viene un id repetido

  let { id } = req.body;

  const findRepeat = myFavorites.find((char) => char.id === id);

  if (findRepeat) {
    return res
      .status(400)
      .json({ error: "Este personaje ya fue seleccionado" });
  }

  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params; //!recordar q al traer de url recibo un string
  const filtered = myFavorites.filter((fav) => fav.id !== Number(id));
  /*nos paramos en el arreglo q ya teniamos, a el le aplicamos el filter, donde por cada favorito q tengamos, 
    lo que vamos a hacer sera chequear q el id no coincida con el id que recibimos por url*/
  myFavorites = filtered;
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
