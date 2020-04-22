import React, { Component } from 'react';
import classes from './PokeAbilities.module.css';
import Spinner from '../UI/Spinner/Spinner';
import PokeAbility from './PokeAbility/PokeAbility';

class PokeAbilities extends Component {
    state = {
        abilities: []
    }

    componentDidMount(){
        for(let i=0;i<this.props.pokemon.abilities.length;i++){
            fetch(this.props.pokemon.abilities[i].ability.url)
                .then(response => response.json())
                .then(item => this.setState(prevState => {
                    let abilityList = [...prevState.abilities, item];

                    return {
                        abilities: abilityList
                    }
                }));
        }
    }
    
    render(){
        const pokeAbilities = this.state.abilities.length ?
            this.state.abilities.map(ability => <PokeAbility key={ability.name} ability={ability} />)
            : <Spinner />;

        return(
            <div className={classes.PokeAbilities}>
                <span className={classes.Header}>ABILITIES</span>
                {pokeAbilities}
            </div>
        );
    }
};

export default PokeAbilities;