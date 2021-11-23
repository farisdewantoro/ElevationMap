import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    navbar: {
      height: '10vh'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    dekstop : {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up("sm")] : {
        display: 'flex',
      }
    },
    appName : {
      flexGrow: 1,
    },
    sosmed : {
      flexGrow: 1,
    },
    title: {
      fontSize: '18px',
    },
    subTitle: {
      fontSize: '12px',
    },
    logo : {
      width: '10%',
      display: 'none',

    }
  }));