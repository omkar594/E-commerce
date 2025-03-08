import React from 'react'
import "./productCart.css"
// import Product from './Product'
import { useNavigate } from 'react-router-dom'


const ProductCart = ({product}) => {
  const {title,brand,imageUrl,price,discountedPrice,discountedPercent,color}=product;
  
  
  const navigate = useNavigate()
  const handleNavigate=()=>{
    navigate(`/product/${product._id}`)
  }
  return (
    <div onClick={handleNavigate} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img src={imageUrl} alt='' className='h-full w-full object-cover object-left-top'/>
      </div>
      <div className='textPart bg-white p-2'>
        <div className=' '>
          <p className='font-bold opacity-70'>{brand}</p>
          <p className=''>{title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>₹{discountedPrice}</p>
          <p className='line-through opacity-50'>₹{price}</p>
          <p className='text-green-600 font-semibold'>{discountedPercent} % off</p>
          <p className='text-black-600 font-semibold'> {color}  </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCart