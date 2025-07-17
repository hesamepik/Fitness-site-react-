import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from './context/getpro'
import {useProductdetail} from "./context/getpro"
import "./Deatils.css"
function Details() {
  const {id}=useParams()
  const productDetails =useProductdetail(id)

  const [product ,setProduct]=useState(productDetails)
console.log(product)
  return (
    <>
  <div className="prd-container">
  <div className="prd-img">
    <img src={product.image} alt={product.title} className="prd-photo" />
  </div>

  <div className="prd-info">
    <h2 className="prd-title">{product.title}</h2>
    <p className="prd-desc">{product.description}</p>
    <ul className="prd-features">
      <li>ارسال رایگان</li>
      <li>ضمانت اصالت کالا</li>
      <li>7 روز ضمانت بازگشت</li>
    </ul>
    <div className="prd-price">قیمت: {product.price} تومان</div>
    <button className="prd-buy">🛒 خرید</button>
  </div>
</div>

  
    
    </>
  )
}

export default Details