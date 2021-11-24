import React from "react";
import Select from "react-select";
import { dataKelurahan } from "../../../Mock/Data-Kelurahan";
import { Box, Container, Divider, Typography, Paper } from "@material-ui/core";
import { contentStyles } from "../ContentStyle";

const Elevation = () => {
  const classes = contentStyles();

  return (
    <>
      <Container className={classes.content} component={Paper}>
        <Typography variant="h4">Elevation </Typography>
        <Divider />
        <Box component="div" mt={2}>
          <Typography variant="h6">Cari Kelurahan</Typography>
          <Select options={dataKelurahan} placeholder="Ketik Disini" />
        </Box>
      </Container>
      <div>SELECT KELURAHAN</div>
      <div>Gambar Elevation</div>
      <div>LEGENDA</div>
      <div>PETA</div>
    </>
  );
};

export default Elevation;
