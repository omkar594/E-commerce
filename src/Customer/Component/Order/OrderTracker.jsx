import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const step = [
  "placed",
  "order Confirmed",
  "Shipped",
  "Out for delivered",
  "Order Delivered",
];

export const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
