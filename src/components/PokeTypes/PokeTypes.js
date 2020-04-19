import React from 'react';
import classes from './PokeTypes.module.css';

const PokeTypes = (props) => {
    return(
        <div className={classes.PokeTypes}>
            <span className={[classes.Text, classes[props.types[0].type.name]].join(' ')}>
                {props.types[0].type.name}
            </span>
            {props.types.length === 2 ? <span className={[classes.Text, classes[props.types[1].type.name]].join(' ')}>{props.types[1].type.name}</span> : null}
        </div>
    );
};

export default PokeTypes;