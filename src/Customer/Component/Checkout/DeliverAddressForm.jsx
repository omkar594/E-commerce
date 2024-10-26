import { Button } from "@headlessui/react";
import { Box, ButtonBase, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard.jsx";

const DeliverAddressForm = () => {
    const handleSubmit=(e)=>{
        console.log("Address is submitted")
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address ={
          firstName:data.get('firstName'),
          lastName:data.get('lastName'),
          streetAddress:data.get('address'),
          city:data.get('city'),
          state:data.get('state'),
          zip:data.get('zip'),
          mobile:data.get('phoneNumber')

        };

        console.log("address",data)
    }
  return (
    <div className="mt-10">
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={4.5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              variant="contained"
              fullWidth
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="give-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="give-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="give-name"
                    multiline
                    rows={4}
                  ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="give-name"
                  ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="give-name"
                  ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal-code"
                    fullWidth
                    autoComplete="Shipping postal-code"
                  ></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="PhoneNumber"
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <button
                    type="submit"
                    className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Deliver Here
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliverAddressForm;
