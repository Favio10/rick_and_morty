import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
//email: anonimo123@gmail.com
// password: contra123

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let property = event.target.name;
    let value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.cont}>
      <form onSubmit={handleSubmit}>
        <div className={style.bienvenida}>
          Bienvenido, ingresa tus credenciales ⬇
        </div>
        <div className={style.container}>
          <hr />
          <label className={style.label}>Email:</label>
          <input
            className={style.input}
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          {errors.email && <p className={style.danger}>{errors.email}</p>}
        </div>
        <h4>anonimo123@gmail.com</h4>
        <div>
          <label className={style.label}>Password:</label>
          <input
            className={style.input}
            type="password"
            name="password"
            x
            onChange={handleChange}
            value={userData.password}
          />
          {errors.password && <p className={style.danger}>{errors.password}</p>}
        </div>
        <h4>contra123</h4>
        <div className={style.medio}></div>
        <button className={style.boton} type="submit">
          <span>Login</span>
        </button>
      </form>
      <div className={style.ultimo}></div>
    </div>
  );
}
