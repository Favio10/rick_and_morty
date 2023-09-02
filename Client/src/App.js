import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import { useLocation } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  //!Async
  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        }
      } else {
        window.alert("Este personaje ya existe en la pantalla");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  //! Promises
  // const onSearch = (id) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`)
  //     .then(({ data }) => {
  //       if (id === "") window.alert("Ingresa un ID -.-");
  //       if (!characters.find((char) => char.id === data.id)) {
  //         if (data.name) {
  //           setCharacters((oldCharacters) => [...oldCharacters, data]);
  //         }
  //       } else {
  //         window.alert("Este personaje ya existe en la pantalla");
  //       }
  //     })
  //     .catch((err) => alert(err.response.data));
  // };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  //const EMAIL = "anonimo123@gmail.com";
  //const PASSWORD = "contra123";

  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   } else {
  //     alert("Usuario o contraseña invalido");
  //   }
  // }

  const login = async (userData) => {
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access ? navigate("/home") : alert("Datos incorrectos");
    } catch (error) {
      console.log(error.message);
    }
  };

  //! Promises
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   });
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : <div></div>}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
