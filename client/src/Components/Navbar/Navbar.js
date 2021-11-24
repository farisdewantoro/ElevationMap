import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useStyles } from "./NavbarStyle";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocationCity from "@material-ui/icons/LocationCity";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <LocationCity />
        </IconButton>
        <div className={classes.dekstop}>
          <div className={classes.appName}>
            <Typography variant="h6" className={classes.title}>
              Dinas Pekerjaan Umum
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Kota Tebing Tinggi
            </Typography>
          </div>
          <div className={classes.sosmed}>
            <Typography variant="h6" className={classes.subTitle}>
              Social Media :
            </Typography>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <Button size="small" color="inherit" startIcon={<ExitToAppIcon />}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
