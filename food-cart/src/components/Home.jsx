import React, { useState } from 'react'
import data from "../assets/products.json"
import {Product} from './product';
import './Home.css'

export const Home = ({cart,setCart}) => {
  const [products]=useState(data);
  return (
    <>
    <div className="product-container">
      {products.map((product)=>(
        <div key={product.id}>
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
        </div>
      ))}
    </div>
    </>
  )
}
