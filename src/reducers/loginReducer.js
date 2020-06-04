import { USER_LOGIN, ERROR_LOGIN } from '../actions/constants';

const initialState = {
    user: [],
    error_login:''
};


export function loginReducer(state=initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return Object.assign({}, state,  {
                user:state.user.concat(action.payload)
            });
            case ERROR_LOGIN:
                return {
                    error_login:action.text
                }

        default:
            return state
    }

}