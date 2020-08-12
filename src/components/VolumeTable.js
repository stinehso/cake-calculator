import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(6),
  },
}));

const cup = {
    toTbsp: 16,
    toMl: 16*15
}

export default function SpacingGrid() {
  const classes = useStyles();

  const formatNumber = (number) => {
      return new Intl.NumberFormat('en-IN', { 
        maximumFractionDigits: 2
        }).format(number)
  }

  return (
    <Grid container className={classes.root} spacing={6}>
        <Grid container xs={12} justify="center" spacing={6}>
            <Grid item xs={12}/>
      <h2>Volumtabell</h2>

            <Grid item xs={12}/>
          {
          [1, 1/2, 1/3, 1/4].map((value) => (
              <Fragment>
                <Grid item xs={3}/>
                <Grid key={value} item xs={2}> 
                    {formatNumber(value)} cup </Grid>
                <Grid key={value} item xs={2}> 
                    {formatNumber(value*cup.toTbsp)} ss </Grid>
                <Grid key={value} item xs={2}> 
                    {formatNumber(value*cup.toMl)} ml </Grid>
                <Grid item xs={3}/>
            </Fragment>
          ))}
          <Grid item xs={12}/>
          <Grid item xs={12}/>
        </Grid>
    </Grid>
  );
}
