const app = require("../src/server");
const session = require("supertest");
const agent = session(app);

describe("Test de Rutas", () => {
  describe("GET BY ID", () => {
    it("responde con status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("responde con status 200 a promesas", () => {
      return agent
        .get("/rickandmorty/character/1")
        .expect(200)
        .then((response) => {
          //console.log(response)
          expect(response.status).toBe(200);
        });
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      //console.log(body)

      expect(body).toHaveProperty("id", "name", "species");
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("credenciales correctas", async () => {
      // const response = await agent.get("/rickandmorty/login?email=anonimo123@gmail.com&password=contra123")
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "anonimo123@gmail.com", password: "contra123" });

      //console.log(body)

      expect(body).toEqual({ acces: true });
      expect(body.acces).toBe(true);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: 1, name: "Rick" };
    const character2 = { id: 2, name: "Morty" };

    it("Genera un nuevo favorito", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);

      expect(response.body).toBeInstaceOf(Array);
      expect(response.body).toContainEqual(character1);
    });

    it("Devuelve todos los favoritos", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character2);
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });

  describe("DELETE", () => {
    const character1 = { id: 1, name: "Rick" };
    const character2 = { id: 2, name: "Morty" };

    beforeEach(async () => {
      await agent.post("/rickandmorty/fav").send(character1);
      await agent.post("/rickandmorty/fav").send(character2);
    });

    it("que devuelva todo el arreglo sin modificar si el id es invalido", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/6");
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });

    it("que devuelva todo el arreglo sin el personaje eliminado", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).not.toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });
});

/*
it ---> unitarios
describe ---> agrupan test unitarios segun tematica

describe("Descripcion del grupo de it, () => {
    it
    it
    it
})

it("Descripcion de este test", () => {
    expect(que es lo que espero).toBe(sea esto )
})

it("Test ruta get", async () => {
    await agent.get(...)
    expect(response.status).toBe(200)
})


*/
