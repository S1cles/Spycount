import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'



const Card = ({item}) => {
  return (
    <Link className='card' to={`/product/${item.id}`}>
      <div className="image">
        {item.attributes.isNew ? <span className='new'>NEW!</span>: null}
        <img width={200} src={process.env.REACT_APP_API_UPLOAD + item.attributes?.img1?.data?.attributes?.url} alt="front-img img1" className='front-img'/>
        <img width={200} src={process.env.REACT_APP_API_UPLOAD + item.attributes?.img2?.data?.attributes?.url} alt="second-img img2" className='second-img'/>
      </div>
      <div className="info">
        <h2 style={{fontSize: '24px'}}>{item.attributes.title}</h2>
        <div className="prices">
          <h3 style={{color:'gray',textDecoration: 'line-through' , fontWeight: '200'}}>
            ${item.attributes.oldPrice}
          </h3>
          <h3>
            ${item.attributes.price}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default Card