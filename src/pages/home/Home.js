import { project } from "../../firebase/config";
import AssignmentCard from "../../components/AssignmentCard";
import { useState, useEffect } from "react";

// styles
import "./Home.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true)

    const unsub = project.collection('assignments').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError('No assignment to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setIsPending(false)
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
    })

    return () => unsub()

  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <AssignmentCard assignment={data} />}
    </div>
  );
}
