import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';

import { GET_TRANSACTIONS, TRANSACTIONS_LOADING } from '../actions/types';

const initialState = {
    [DEFAULT_KEY]: null,
    transactionsLoading: false,
    transactions: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TRANSACTIONS_LOADING:
            return {
                ...state,
                transactionsLoading: true
            };
        case GET_TRANSACTIONS:
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                transactions: action.payload,
                transactionsLoading: false
            };
        default:
            return state;
    }
}
