import { USER_LOGIN, ERROR_LOGIN,ADD_CATEGORY } from '../actions/constants';

const initialState = {
    user: [],
    error_login:'',
    categories:[]
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

export function addCategoryReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CATEGORY:
            return Object.assign({}, state, {
                categories:state.categories.concat(action.payload)
            });
    default:
        return state
    }
}