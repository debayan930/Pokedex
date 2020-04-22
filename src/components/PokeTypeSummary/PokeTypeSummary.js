import React from 'react';
import classes from './PokeTypeSummary.module.css';

const PokeTypeSummary = (props) => {
    return(
        <div className={classes.PokeTypeSummary}>
            <span className={[classes.Text, classes[props.types[0].type.name]].join(' ')}>{props.types[0].type.name}</span>
            {props.types.length === 2 ? <span className={[classes.Text, classes[props.types[1].type.name]].join(' ')}>{props.types[1].type.name}</span> : null}
        </div>
    );
};

export default PokeTypeSummary;