import {makeStyles } from '@material-ui/core';

export const contentStyles = makeStyles((theme) => ({
    content: {
        padding:theme.spacing(4),
        marginBottom: theme.spacing(1),
        backgroundColor: '#f8f9fa',

    },
    tableColHeader: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    }
}));