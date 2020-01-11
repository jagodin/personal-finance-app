import { TOGGLE_SIDEBAR } from './types';

// Logout / Clear Profile
export const toggleSidebar = () => dispatch => {
    dispatch({ type: TOGGLE_SIDEBAR });
};
