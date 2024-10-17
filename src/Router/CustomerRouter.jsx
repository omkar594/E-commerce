import React from 'react'
import { Route, Router } from 'react-router-dom'
import Navigation from '../Customer/Component/Navigation/Navigation'
import Footer from '../Customer/Component/Footer/Footer'
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Product from '../Customer/Component/Product/Product'
import ProductDetails from '../Customer/Component/ProductDetails/ProductDetails'
import Cart from '../Customer/Component/Cart/Cart'

const CustomerRouter = () => {
  return (
    <>
    <div><Navigation/></div>
    <Router>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne//:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/Product/:ProductId' element={<ProductDetails/>}></Route>
        {/* <Route path='cart' element={<Cart/>}></Route> */}
    </Router>
    <div>
        <Footer/>
      </div>
    </>
  )
}

export default CustomerRouter