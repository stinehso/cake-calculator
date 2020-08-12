import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  numberInput: {
    width: '10px',
  },
  },
}));

function InputRow({id, amount, item, calculate, onInputChange, multiplier}) {
    const classes = useStyles();
    let amountLabel, itemLabel
    id === 0 ? amountLabel = 'Mengde' : amountLabel = ''
    id === 0 ? itemLabel = 'Enhet og ingrediens' : itemLabel = ''

    const formatNumber = (number) => {
      return new Intl.NumberFormat('en-IN', { 
        maximumFractionDigits: 2
      }).format(number)
    }

    return (
        <Fragment>
            <TextField
                    id={`quantity${id}`}
                    label={amountLabel}
                    type="number"
                    defaultValue={amount}
                    placeholder='Mengde'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => onInputChange(e.target.value, id, 'quantity')}
            />
            <TextField
                    id={`text${id}`}
                    label={itemLabel}
                    type="text"
                    defaultValue={item}
                    placeholder='Enhet og ingrediens'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => onInputChange(e.target.value, id, 'text')}
            />
            <IconButton className={classes.arrow} id={id} color="inherit"      
                aria-label="calculate"
                onClick={(e) => calculate(id)}>
                    <ArrowForwardIcon />
            </IconButton>
            <Typography variant="body1" display='inline'>
                {`${formatNumber(amount*multiplier)} ${item}`}
            </Typography>
        </Fragment>
    )
}

export default InputRow
