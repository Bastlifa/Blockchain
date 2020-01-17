import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setUser} from "../store/actions"
import UserName from "./UserName"
import Recipient from './Recipient'
import UserTransactions from "./UserTransactions"
import { PageContainer, UserAndRecipient } from "./Styles"

const User = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <>
            <PageContainer>
                <UserAndRecipient>
                    <UserName />
                    <Recipient />
                </UserAndRecipient>    
                <UserTransactions/>
            </PageContainer>
        </>
    )
}

export default User