import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setUser} from "../store/actions"
import UserName from "./UserName"
import UserTransactions from "./UserTransactions"

const User = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <>
            <UserName />
            <UserTransactions/>
        </>
    )
}

export default User