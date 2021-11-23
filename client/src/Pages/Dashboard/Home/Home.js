import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Logo from '../../../Images/Logo/logo.png'

const useStyles = makeStyles((theme) => ({
  welcome: {
    textAlign: "center",
    margin: "80px 0px",
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Typography variant="h3">Selamat Datang</Typography>
      <img src={Logo} />
      <Typography variant="h6">Username</Typography>
    </div>
  );
};

export default Home;
