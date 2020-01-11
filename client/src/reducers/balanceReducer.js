import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';

import { GET_BALANCES, BALANCES_LOADING } from '../actions/types';

const initialState = {
    [DEFAULT_KEY]: null,
    balancesLoading: false,
    balances: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case BALANCES_LOADING:
            return {
                ...state,
                balancesLoading: true
            };
        case GET_BALANCES:
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                balances: action.payload,
                balancesLoading: false
            };
        default:
            return state;
    }
}
