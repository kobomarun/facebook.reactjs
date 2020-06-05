import { USER_LOGIN, ERROR_LOGIN,ADD_CATEGORY, ADD_BUSINESS } from '../actions/constants';

const initialState = {
    user: [],
    error_login:'',
    categories:[],
    business:[]
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

export function addBusiness(state =initialState, action) {
    switch(action.type) {
        case ADD_BUSINESS:
            return Object.assign({}, state, {
                business:state.business.concat(action.payload)
            });
    default:
        return state
    }
}