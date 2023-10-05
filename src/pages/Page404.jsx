import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={9}>
          <Grid>
            <Typography color={"ButtonShadow"} variant="h1">
              404 NOT FOUND
            </Typography>
            <Typography color={"ButtonShadow"} variant="h6">
                La página que estás buscando no existe.
            </Typography>
            <br />
            <Link to={"/"}><Button variant="contained" color="info">Ir al inicio</Button></Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFound;