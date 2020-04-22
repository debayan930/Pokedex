import React, { Component } from 'react';
import axios from '../../axios-pokemon';
import ControlBar from '../../components/ControlBar/ControlBar';
import PokemonList from '../../components/Pokemon/PokemonList';
import Aux from '../../hoc/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const LIMIT = 50;

class Pokedex extends Component {
    state = {
        pokemon: [],
        showModal: false,
        offset: 0,
        type: 'All',
        search: ''
    }

    abortController = new AbortController()

    modalCloseHandler = () => {
        this.setState((prevState, prevProps) => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    componentDidMount(){
        this.loadPokemon('All', true);
    }

    componentWillUnmount(){
        this.abortController.abort();
    }

    loadPokemon = (type) => {
        if(type.toLowerCase() === 'all'){
            axios.get('/pokemon?offset=' + this.state.offset + '&limit=' + LIMIT, { signal: this.abortController.signal })
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
                            pokemon: pokeList
                        }
                    }));
            }))
            .catch(error => console.log(error));
        } else {
            axios.get('/type/' + type, { signal: this.abortController.signal })
                .then(response => response.data.pokemon.forEach(poke => {
                    fetch(poke.pokemon.url)
                        .then(res => res.json())
                        .then(item => this.setState(prevState => {
                            let pokeList = [...prevState.pokemon, {...item, ...{'img': `https://pokeres.bastionbot.org/images/pokemon/${item.id}.png`}}];
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
                                pokemon: pokeList
                            }
                        }));
                }))
                .catch(error => console.log(error));
        }
    }

    loadMore = (type) => {
        this.setState((prevState) => {
            return {
                offset: prevState.offset + LIMIT
            }
        }, () => this.loadPokemon(type));
    }

    typeChangeHandler = (e) => {
        this.setState(
            { 
                type: e.target.value,
                search: '',
                offset: 0,
                pokemon: []
            }
        );
        
        this.loadPokemon(e.target.value);
    }
    
    searchChangeHandler = (e) => {
        this.setState(
            { 
                search: e.target.value
            }
        );

    }

    pokemonSelectedHandler = (pokemonName) => {
        this.props.history.push('/pokemon/' + pokemonName);
    }

    render(){
        const pokeList = this.state.pokemon.length ? <PokemonList pokemon={this.state.pokemon} pokemonSelect={this.pokemonSelectedHandler} />
            : null;
        
        return(
            <Aux>
                <ControlBar
                    type={this.state.type}
                    typeChange={this.typeChangeHandler}
                    search={this.state.search}
                    searchChange={this.searchChangeHandler}
                />
                <InfiniteScroll
                    dataLength={this.state.pokemon.length}
                    next={() => this.loadMore(this.state.type)}
                    hasMore={true || false}
                    loader={<Spinner />}
                    height='91vh'
                >
                    <LazyLoadComponent>
                        {pokeList}
                    </LazyLoadComponent>
                </InfiniteScroll>
            </Aux>
        );
    }
};

export default Pokedex;