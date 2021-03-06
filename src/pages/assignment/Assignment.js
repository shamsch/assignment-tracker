import {useParams} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import { useMode } from '../../hooks/useMode';
import './Assignment.css'

export default function Assignment() {
    const {id} = useParams();
    const {data: assignment, isPending, error} = useFetch(`http://localhost:3000/assignments?id=${id}`)

    const {mode}=useMode()
    return (
        <div className={`assignment ${mode}`}>
            { error && <div className='error'>{error}</div> }
            { isPending && <div>Loading...</div>}
            { assignment
             && <>
                 <h1 className='page-title'>{assignment.at(0).title}</h1>
                 <p> Time for the task {assignment.at(0).time}</p>
                 <p>{assignment.at(0).details}</p>
                </>}
        </div>
    )
}
