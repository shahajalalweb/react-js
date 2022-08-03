import React, { useState } from 'react'

import style from "../style/home.module.css"


const Home = () => {

  const [count, setCount] = useState(0);




  return (
    <div className={style.container}> 
      <div className={style.counter}>

        <p className={style.count}>Count : {count}</p>
        <div className={style.btn}>
          <button onClick={() => {setCount(count - 1);}} disabled={count === 0}>-</button>
          <button onClick={() => {setCount(count + 1);}}>+</button>
        </div>

      </div>
    </div>
  )
}

export default Home