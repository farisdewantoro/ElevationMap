import { makeStyles } from '@material-ui/core/styles';

export const SidebarStyle = makeStyles((theme) => ({
    container: {
        height: '100vh',
        color: '#fefefe',
        position: 'relative',
        paddingTop:theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]:{
          backgroundColor: '#fefefe',
          color: '#555',
          border: "1px solid #ece7e7",
        }
    },
    logo: {
      display: 'none',
      [theme.breakpoints.up('sm')]:{
        width: '100%',
        display: 'block',
      }
      
    },
    userInfo: {
      marginTop: '0.5em',
      color: theme.palette.common.black,
      fontSize: '14px',
      display: 'none',
      [theme.breakpoints.up('sm')]:{
        width: '100%',
        display: 'block',
      }
    },
    divider: {
      margin: '1em 0',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        textDecoration: 'none',
        color: '#131313',
        [theme.breakpoints.up('sm')]:{
          marginBottom: theme.spacing(3),
          cursor:'pointer'
        }
    },
    icon: {
      marginRight:theme.spacing(1),
      [theme.breakpoints.up('sm')]:{
          fontSize:'18px'
      }
    },
    text:{
        fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
          display:'none'
      }
    }
  }));