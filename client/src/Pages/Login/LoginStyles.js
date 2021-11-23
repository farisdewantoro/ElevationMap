import { makeStyles } from "@material-ui/core/styles";
import bg2 from '../../Images/Background/bg-2.jpg'

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
      },
      image: {
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'grayscale(95%)',
        backgroundPosition: 'center',
      },
      logo: {
        width: '50%',
      },
      paper: {
        margin: theme.spacing(7, 5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));