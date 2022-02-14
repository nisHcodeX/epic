import { LOGIN_ATTEMPTED, LOGIN_SUCCESSFUL, LOGIN_FAILED } from "./auth.actions";

const initialState = {
    username: undefined,
    isLogin: false,
    token: undefined,
    loginState : 0
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                isLogin: true,
                token: action.payload.token,
                loginState : 1,
            };
        case LOGIN_ATTEMPTED:
            return {
                ...state,
                username: action.payload.username,
            };
        case LOGIN_FAILED:
            return {
                ...initialState,
            }
        default : 
        return state;
    }
}
export default authReducer;