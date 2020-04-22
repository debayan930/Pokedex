import React from 'react';
import classes from './PokeBasics.module.css';
import PokeTypes from '../PokeTypes/PokeTypes';

const PokeBasics = (props) => {
    return(
        <div className={classes.PokeBasics}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt={props.pokemon.name} />
            <div className={classes.Basics}>
                <div className={classes.Name}>
                    <span>#{props.pokemon.id.toString().padStart(3, '0')}</span>
                    <span>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</span>
                </div>
                <PokeTypes types={props.pokemon.types} />
            </div>
        </div>
    );
};

export default PokeBasics;