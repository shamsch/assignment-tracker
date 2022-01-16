import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMode } from "../../hooks/useMode";
import { project } from "../../firebase/config";
import "./Assignment.css";

export default function Assignment() {
  const { id } = useParams();
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
          result = snapshot.docs.filter((doc) => doc.id === id);
          setData(result.at(0).data());
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [id]);

  const { mode } = useMode();
  return (
    <div className={`assignment ${mode}`}>
      {error && <div className="error">{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          <h1 className="page-title">{data.title}</h1>
          <p> Time for the task {data.time}</p>
          <p>{data.details}</p>
        </>
      )}
    </div>
  );
}
