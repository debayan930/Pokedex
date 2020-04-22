import React from 'react';
import classes from './PokeDexEntry.module.css';

const PokeDexEntry = (props) => {
    let flavorText = '';

    for(let i=0;i<props.pokeDexEntry.length;i++){
        if(props.pokeDexEntry[i].language.name === 'en'){
            flavorText = props.pokeDexEntry[i].flavor_text;
            break;
        }
    }
    
    return(
        <div className={classes.PokeDexEntry}>
            <span>POKEDEX ENTRY</span>
            <span>{flavorText}</span>
        </div>
    );
};

export default PokeDexEntry;