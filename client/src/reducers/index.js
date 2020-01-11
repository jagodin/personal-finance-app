import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import sidebarReducer from './sidebarReducer';
import accountReducer from './accountReducer';
import balanceReducer from './balanceReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    sidebar: sidebarReducer,
    plaid: accountReducer,
    balance: balanceReducer,
    transactions: transactionsReducer
});
