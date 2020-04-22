import React from 'react';
import classes from './PokeAbility.module.css';

const PokeAbility = (props) => {
    return(
        <div className={classes.PokeAbility}>
            <span className={classes.Title}>{props.ability.name}</span>
            <span className={classes.Content}>{props.ability.effect_entries[0].effect}</span>
        </div>
    );
};

export default PokeAbility;