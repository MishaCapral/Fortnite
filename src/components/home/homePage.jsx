import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
const HomePage = () => {
  return (
    <Container>
      <Box sx={{ height: "100vh" }}>
        <Typography variant="h1" style={{ color: "black" }}>
          Home page
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
