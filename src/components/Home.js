import React from 'react'
import Todos from './Todos';

import style from "../style/home.module.css"
import NewTodo from './NewTodo';



const dummyTodos = [
    {
      id : 1, 
      title : "todo title 1", 
      desc : "todo1 description is here ...."
    },
    {
      id : 2, 
      title : "todo title 1", 
      desc : "todo1 description is here ...."
    }
  ]


const Home = () => {
  return (
    <div className={style.container}> 

        <NewTodo />    
        <Todos todos={dummyTodos} />

    </div>
  )
}

export default Home