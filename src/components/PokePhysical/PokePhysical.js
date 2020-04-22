import React from 'react';
import classes from './PokePhysical.module.css';

const PokePhysical = (props) => {
    return(
        <div className={classes.PokePhysical}>
            <div className={classes.Stat}>
                <span>HEIGHT</span>
                <span>{props.pokemon.height}</span>
            </div>
            <div className={classes.Stat}>
                <span>WEIGHT</span>
                <span>{props.pokemon.weight}</span>
            </div>
        </div>
    );
};

export default PokePhysical;