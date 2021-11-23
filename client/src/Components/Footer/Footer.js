import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        Dinas Pekerjaan Umum | Kota Tebing Tinggi {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
