import React from 'react';
import Pokemon from './Pokemon/Pokemon';
import classes from './PokemonList.module.css';

const PokemonList = (props) => {
    const pokeList = props.pokemon.map(poke => <Pokemon key={poke.id} pokemon={poke} pokemonSelect={props.pokemonSelect} />);
    
    return(
        <div className={classes.PokemonList}>
            {pokeList}
        </div>
    );
};

export default PokemonList;