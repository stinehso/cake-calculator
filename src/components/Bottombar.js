import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      flexDirection: 'row',
      width: '100vw',
      position: 'fixed',
      bottom: 0,
    },
    backButton: {
      justifySelf: 'start',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      margin: 'auto',

    },
  }),
);

function Bottombar({ route, back }) {
    const classes = useStyles();

    return (
            <Toolbar className={classes.root}>
                <IconButton edge="start" className={classes.backButton} 
                  color="inherit" aria-label="back"
                  onClick={e => back(route)}>
                      <ArrowBackIosIcon />
                </IconButton>
            </Toolbar>
    )
}

export default Bottombar