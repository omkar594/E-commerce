import './App.css';
import  React from 'react'
import Footer from './Customer/Component/Footer/Footer';
import Navigation from './Customer/Component/Navigation/Navigation';
import Product from './Customer/Component/Product/Product.jsx';
import HomePage from './Customer/Pages/HomePage/HomePage';
import ProductDetails from './Customer/Component/ProductDetails/ProductDetails.jsx';



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='sticky top-0 z-50'>
      {/* Navigation Component */}
      <Navigation />
      </div>
      {/* Main Content */}
      <main className="flex-grow">
        <HomePage />
        <Product/>
        <ProductDetails/>
        
        
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
