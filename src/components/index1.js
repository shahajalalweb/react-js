import React, { useState } from "react";
import style from "../style/style.module.css";

export default function From1() {
  // { simple state

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleNameChange = (e) => {
  //     setName(e.target.value);
  //   };

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     console.log(name, email, password);
  //     e.preventDefault();
  //   };
  // }

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const handleNameChange = (e) => {
    setUser({ name: e.target.value, email, password });
  };

  const handleEmailChange = (e) => {
    setUser({ name, email: e.target.value, password });
  };

  const handlePasswordChange = (e) => {
    setUser({ name, email, password: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div className={style.from}>
      <h2 className={style.h2}>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name  Input */}
        <div className={style.cardMargin}>
          <label>Name : </label>
          <input
            className={style.inputMarginLeft}
            onChange={handleNameChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </div>
        {/* Email Input */}
        <div className={style.cardmargin}>
          <label>Email : </label>
          <input
            className={style.inputMarginLeft}
            onChange={handleEmailChange}
            value={email}
            type="email"
            name="name"
            required
          />
        </div>
        {/* Password  Input */}
        <div className={style.cardMargin}>
          <label>Password : </label>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            name="name"
            required
          />
        </div>
        {/* submit button  */}
        <button type="submit" className={style.btn}>
          Register
        </button>
      </form>
    </div>
  );
}
