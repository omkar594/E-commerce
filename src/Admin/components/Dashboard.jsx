import { Grid } from '@mui/material'
import React from 'react'

import MonthlyOverview from './MonthlyOverview'
import OrdersTable from './OrdersTable'
import ProductsTable from './ProductsTable'
import Achivement from "./Achivement"

const AdminDashboard = () => {
    return (
        <div className='p-10'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className='shadow-lg shadow-gray-600'>
                    <Achivement/>
                    </div>
                </Grid>
                <Grid  item xs={12} md={8}>
                <div className='shadow-lg shadow-gray-600'>
                <MonthlyOverview/></div>

                </Grid>
                <Grid  item xs={12} md={6}>
                    <div className='shadow-lg shadow-gray-600'>
                        <OrdersTable/></div>
                </Grid>
                <Grid  item xs={12} md={6}>
                    <div className='shadow-lg shadow-gray-600'>
                        <ProductsTable/></div>
                </Grid>
            </Grid>
        </div>
    )
}
export default AdminDashboard