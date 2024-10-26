import React from 'react'
import "./productCart.css"
import Product from './Product'
import { useNavigate } from 'react-router-dom'


const ProductCart = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img src={product.imageUrl} alt='' className='h-full w-full object-cover object-left-top'/>
      </div>
      <div className='textPart bg-white p-2'>
        <div className=' '>
          <p className='font-bold opacity-70'>{product.brand}</p>
          <p className=''>{product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPersent} % off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCart