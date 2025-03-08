import {
  CssBaseline,
  Drawer,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminDashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustomersTable from "./components/CustomersTable";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <ShoppingBagIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <StoreIcon /> },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <AddShoppingCartIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Toolbar sx={{ minHeight: "40px", height: "40px" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: 600 }}
        >
          Admin Panel
        </Typography>
      </Toolbar>
      <List sx={{ p: 0, mt: 0 }}>
        {menu.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{
              backgroundColor:
                location.pathname === item.path ? "#f0f0f0" : "inherit",
              borderRadius: "8px",
              mx: 1,
              mb: 1,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          backgroundColor: "#1976d2",
          boxShadow: "none",
          height: "56px",
        }}
      >
        <Toolbar sx={{ minHeight: "56px !important" }}>
          {!isLargeScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      >
        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isLargeScreen || mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              // padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#f9f9f9",
              borderRight: "1px solid #e0e0e0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#fafafa",
          height: "calc(100vh - 56px)", // ✅ Fixed height calculation
          overflowY: "auto",
        }}
      >
        <Toolbar sx={{ minHeight: "56px" }} />
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/orders" element={<OrdersTable />} />
          <Route path="/customers" element={<CustomersTable />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;
