import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    cursor: 'pointer',
    color: '#fff'
  },
  subTitle: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    cursor: 'pointer',
    color: '#fff'
  }
}));


export default function HeaderAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap component={Link} to={'/'}>
                SA.
            </Typography>
            <Box className={classes.box} >
                <Typography className={classes.subTitle} variant="h6" noWrap component={Link} to='/work'>
                    Work
                </Typography>
                <Typography className={classes.subTitle} variant="h6" noWrap component={Link} to='/about'>
                    About
                </Typography>
                <Typography className={classes.subTitle} variant="h6" noWrap component={Link} to='/projects'>
                    Projects
                </Typography>
            </Box>
            
            </Toolbar>
        </AppBar>  
    </div>
  );
}
