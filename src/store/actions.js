import * as actions from './actionTypes';
import axios from '../axios-pokemon';

const LIMIT = 50;

const updatePokemonState = (pokemon) => {
    return {
        type: actions.FETCH_POKEMON,
        payload: pokemon
    }
};

const updatePokemonCount = (count) => {
    return {
        type: actions.COUNT_POKEMON,
        payload: count
    }
};

export const updatePokemonType = (type) => {
    return {
        type: actions.POKEMON_TYPE,
        payload: type
    }
};

export const updateOffset = (offset) => {
    return {
        type: actions.UPDATE_OFFSET,
        payload: offset
    }
};

const updateLoadingStatus = (loading) => {
    return {
        type: actions.UPDATE_LOADING_STATUS,
        payload: loading
    }
};

export const fetchPokemon = () => {
    let pokeList = [];
    return (dispatch, getState) => {
        dispatch(updateLoadingStatus(true));
        if(getState().type.toLowerCase() === 'all'){
            axios.get('/pokemon?offset=' + getState().offset + '&limit=' + LIMIT)
            .then(response => {
                dispatch(updatePokemonCount(response.data.count));
                response.data.results.forEach(item => {
                    fetch(item.url)
                        .then(res => res.json())
                        .then(poke => {
                            const { id, name, types } = poke;
                            const updatedPoke = { id, name, types };
                            pokeList = [...pokeList, {...updatedPoke, ...{'img': `https://pokeres.bastionbot.org/images/pokemon/${updatedPoke.id}.png`}}];
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
                            dispatch(updatePokemonState(pokeList));
                            dispatch(updateLoadingStatus(false));
                        })
                })
            })
            .catch(error => console.log(error));
        } else {
            axios.get('/type/' + getState().type)
                .then(response => {
                    dispatch(updatePokemonCount(response.data.pokemon.length));
                    response.data.pokemon.slice(getState().offset, getState().offset + 50).forEach(poke => {
                        fetch(poke.pokemon.url)
                            .then(res => res.json())
                            .then(item => {
                                const { id, name, types } = item;
                                const updatedPoke = { id, name, types };
                                pokeList = [...pokeList, {...updatedPoke, ...{'img': `https://pokeres.bastionbot.org/images/pokemon/${updatedPoke.id}.png`}}];
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
                                dispatch(updatePokemonState(pokeList));
                                dispatch(updateLoadingStatus(false));
                            })
                        })
                })
                .catch(error => console.log(error));
        }
    }
};