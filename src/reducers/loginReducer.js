import { ADD_CATEGORY, ADD_BUSINESS, DELETE_BUSINESS,SEARCH } from '../actions/constants';

const initialState = {
    error_login:'',
    categories:[],
    business:[]
};

const userState = {
    email: 'admin@email.com',
    password: '@Password123'
}
export function userReducer(state = userState, action) {
    return state
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
            })
        
    default:
        return state
    }
}

export function deleteBusiness(state = initialState.business, action) {
    switch(action.type) {
       
        case DELETE_BUSINESS:
            let item = []
                    state.each(directory => { 
                        item.push(Object.assign({}, directory))
                    })
                
                    let newDirectory = item.filter(item => {
                    if(item.id !== action.id) {
                            // store.remove(id)
                            return item
                        }
                    })
                    console.log('delete',newDirectory)
            default:
        return state
    }
    
}

export function search(state = initialState.business, action) {
    switch(action.type) {
        case SEARCH:
            return state
    }
    return state
}