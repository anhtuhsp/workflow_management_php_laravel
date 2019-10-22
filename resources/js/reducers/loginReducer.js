import * as login from '../actions/loginAction';

const initialState = {
    isLogin: false,
    name: ''
    // NOTE
    // some thing you want to set global
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case login.LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
                name: action.name
            };
        // NOTE
        // write case to update initialState
        default:
            return state;
    }
};

export default loginReducer;