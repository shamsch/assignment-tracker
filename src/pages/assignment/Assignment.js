import {useParams} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'

export default function Assignment() {
    const {id} = useParams();
    const {data: assignment, isPending, error} = useFetch(`http://localhost:3000/assignments?id=${id}`)
    return (
        <div>
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div>}
            { assignment
             && <div>
                 <h1>{assignment.at(0).title}</h1>
                 </div>}
        </div>
    )
}
