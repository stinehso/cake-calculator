import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function BackButton({ route, back }) {
    return (
        <IconButton edge="start" color="inherit" aria-label="back"
                      onClick={e => back(route)}>
            <ArrowBackIosIcon />
        </IconButton>
    )
}

export default BackButton
