import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findproducts } from '../../State/Product/Action';

const ProductsTable = () => {
  const dispatch=useDispatch();
  const {products}=useSelector(store=>store);

  console.log("products ----",products)

  const handleProductDelete=(productId)=>{
    console.log(productId)
    dispatch(deleteProduct(productId))
  }

    useEffect(()=>{
        const data={
            category:"mens_kurta",
            colors:[],
            size:[],
            minPrice:0,
            maxPrice:10000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 1,
            pageSize:20,
            stock:""
        }
        console.log("This is the data****",data)
        dispatch(findproducts(data))
    },[products.deletedProduct])
    return (
     
    <div className='p-5'>
<Card className='mt-2 bg-[#1b1b1b]' sx={{bgcolor:"#1b1b1b"}}>
<CardHeader title="All Products" sx={{color:"white"}}/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
              <Avatar src={item.imageUrl}></Avatar>
              </TableCell>
              <TableCell align="left" scope="row">
                {item.title}
              </TableCell>

              <TableCell align="left">{item._id}</TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleProductDelete(item._id)} variant='outlined'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Card>
     </div>
  )
}

export default ProductsTable
