import React, { useState, useEffect } from 'react'

import style from "../style/home.module.css"

const loadingMessage = <p>Api data is Loading ....</p>

const Home = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("fecthing is not successful");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });

 
  }, []);


  const todoElements = todos && todos.map((todo) => {
    return <p key={todo.id}> { todo.title}</p>
  })


  return (
    <div className={style.container}> 
      <div className={style.fetch}>
        {error && <p>{error}</p>}
        { isLoading && loadingMessage}
        {todoElements}
      </div>
    </div>
  )
}

export default Home;