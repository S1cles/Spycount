import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


const Card = ({item}) => {
  return (
    <Link className='card' to={`product/${item.id}`}>
      <div className="image">
        {item.isNew ? <span className='new'>NEW!</span>: null}
        <img width={200} src={item.img1} alt="front-img" className='front-img'/>
        <img width={200} src={item.img2} alt="second-img" className='second-img'/>
      </div>
      <div className="info">
        <h2 style={{fontSize: '24px'}}>{item.title}</h2>
        <div className="prices">
          <h3 style={{color:'gray',textDecoration: 'line-through' , fontWeight: '200'}}>
            ${item.oldPrice}
          </h3>
          <h3>
            ${item.price}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default Card