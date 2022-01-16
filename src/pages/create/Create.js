import { useState } from "react"
import "./Create.css"
import {useHistory} from 'react-router-dom'
import { project } from "../../firebase/config"

export default function Create() {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [time, setTime] = useState(0)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const doc = {title, details, time}
        try{
            await project.collection('assignments').add(doc)
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Assignment title</span>
                    <input 
                    type="text"
                    required
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                    > 
                    </input>
                </label>
                

                <label>
                    <span>Assignment Details</span>
                    <textarea 
                    required
                    onChange={(e)=> setDetails(e.target.value)}
                    value={details}
                    > 
                    </textarea>
                </label>

                <label>
                    <span>Time</span>
                    <input 
                    type="number"
                    required
                    onChange={(e)=> setTime(e.target.value)}
                    value={time}
                    > 
                    </input>
                </label>

                <button>
                    Submit
                </button>
            </form>    
        </div>
    )
}
