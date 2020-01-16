import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
// import {setUser} from "../store/actions"

const Recipient = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [recipientrName, setRecipientName] = useState("")

    const handleChange = e =>
    {
        setUserName(e.target.value)
    }

    const handleEnter = e =>
    {
        if(e.key === 'Enter') 
        {
            console.log('c')
            handleSubmit(e)
        }
    }

    const handleSubmit = e =>
    {
        console.log('b')
        e.preventDefault()
    }

    return (
        <>
            <div className="box">
                <label className="label">Recipient Name</label>
                <div className="field has-addons">    
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Set your recipient's name" 
                            value={recipientName} 
                            onKeyPress={handleEnter}
                            onChange={handleChange}/>
                    </div>
                    <div className="control">
                        <button className="button is-info" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default UserName