import React, { Component } from 'react';
import classes from './PokemonSummary.module.css';
import axios from '../../axios-pokemon';
import PokeBasics from '../../components/PokeBasics/PokeBasics';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary';
import PokePhysical from '../../components/PokePhysical/PokePhysical';
import { withRouter } from 'react-router-dom';
import PokeMisc from '../../components/PokeMisc/PokeMisc';
import PokeDexEntry from '../../components/PokeDexEntry/PokeDexEntry';
import PokeSprites from '../../components/PokeSprites/PokeSprites';
import PokeStats from '../../components/PokeStats/PokeStats';
import PokeAbilities from '../../components/PokeAbilities/PokeAbilities';
// import PokeEvolutions from '../PokeEvolutions/PokeEvolutions';

class PokemonSummary extends Component {
    state = {
        pokemon: null,
        species: null,
        moves: []
    }

    abortController = new AbortController()
    
    componentDidMount(){
        axios.get('/pokemon/' + this.props.match.params.name, { signal: this.abortController.signal })
            .then(response => {
                this.setState({ pokemon: response.data });
                axios.get('/pokemon-species/' + this.props.match.params.name)
                    .then(res => this.setState({ species: res.data }))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    componentWillUnmount(){
        this.abortController.abort();
    }
    
    render(){
        const pokeSummary = this.state.pokemon && this.state.species ?
            <Aux>
                <PokeBasics pokemon={this.state.pokemon} species={this.state.species} />
                <PokePhysical pokemon={this.state.pokemon} />
                <PokeMisc species={this.state.species} />
                <PokeDexEntry pokeDexEntry={this.state.species.flavor_text_entries} />
                <PokeSprites sprites={this.state.pokemon.sprites} />
                <PokeStats stats={this.state.pokemon.stats} />
                {/* <PokeEvolutions species={this.state.species} /> */}
                <PokeAbilities pokemon={this.state.pokemon} />

            </Aux>
            : <Spinner />;
        return(
            <div className={classes.PokemonSummary}>
                {pokeSummary}
            </div>
        );
    }
};

export default withRouter(PokemonSummary);