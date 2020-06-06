import { ERROR_LOGIN, ADD_CATEGORY, ADD_BUSINESS, DELETE_BUSINESS } from './constants';



export const addCategory = (payload) =>  {
    return {
        type:ADD_CATEGORY,
        payload
    }
}

export const addBusiness = (payload, business) => {
    return {
        type: ADD_BUSINESS,
        payload,
        business
    }
}

export const deleteBusiness = (id,business) => {
    
    return {
        type: DELETE_BUSINESS,
        id,
        business
    }
}