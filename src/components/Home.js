import React from 'react'

import style from "../style/home.module.css"
import useFetch from './useFetch'



const Home = () => {

  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");




  const loadingMessage = <p>Api data is Loading ....</p>

  const todoElements = data && data.map((todo) => {
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