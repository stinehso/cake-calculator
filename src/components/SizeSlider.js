import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginTop: '40px',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0 cm',
  },
  {
    value: 20,
    label: '20 cm',
  },
  {
    value: 40,
    label: '40 cm',
  },
  {
    value: 60,
    label: '60 cm',
  },
];

function valuetext(value) {
  return `${value} cm`;
}

export default function DiscreteSlider({ valueChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={35}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={0.5}
        marks={marks}
        valueLabelDisplay="on"
        track={false}
        min={0}
        max={60}
        onChange={e => valueChange(parseFloat(e.target.textContent))}
      />
    </div>
  );
}
