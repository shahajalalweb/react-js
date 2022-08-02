import React, {useState} from 'react'
import style from "../style/faq.module.css"

const FAQ = ({id, title, desc}) => {

  const [toggle, setToggle] = useState(false);


  return (
    <div className={style.faq}>
      <div>

        <h2>{title}</h2>
        <button className={style.btn} onClick={() =>{setToggle(!toggle)}}>

          {toggle ? "-" : "+" }

        </button>

      </div>

        {toggle && <p>{desc}</p>}
    </div>
  )
}

export default FAQ  