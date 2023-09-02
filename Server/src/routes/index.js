const router = require("express").Router();

// Controladores
const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const { deleteFav, postFav } = require("../controllers/handleFavorites");

// "https://rickandmortyapi.com/api/character/7" --> res.params --> {id:5}
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;

/*
App (client)
<Routes>
<Route path={'/} element={<Login>}/> ----> componente o la vista que vamos a estar renderizando... Login, About, FAQ, contact
el routeo del lado del cliente solo se encarga de las vistas

Index (server)
router.get('/) --> tendra una accion que lleva a cabo, en este caso login
el routeo de lado del server se encarga de la logica de la api(servidor)
*/
