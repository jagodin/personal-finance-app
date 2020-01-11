import { TOGGLE_SIDEBAR } from '../actions/types';

const initialState = {
    isSidebarOpen: false
};

function sidebarReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            };
        default:
            return state;
    }
}
export default sidebarReducer;
