import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import {Outlet} from "react-router-dom";
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:theme.spacing(10),
        backgroundColor: '#fefefe'
    }
  }));

const DashboardHOC = () => {
    const [sidebar, setSidebar] = useState(true);
    const classes = useStyles();
    
    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item sm={2}><Sidebar /></Grid>
                <Grid item sm={10}>
                    <Container className={classes.container}>
                        <Outlet/>
                        <Footer />
                    </Container>
                </Grid>
            </Grid>       
        </>
    )
}

export default DashboardHOC
