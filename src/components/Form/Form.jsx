import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label className={style.label}>Email:</label>
        <input
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
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        {errors.password && <p className={style.danger}>{errors.password}</p>}
      </div>
      <h4>contra123</h4>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
