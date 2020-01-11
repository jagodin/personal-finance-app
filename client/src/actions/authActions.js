import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

// Load user
export const loadUser = () => async dispatch => {
    setAuthToken(localStorage.token);

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register user
export const register = ({
    name,
    email,
    password,
    password2
}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password, password2 });

    try {
        const res = await axios.post('/api/users/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => console.error(error.msg));
        }

        dispatch({ type: REGISTER_FAIL, payload: errors });
    }
};

// Login user
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => console.error(error.msg));
        }

        dispatch({ type: LOGIN_FAIL, payload: errors });
    }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};
