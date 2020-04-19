import React from 'react';
import classes from './Pokemon.module.css';
import PokeTypes from '../../PokeTypes/PokeTypes';
import PokeDetails from '../../PokeDetails/PokeDetails';

const Pokemon = (props) => {
    return(
        <div className={classes.Pokemon}>
            <div className={classes.MobileOnly}>
                <PokeDetails
                    img={props.pokemon.img}
                    name={props.pokemon.name}
                />
            </div>
            <div className={classes.DesktopOnly}>
                <div className={classes.Img}>
                    <img src={props.pokemon.img} alt={props.pokemon.name} />
                </div>
                <div className={classes.Details}>
                    <span className={classes.PokeId}>#{props.pokemon.id.toString().padStart(3, '0')}</span>
                    <span className={classes.PokeName}>{props.pokemon.name}</span>
                </div>
            </div>
            <PokeTypes types={props.pokemon.types} />
        </div>
    );
};

export default Pokemon;