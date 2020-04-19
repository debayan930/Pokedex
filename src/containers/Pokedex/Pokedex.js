import React, { Component } from 'react';
import axios from '../../axios-pokemon';
import ControlBar from '../../components/ControlBar/ControlBar';
import PokemonList from '../../components/Pokemon/PokemonList';
import Aux from '../../hoc/Auxiliary';

class Pokedex extends Component {
    state = {
        pokemon: [],
        scrolling: false,
        showModal: false,
        offset: 0,
        type: 'All',
        search: ''
    }

    modalCloseHandler = () => {
        this.setState((prevState, prevProps) => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    componentDidMount(){
        this.loadPokemon();
    }

    loadPokemon = () => {
        axios.get('/pokemon?offset=' + this.state.offset + '&limit=20.json')
            .then(response => response.data.results.forEach(item => {
                fetch(item.url)
                    .then(res => res.json())
                    .then(poke => this.setState((prevState) => {
                        let pokeList = [...prevState.pokemon, {...poke, ...{'img': `https://pokeres.bastionbot.org/images/pokemon/${poke.id}.png`}}];
                        for(let i=0;i<pokeList.length;i++){
                            for(let j=i+1;j<pokeList.length;j++){
                                let temp = null;
                                if(pokeList[i].id > pokeList[j].id){
                                    temp = pokeList[i];
                                    pokeList[i] = pokeList[j];
                                    pokeList[j] = temp;
                                }
                            }
                        }

                        return {
                            pokemon: pokeList,
                            scrolling: false
                        }
                    }));
            }));
    }

    loadMore = () => {
        this.setState((prevState) => {
            return {
                offset: prevState.offset + 20,
                scrolling: true
            }
        }, this.loadPokemon);
    }

    typeChangeHandler = (e) => {
        this.setState({ type: e.target.value, search: '' });
    }
    
    searchChangeHandler = (e) => {
        this.setState({ search: e.target.value });
    }

    render(){
        const filteredPokemon = this.state.type === 'All' ? this.state.pokemon :
            this.state.pokemon.filter(poke => {
                if(poke.types.length === 2){
                    return (poke.types[0].type.name === this.state.type || poke.types[1].type.name === this.state.type);
                }
                return poke.types[0].type.name === this.state.type;
            });

        const filteredPokemonSearch = filteredPokemon.filter(poke => {
            return poke.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        const pokeList = this.state.pokemon.length ? <PokemonList pokemon={filteredPokemonSearch} /> : null;
        return(
            <Aux>
                <ControlBar
                    type={this.state.type}
                    typeChange={this.typeChangeHandler}
                    search={this.state.search}
                    searchChange={this.searchChangeHandler}
                />
                {pokeList}
            </Aux>
        );
    }
};

export default Pokedex;