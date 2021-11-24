import React from "react";
import {
  Divider,
  Typography,
  Container,
  Paper
} from "@material-ui/core";
import LocationCity from "@material-ui/icons/LocationCity";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import MapIcon from "@material-ui/icons/Map";
import HomeIcon from '@material-ui/icons/Home';
import { SidebarStyle } from "./SidebarStyle";
import { NavLink } from "react-router-dom";
import logo from '../../Images/Logo/logo.png'

export default function ListDividers() {
  const classes = SidebarStyle();

  return (
    <Container className={classes.container} component={Paper} >
      <div>
        <img src={logo} className={classes.logo} alt="Logo Dinas Pekerjaan Umum Bukit Tinggi" />
        <Typography className={classes.userInfo}>Username : </Typography>
      </div>
      <Divider className={classes.divider} />
      <NavLink to="/" className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </NavLink>
      <NavLink to="/kelurahan" className={classes.item}>
        <LocationCity className={classes.icon} />
        <Typography className={classes.text}>Kelurahan</Typography>
      </NavLink>
      <NavLink to="/elevation" className={classes.item}>
        <FilterHdrIcon className={classes.icon} />
        <Typography className={classes.text}>Elevation</Typography>
      </NavLink>
      <NavLink to="/map" className={classes.item}>
        <MapIcon className={classes.icon} />
        <Typography className={classes.text}>Maps</Typography>
      </NavLink>
      <Divider />
    </Container>
  );
}
