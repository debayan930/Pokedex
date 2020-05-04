import * as actions from './actionTypes';
import dotProp from 'dot-prop-immutable';

const initialState = {
    pokemon: [],
    type: 'All',
    offset: 0,
    count: 0,
    loading: true
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.FETCH_POKEMON:
            return dotProp.set(state, 'pokemon', action.payload);

        case actions.COUNT_POKEMON:
            return dotProp.set(state, 'count', action.payload);

        case actions.POKEMON_TYPE:
            return dotProp.set(state, 'type', action.payload);

        case actions.UPDATE_OFFSET:
            return dotProp.set(state, 'offset', action.payload);

        case actions.UPDATE_LOADING_STATUS:
            return dotProp.set(state, 'loading', action.payload);

        default:
            return state;
    }
};

export default reducer;