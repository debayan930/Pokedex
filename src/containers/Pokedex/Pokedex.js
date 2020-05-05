import React, { Component } from 'react';
import ControlBar from '../../components/ControlBar/ControlBar';
import PokemonList from '../../components/Pokemon/PokemonList';
import Aux from '../../hoc/Auxiliary';
import Spinner from '../../components/UI/Spinner/Spinner';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Pagination from "react-js-pagination";
import './Pokedex.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-pokemon';

const LIMIT = 50;

class Pokedex extends Component {
    state = {
        showModal: false,
        search: '',
        // activePage: 1
    }

    pageChange = (pageNumber) => {
        if(pageNumber === this.props.activePage){
            return;
        }

        const offset = pageNumber > this.props.activePage ? this.props.offset + (pageNumber - this.props.activePage) * LIMIT : 
        this.props.offset - Math.abs((pageNumber - this.props.activePage)) * LIMIT;
        this.props.changeActivePage(pageNumber);
        this.props.loadMorePokemon(offset);
    }

    modalCloseHandler = () => {
        this.setState((prevState, prevProps) => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    componentDidMount(){
        this.props.fetchPokemon();
    }

    loadMore = (type) => {
        this.setState((prevState) => {
            return {
                offset: prevState.offset + LIMIT,
                activePage: prevState.activePage + 1
            }
        }, () => this.loadPokemonPaginate(type));
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
        const pokeList = !this.props.loading ? <PokemonList pokemon={this.props.pokemon} pokemonSelect={this.pokemonSelectedHandler} />
            : <Spinner />;
        
        return(
            <Aux>
                <ControlBar
                    type={this.props.type}
                    typeChange={this.props.changePokemonType}
                    search={this.state.search}
                    searchChange={this.searchChangeHandler}
                />
                <div
                    className='Paginate'
                    style={{
                        marginTop: '100px',
                        marginBottom: '-90px'
                    }}
                >
                    <Pagination
                        activePage={this.props.activePage}
                        itemsCountPerPage={50}
                        totalItemsCount={this.props.count}
                        pageRangeDisplayed={5}
                        onChange={this.pageChange.bind(this)}
                    />
                </div>
                <LazyLoadComponent>
                    {pokeList}
                </LazyLoadComponent>
                <div className='Paginate'>
                    <Pagination
                        activePage={this.props.activePage}
                        itemsCountPerPage={50}
                        totalItemsCount={this.props.count}
                        pageRangeDisplayed={5}
                        onChange={this.pageChange.bind(this)}
                    />
                </div>
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        type: state.type,
        offset: state.offset,
        count: state.count,
        loading: state.loading,
        activePage: state.activePage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemon: (type) => dispatch(actions.fetchPokemon(type)),
        changePokemonType: (event) => {
            dispatch(actions.updatePokemonType(event.target.value));
            dispatch(actions.updateOffset(0));
            dispatch(actions.fetchPokemon());
            dispatch(actions.updateActivePage(1));
        },
        loadMorePokemon: (offset) => {
            dispatch(actions.updateOffset(offset));
            dispatch(actions.fetchPokemon());
        },
        changeActivePage: (activePage) => {dispatch(actions.updateActivePage(activePage))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Pokedex, axios));