import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = useState({});
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [
    dispatch,
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);

  const handleClick = (event, index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleClose = (index) => {
    setAnchorEl((prev) => ({ ...prev, [index]: null }));
  };

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose(orderId);
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose(orderId);
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose(orderId);
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose(orderId);
  };

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Orders" sx={{bgcolor:"#1b1b1b",color:"white"}} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell>
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item?.orderItems?.map((orderItem, idx) => (
                        <Avatar key={idx} src={orderItem.product?.imageUrl || ""}>
                          {!orderItem.product && "?"}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item?.orderItems?.map((orderItem, idx) => (
                      <p key={idx}>{orderItem.product?.title || "Unknown Product"}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-black px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[#369236]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#4141ff]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#02B290]"
                          : item.orderStatus === "PENDING"
                          ? "bg-gray"
                          : "bg-[#025720]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item._id)}>
                        Confirm Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShippedOrder(item._id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item._id)}>
                        Delivered Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleDeleteOrder(item._id)} variant="outlined" >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;