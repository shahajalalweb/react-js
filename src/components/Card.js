import React from 'react'
import '../style/card.css';

export default function Card({title, button}) {

  return (
    <div className='card'>
        <h2 className='card-title' >{title}</h2>
        <p className='card-text'>Bangladesh is a very small country . There are mony problem in our country some of them are big and some of them ar small. but problem is a problem. </p>
        <button className='card-btn'>{button}</button>
    </div>
  )
}

