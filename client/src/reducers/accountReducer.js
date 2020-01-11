import { DEFAULT_KEY, generateCacheTTL } from 'redux-cache';
import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNTS,
    ACCOUNTS_LOADING
} from '../actions/types';

const initialState = {
    [DEFAULT_KEY]: null,
    accounts: [],
    accountsLoading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADING:
            return {
                ...state,
                accountsLoading: true
            };
        case ADD_ACCOUNT:
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                accounts: [action.payload, ...state.accounts]
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(
                    account => account._id !== action.payload
                )
            };
        case GET_ACCOUNTS:
            return {
                ...state,
                [DEFAULT_KEY]: generateCacheTTL(),
                accounts: action.payload,
                accountsLoading: false
            };
        default:
            return state;
    }
}
