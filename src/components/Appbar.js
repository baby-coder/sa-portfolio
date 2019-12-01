import React from 'react';
import { fade, makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { callbackify } from 'util';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    width: '100%'
  },
  appBar: {
      backgroundColor: '#282c34',
      boxShadow: 'none'
  },
  box: {
    display: 'flex',
    left: '80%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    cursor: 'pointer'
  },
  subTitle: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    cursor: 'pointer'
  }
}));


export default function HeaderAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                SA.
            </Typography>
            <Box className={classes.box} >
                <Typography className={classes.subTitle} variant="h6" noWrap>
                    Work
                </Typography>
                <Typography className={classes.subTitle} variant="h6" noWrap>
                    About
                </Typography>
                <Typography className={classes.subTitle} variant="h6" noWrap>
                    Contact
                </Typography>
            </Box>
            
            </Toolbar>
        </AppBar>  
    </div>
  );
}
