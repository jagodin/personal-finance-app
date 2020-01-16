import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';

import {
    GET_BALANCES,
    BALANCES_LOADING,
    UPDATE_BALANCE
} from '../actions/types';

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
        case UPDATE_BALANCE:
            return {
                ...state,
                balances: state.balances.map(balance =>
                    balance._id == action._id
                        ? { ...balance, ...action.payload[0] }
                        : balance
                ),
                balancesLoading: false
            };
        default:
            return state;
    }
}
