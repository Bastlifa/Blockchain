import {
    GET_CHAIN_START,
    GET_CHAIN_SUCCESS,
    GET_CHAIN_FAIL,
    SET_USER,
} from './actions'



const initialState = 
{
    isLoading: false,
    userName: "",
    userTransactions: [],
}

export const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case GET_CHAIN_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_CHAIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userTransactions: action.payload.filter(el => el.sender === state.userName || el.recipient === state.userName),
                error: "",
            }
        case GET_CHAIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case SET_USER:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state
    }
}