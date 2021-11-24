import { Box, Container, Divider, Typography, Paper } from "@material-ui/core";
import Select from 'react-select'
import React from "react";
import { dataKelurahan } from "../../../Mock/Data-Kelurahan";
import { contentStyles } from "../ContentStyle";

const Map = () => {
    const classes = contentStyles();

  return (
    <Container className={classes.content} component={Paper}>
        <Typography variant="h4">Maps </Typography>
        <Divider />
        <Box component="div" mt={2}>
            <Typography variant="h6">Cari Kelurahan</Typography>
            <Select options={dataKelurahan} placeholder="Ketik Disini" />
        </Box>
    </Container>
  );
};

export default Map;
