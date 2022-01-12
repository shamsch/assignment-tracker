import { useEffect, useState } from "react"
import "./Create.css"
import { useFetch } from "../../hooks/useFetch"
import {useHistory} from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [time, setTime] = useState(0)
    const {data, error, sendData} = useFetch('http://localhost:3000/assignments', 'POST')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData({title, details, time})
        console.log(data, error)
    }

    useEffect(()=>{
        if(data){
            history.push('/home')
        }
    }, [data, history])

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
