import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';



const FooterWrapper = styled.div`
    display: block;
    padding-top: 40px;
    height: 60px;
    width: 100%;
`;

const FooterDiv = styled.div`
    background-color: rgb(245,245,245);
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    bottom: 0;
    minHeight: 60px;
    width: 100%;
`;

const footerContentStyles = makeStyles(theme => ({
    footerHeading: {
        fontSize: '42px',
        lineHeight: '140%',
        fontWeight: 600,
        color: 'rgb(46,41,78)'
    },
    email: {
        fontWeight: 600,
        fontSize: '29px',
        lineHeight: '140%',
        color: 'rgb(246,16,103)',
        textDecoration: 'none',
        '&:hover': {
            height: '3px',
            bottom: 0,
            left: 0,
            color: 'rgb(246, 16, 103)',
            transition: 'width 0.2s ease-out 0s',
            textDecoration: 'underline'         
        }
    },
    linkWidth: {
    }
}));

function FooterContent () {
    const classes = footerContentStyles();
    // TODO: handle mouse hover transition
    return (
        <Grid container spacing={10}>
            <Grid item xs={6}>
                <Typography variant='h2' className={classes.footerHeading}>
                    Do you have the next big idea? 
                </Typography>
                <Typography variant='subtitle1'>
                    Send me an email and let's talk. I respond within 1-2 working days.  
                </Typography>
                <Typography variant='subtitle1' component={Link} className={classes.email}>
                    subramanian.a@outlook.com
                </Typography>
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
    )
}

function Footer({children}) {
    return (
        <Fragment>
            <FooterWrapper>
                <FooterDiv>
                    <FooterContent />
                    {children}
                </FooterDiv>
            </FooterWrapper>
        </Fragment>
    )
}

export default Footer;