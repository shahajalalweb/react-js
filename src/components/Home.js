import React, { useState } from "react";

import NewTodo from "./NewTodo";
import Todos from "./Todos";
import style from "../style/style.module.css"

const dummyTodos = ["todo1", "todo2"];
const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div className={style.card}>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
      <br/>
    </div>
  );
};

export default Home;