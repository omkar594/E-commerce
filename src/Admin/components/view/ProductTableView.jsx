import { Paper, Table, TableBody, TableCell, TableContainer, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ProductTableView = () => {
  const dispatch=useDispatch();
  const {products}=useSelector(store=>store);

  

    useEffect(()=>{
        const data={
            category:null,
            colors:[],
            sizes:[],
            minPrice:null,
            maxPrice:null,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 1,
            pageSize:10,
            stock:""
        }
        dispatch(findProducts(data))
    },[products.deletedProduct])
    return (
    <div className='p-5'>
<Card className='mt-2 bg-[#1b1b1b]' sx={{bgcolor:"#1b1b1b"}}>
<CardHeader title="Recent Products"/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.slice(0,5).map((item) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
              <Avatar src={item.imageUrl}></Avatar>
              </TableCell>
              <TableCell align="left" scope="row">
                {item.title}
              </TableCell>

              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Card>
    </div>
  )
}

export default ProductTableView
