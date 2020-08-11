import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import PieChartIcon from '@material-ui/icons/PieChart';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      margin: 'auto'

    },
  }),
);

function Navbar({ home, volumes }) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home"
                      onClick={home}>
                    <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Kakekalkulatoren
                    </Typography>
                    <IconButton className={classes.pieButton} color="inherit" aria-label="volume table"
                      onClick={volumes}>
                    <PieChartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
