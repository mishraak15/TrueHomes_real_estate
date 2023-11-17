import React from 'react';
import './HomeEndCard.css';

export default function HomeEndCard({content,img,btn,title}) {
  return (
    <div className='HomeEndCard'>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{content}</p>
      <button>{btn}</button>
    </div>
  )
}
