const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
// require("dotenv").config();
// const { URL } = process.env;
// con las dos lineas de arriba estoy trayendo la url desde archivo .env para que sea mas segura la pagina

//! Async - Await
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    const { name, gender, species, origin, image, status } = data;
    const character = { id, name, gender, species, origin, image, status };
    name
      ? res.status(200).json(character)
      : res.status(404).json({ message: "Not Found" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = getCharById;

//! Promises
// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios(`${URL}/${id}`)
//     .then(({ data }) => {
//       const { id, name, gender, species, origin, image, status } = data;
//       const character = { id, name, gender, species, origin, image, status };

//       return name
//         ? res.status(200).json(character) //si tiene name retorna json, sino el msj not found
//         : res.status(404).json({ message: "Not Found" });
//     })
//     .catch((error) => {
//       return res.status(500).json({ message: error });
//     });
// };

// module.exports = getCharById;

/*  HTTP

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const successHandler = (response, res) => {
  // console.log (response)
  const { id, name, gender, species, origin, image, status } = response.data; //aca elijo que datos me interesan y los guardo en un obj
  const character = { id, name, gender, species, origin, image, status };
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(character));
};

const errorHandler = (error, res) => {
  res.writeHead(500, { "Content-type": "text/plain" });
  res.end("Sucedió el siguiente error: " + error.message);
};

const getCharById = (res, id) => {
  axios(`${URL}/${id}`).then(
    (response) => successHandler(response, res),
    (error) => errorHandler(error, res)
  );
  // .catch((error) => errorHandler(error, res));
};

module.exports = getCharById;

/*

.then (succesHandler, errorHandler)


*/
