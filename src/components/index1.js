import React, { useState } from "react";
import style from "../style/style.module.css";

export default function From1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(name, email, password);
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
            id="name"
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
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        {/* Password  Input */}
        <div className={style.cardMargin}>
          <label>Password : </label>
          <input
            type="text"
            onChange={handlePasswordChange}
            value={password}
            name="name"
            id="name"
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
