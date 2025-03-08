import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});
const Achivement = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography varient="h6" sx={{ letterSpacing: ".25px" }}>
          EliteDeals
        </Typography>
        <Typography>Congratulations </Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://img.freepik.com/premium-vector/shiny-golden-trophy-with-star-illustration-cartoon-icon_400474-509.jpg?semt=ais_hybrid"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achivement;
