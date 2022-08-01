import React from 'react'

import style from "../style/todo.module.css"; 


const Todo = (props) => {

    const {title, desc} = props.todo

  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>

    <button className={style.btn}>
        <i className='fa fa-trash fa-2x'></i>
    </button>

    </article>
  )
}

export default Todo  