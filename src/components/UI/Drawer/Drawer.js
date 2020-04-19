import React from 'react';
import classes from './Drawer.module.css';

const Drawer = (props) => {
    return(
        <div
            className={classes.Drawer}
            onClick={props.clicked}
        >
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
            <div className={classes.Bar}></div>
        </div>
    );
};

export default Drawer;