import { USER_LOGIN } from '../actions/constants';

const initialState = {
    user: []
};


export function loginReducer(state=initialState, action) {
    switch(action.type) {
        case USER_LOGIN:
            return Object.assign({}, state,  {
                user:state.user.concat(action.payload)
            });
        default:
            return state
    }

}