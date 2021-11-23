import React from 'react';
import { Button, Paper, Box, Grid, TextField, CssBaseline} from '@material-ui/core';
import { useStyles } from './LoginStyles';
import { useNavigate } from 'react-router';
import Logo from '../../Images/Logo/logo.png'
import Footer from '../../Components/Footer/Footer';

const Login = () => {
    const classes = useStyles();
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        navigate("/");
    }
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} >
          
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} classname={classes.formWrapper} square>
          <div className={classes.paper}>
            <img src={Logo} alt="Dinas Pekerjaan Umum | Bukit Tinggi" className={classes.logo}/>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Masuk
              </Button>
              <Box mt={5}>
                
                <Footer />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
};

export default Login;
