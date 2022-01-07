import { useFetch } from '../../hooks/useFetch'
import AssignmentCard from '../../components/AssignmentCard'

// styles
import './Home.css'

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/assignments')

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <AssignmentCard assignment={data} />}
        </div>
    )
}
