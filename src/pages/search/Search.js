import { useLocation } from 'react-router-dom'
import AssignmentCard from '../../components/AssignmentCard'
import { useState, useEffect } from 'react'
import { project } from '../../firebase/config'
// styles
import './Search.css'

export default function Search() {
  //retrieving query from the url 
  const queryString = useLocation().search
  //sanitizing the string 
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = project.collection("assignments").where('title', "array-contains", query).onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No assignment to load");
          setIsPending(false);
        } else {
          console.log(snapshot)
          setData(null);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [query]);

  return (
    <div>
      <h2 className="page-title">Assignment including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <AssignmentCard assignment={data}/>}
    </div>
  )
}