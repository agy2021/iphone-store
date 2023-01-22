import { toast } from 'react-toastify'
import React from 'react'

export default function Card(props) {
  const {name, price, image} = props.card_data
  const notify = () => toast.success("Added to cart")
  
  return (
    <div className="icard bg-dark d-flex align-items-center justify-content-evenly flex-column">
    <img src={image} alt={name} />
    <h3 className='text-white'>{name}</h3>
    <div className='color_phones d-flex align-items-center justify-content-evenly'>
        <div className="circle bg-danger"></div>
        <div className="circle bg-white"></div>
        <div className="circle bg-warning"></div>
        <div className="circle bg-primary"></div>
    </div>
    <h5 className='text-white'>The ultimate iPhone.</h5>
    <div className="price d-flex justify-content-between mt-2 text-white">
        <h3>{price}</h3>
        <button className="btn btn-primary" onClick={notify}>Buy</button>
    </div>
    </div>
  )
}