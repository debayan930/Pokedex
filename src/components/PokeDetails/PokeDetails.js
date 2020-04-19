import React from 'react';
import classes from './PokeDetails.module.css';

const PokeDetails = (props) => {
    return(
        <div className={classes.PokeDetails}>
            <img src={props.img} alt={props.name} />
            <span className={classes.Text}>{props.name}</span>
        </div>
    );
};

export default PokeDetails;