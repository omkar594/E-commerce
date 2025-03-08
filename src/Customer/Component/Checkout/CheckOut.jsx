import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliverAddressForm from "./DeliverAddressForm";
import OrderSummery from "./OrderSummery";


export default function CheckOut() {
  const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("steps");
  console.log("VALUE OF STEP ", step);

 
  const [activeStep, setActiveStep] = React.useState(0);


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 mt-10">
      <Box sx={{ width: "100%" }}>
        {/* Stepper Component */}
        <Stepper activeStep={2}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {/* Conditional Rendering of Components based on Step */}
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>

            <div>{step == 2 ? <DeliverAddressForm /> : <OrderSummery />}</div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
