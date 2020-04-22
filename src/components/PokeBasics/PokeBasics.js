import React from 'react';
import classes from './PokeBasics.module.css';
import PokeTypeSummary from '../PokeTypeSummary/PokeTypeSummary';

const PokeBasics = (props) => {
    return(
        <div className={classes.PokeBasics}>
            <div className={classes.ImgContainer}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`} alt={props.pokemon.name} />
            </div>
            <div className={classes.Basics}>
                <span className={classes.Title}>{props.pokemon.name}</span>
                <div className={classes.Name}>
                    <span>#{props.pokemon.id.toString().padStart(3, '0')}</span>
                    <span>{props.species.genera[2].genus}</span>
                </div>
                <PokeTypeSummary types={props.pokemon.types} />
            </div>
        </div>
    );
};

export default PokeBasics;