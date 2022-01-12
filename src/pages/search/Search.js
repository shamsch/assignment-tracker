import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import AssignmentCard from '../../components/AssignmentCard'

// styles
import './Search.css'

export default function Search() {
  //retrieving query from the url 
  const queryString = useLocation().search
  //sanitizing the string 
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `http://localhost:3000/assignments?q=${query}`
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Assignment including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <AssignmentCard assignment={data}/>}
    </div>
  )
}