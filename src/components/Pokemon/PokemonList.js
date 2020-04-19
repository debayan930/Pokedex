import React from 'react';
import Pokemon from './Pokemon/Pokemon';
import classes from './PokemonList.module.css';

const PokemonList = (props) => {
    const pokeList = props.pokemon.map(poke => <Pokemon key={poke.id} pokemon={poke} />);
    
    return(
        <div className={classes.PokemonList}>
            {pokeList}
        </div>
    );
};

export default PokemonList;