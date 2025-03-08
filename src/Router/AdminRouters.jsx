import React from 'react'
import Admin from '../Admin/Admin'
import { Route, Routes } from 'react-router-dom'

export const AdminRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Admin/>}></Route>
        </Routes>
    </div>
  )
}
