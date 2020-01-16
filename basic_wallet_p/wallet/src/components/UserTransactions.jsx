import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getChain} from "../store/actions"
import { balanceCalc } from '../utils/balanceCalc'
import { TransactionDiv, LedgerDiv } from './Styles'
const UserTransactions = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [balance, setBalance] = useState(0)

    const [page, setPage] = useState(1)
    
    useEffect(_ =>
    {
        setBalance(balanceCalc(state.userTransactions, state.userName))

    }, [state.userTransactions])

    const handleGetTransactions = _ =>
    {
        dispatch(getChain())
    }

    return (
        <LedgerDiv>
            <div>Balance: {balance}</div>
            <button className="button" onClick={handleGetTransactions}>Get Transactions</button>
            <h3 className="title is-3">Transactions:</h3>
            <div className="box">
                <nav className="pagination" role="navigation" aria-label="pagination">
                    <a 
                        className="pagination-previous" 
                        title="This is the first page"
                        // {page > 1 ? disabled : null}
                        onClick={_ => {
                            return page > 1 ?
                            setPage(page-1) :
                            null
                        }}
                    >
                        Previous
                    </a>
                    <a 
                        className="pagination-next"
                        onClick={_ => {
                            return page < Math.ceil(state.userTransactions.length/10) ?
                            setPage(page+1) :
                            null
                        }}
                    >
                        Next page
                    </a>
                    <ul className="pagination-list">
                        {state.userTransactions.map((el, index) =>
                        {
                            return (index + 1) % 10 === 1 ? (
                                <li key={index}>
                                    <a 
                                        className={`pagination-link ${page===Math.ceil((index+1)/10) ? 'is-current' : null}`}
                                        aria-label={`Page ${Math.ceil((index+1)/10)}`}
                                        onClick={_ => setPage(Math.ceil((index+1)/10))}

                                    >
                                            {Math.ceil((index+1)/10)}
                                    </a>
                                </li>
                            ) : null
                        })}
                    </ul>
                </nav>
            </div>
            
            {state.userTransactions.map((el, index) =>
            {
                return Math.ceil((index+1)/10) === page ? (
                    
                        <TransactionDiv key={index} color={index%2 === 0 ? '#c1c1c1' : 'white'}>
                            <p>From: {el.sender == '0' ?'Server' : el.sender}</p>
                            <p>To: {el.recipient}</p>
                            <p>Amount: {el.amount}</p>
                        </TransactionDiv>
                ) : null
            })}
        </LedgerDiv>
    )
}

export default UserTransactions