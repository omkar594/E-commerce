import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';

export const Ordercart = () => {
  return (
    <div className="m-5 p-5 shadow-lg hover:shadow-2xl border">
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <div className="flex items-center cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="data:image/jpeg;base64,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"
              alt="product_image"
            />
            <div className="ml-5 space-y-2">
              <p className="">Men slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}><p>₹1099</p></Grid>
        <Grid item xs={4}>{true && <div><p><AdjustIcon sx={{height:"15px",width:"15px"}} className="text-green-600 mr-2 text-sm"/><span>Delivery on November 05</span></p><p className="ml-6 text-xs">Your item has been Deliverd</p></div>}{false && <p><span>Expected Delivery on November 05</span></p>}</Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
};
