import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    calculateButton: {
      margin: theme.spacing(4),
      cursor: 'pointer',
      zIndex: 1,
    },
  }));

  
  export default function CalculateButton({ onSubmitSize }) {
    const classes = useStyles();
  
    return (
      <div>
          <Button variant="contained" color="primary" 
                className={classes.calculateButton}
                onClick={onSubmitSize} >
            Beregn
          </Button>
      </div>
    );
  }