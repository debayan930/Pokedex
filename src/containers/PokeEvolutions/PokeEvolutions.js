import React from 'react';
import classes from './PokeEvolutions.module.css';

const PokeEvolutions = (props) => {
    return(
        <div className={classes.PokeEvolutions}>
            <span>EVOLUTIONS</span>
            {props.species.evolves_from_species ? props.species.evolves_from_species.name : <span>NONE</span>}
        </div>
    );
};

export default PokeEvolutions;