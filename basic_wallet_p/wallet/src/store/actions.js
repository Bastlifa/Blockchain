import axios from 'axios'
export const GET_CHAIN_START = "GET_CHAIN_START"
export const GET_CHAIN_SUCCESS = "GET_CHAIN_SUCCESS"
export const GET_CHAIN_FAIL = "GET_CHAIN_FAIL"

export const POST_TRANSACTION_START = "POST_TRANSACTION_START"
export const POST_TRANSACTION_SUCCESS = "POST_TRANSACTION_SUCCESS"
export const POST_TRANSACTION_FAIL = "POST_TRANSACTION_FAIL"

export const SET_USER = "SET_USER"

const baseURL = 'http://localhost:5000'

export const getChain = _ => dispatch =>
{
    dispatch({ type: GET_CHAIN_START })

    axios.get(`${baseURL}/chain`)
    .then(res =>
    {
        console.log("res from getChain:", res)
        let transactionChain = res.data.chain.map(el => el.transactions)
        let transactions = []
        for(let i=0; i<res.data.chain.length; i++)
        {
            transactions = transactions.concat(transactionChain[i])
        }
        dispatch({ type: GET_CHAIN_SUCCESS, payload: transactions })
    })
    .catch(err =>
    {
        console.log("err from getChain:", err)
        dispatch({ type: GET_CHAIN_FAIL, payload: err })
    })
}

export const setUser = userName => dispatch =>
{
    dispatch({ type: SET_USER, payload: userName })
    dispatch(getChain())
}

export const postTransaction = transaction => dispatch =>
{
    dispatch({ type: POST_TRANSACTION_START })
    
    axios.post(`${baseURL}/transactions/new`, transaction)
    .then(res =>
    {
        console.log("res from postTransaction:", res)
        dispatch({ type: POST_TRANSACTION_SUCCESS, payload: res })
        dispatch(getChain())
    })
    .catch(err =>
    {
        console.log("err from postTransaction:", err)
        dispatch({ type: POST_TRANSACTION_FAIL, payload: err })
    })
}