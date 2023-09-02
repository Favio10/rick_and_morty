const server = require("./server");
const PORT = 3001;

server.listen(PORT, () => {
  console.log("Server corriendo en puerto: " + PORT);
});

/* HTTP
const http = require("http");
const PUERTO = 3001;
const getCharById = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    console.log(`Recibi una r de: ${url}`);

    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").pop());
      getCharById(res, id);
    } else {
      res.writeHead(404, { "Content-type": "application/json" });
      return res.end(JSON.stringify({ error: "Route not found" }));
    }
  })
  .listen(PUERTO, () => {
    console.log(`Servidor corriendo en puerto: ${PUERTO}`);
  });

/*
    HW de Webserver

        if (url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      return res.end("Esta funcionando ok");
    }

    // REQ.url --> www.localhost:3001/rickandmorty/character/5
    // split --> ['', 'rickandmorty', 'character', '5']
    // pop --> '5'
    // Number --> 5

    if (url.includes("/rickandmorty/character")) {
      const id = Number(url.split("/").pop());
      const character = data.find((char) => char.id === id);
      console.log(character);

      if (character) {
        res.writeHead(200, { "Content-type": "application/json" });
        return res.end(JSON.stringify(character));
        //con el metodo JSON.stringify me aseguro que character se convertira de objeto a json para viajar correctamente
      } else {
        res.writeHead(404, { "Content-type": "application/json" });
        return res.end(JSON.stringify({ error: "Character not found" }));
      }
    }

    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end(`La direccion ${url} no existe`);


  */
