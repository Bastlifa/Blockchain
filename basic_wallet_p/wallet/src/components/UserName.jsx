import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {setUser} from "../store/actions"

const UserName = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [userName, setUserName] = useState(state.userName)

    useEffect(_ =>
    {
        
    }, [state.userName])

    const handleChange = e =>
    {
        setUserName(e.target.value)
    }

    const handleEnter = e =>
    {
        if(e.key === 'Enter') 
        {
            handleSubmit(e)
        }
    }

    const handleSubmit = e =>
    {
        e.preventDefault()
        dispatch(setUser(userName))
        setUserName("")
    }

    return (
        <>
            <div className="box">
                <label className="label">{state.userName || "User Name"}</label>
                <div className="field has-addons">    
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Set your user name" 
                            value={userName} 
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