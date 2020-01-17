import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {postTransaction} from "../store/actions"

const Recipient = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [recipient, setRecipient] = useState("")
    const [amount, setAmount] = useState(0)

    const handleChange = e =>
    {
        setRecipient(e.target.value)
    }

    const handleAmount = e =>
    {
        setAmount(e.target.value)
    }
    // const handleEnter = e =>
    // {
    //     if(e.key === 'Enter') 
    //     {
    //         handleSubmit(e)
    //     }
    // }

    const handleSubmit = e =>
    {
        e.preventDefault()
        dispatch(postTransaction({recipient: recipient, amount: amount, sender: state.userName}))
        setRecipient("")
        setAmount(0)
    }

    return (
        <>
            <div className="box">
                <label className="label">{"Recipient"}</label>
                <div className="field">    
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Set your recipient's name" 
                            value={recipient} 
                            // onKeyPress={handleEnter}
                            onChange={handleChange}/>
                    </div>
                    <div className="control">
                        <input 
                            type="number" 
                            className="input" 
                            placeholder="Set the amount" 
                            value={amount} 
                            // onKeyPress={handleEnter}
                            onChange={handleAmount}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Recipient