import './App.css';
import  React from 'react'

import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Router/CustomerRouter.jsx';
import { AdminRouters } from './Router/AdminRouters.jsx';




function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path='/*' element={<CustomerRouter/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
