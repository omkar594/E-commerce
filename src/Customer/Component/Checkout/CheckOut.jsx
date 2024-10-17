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

const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];

export default function CheckOut() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("steps");

  // If "steps" query parameter is passed, set it as the initial active step, else start from 0
  const initialStep = step ? parseInt(step) : 0;
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20 mt-10">
      <Box sx={{ width: "100%" }}>
        {/* Stepper Component */}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
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
            {/* Render content based on the current step */}
            <Box sx={{ mt: 2 }}>
              {activeStep === 1 && <DeliverAddressForm />}
              {activeStep === 2 && <OrderSummery />}
              {/* Placeholder for other steps */}
              {activeStep !== 1 && activeStep !== 2 && (
                <Typography>Step {activeStep + 1} Content</Typography>
              )}
            </Box>

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
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
