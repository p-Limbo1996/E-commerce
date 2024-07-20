import React, { useContext } from 'react'
import { ShopContext } from "../Context/ShopContex";
import { useParams } from 'react-router-dom'

const Product = () => {

 
  const {all_product}  = useContext(ShopContext);

  const {productId}=useParams();


  return (
    <div className='product'>
      Product
      </div>
  )
}

export default Product