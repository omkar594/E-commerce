import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

export const OrderTracker = ({ activeStep }) => {
  const step = [
    "placed",
    "order Confirmed",
    "Shipped",
    "Out for delivered",
    "Order Delivered",
  ];
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label, index) => (
          <Step key={index}>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
