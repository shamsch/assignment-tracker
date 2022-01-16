import { useLocation } from "react-router-dom";
import AssignmentCard from "../../components/AssignmentCard";
import { useState, useEffect } from "react";
import { project } from "../../firebase/config";
// styles
import "./Search.css";

export default function Search() {
  //retrieving query from the url
  const queryString = useLocation().search;
  //sanitizing the string
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = project.collection("assignments").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No assignment to load");
          setIsPending(false);
        } else {
          let result = {};
          let finalArray = [];
          result = snapshot.docs.filter((doc) =>
            doc.data().title.includes(query)
          );
          result.forEach((entry) => {
            finalArray.push({...entry.data(), id:entry.id});
          });
          console.log(finalArray);
          setData(finalArray);
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
      {data && <AssignmentCard assignment={data} />}
    </div>
  );
}
