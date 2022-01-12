import { Link, useHistory } from "react-router-dom";

// styles
import "./AssignmentCard.css";

export default function AssignmentCard({ assignment }) {
  const history = useHistory();

  const deleteHandle = async (id) => {
    const res = await fetch(`http://localhost:3000/assignments/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      history.go(0);
    }
  };

  if(assignment.length===0){
    return <div className="error"> Nothing to show here</div>
  }

  return (
    <div className="assignment-card">
      {assignment.map((task) => (
        <div key={task.id} className="card">
          <h3>{task.title}</h3>
          <button className="delete-btn" onClick={() => deleteHandle(task.id)}>
            Delete
          </button>
          <p>{task.time} to complete.</p>
          <div>{task.details.substring(0, 100)}...</div>
          <Link to={`/assignments/${task.id}`}>Read details</Link>
        </div>
      ))}
    </div>
  );
}
