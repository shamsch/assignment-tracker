import { Link } from "react-router-dom";
import { useMode } from "../hooks/useMode";
import { project } from "../firebase/config";

// styles
import "./AssignmentCard.css";

export default function AssignmentCard({ assignment }) {
  const {mode} = useMode()

  const deleteHandle = async (id) => {
    project.collection('assignments').doc(id).delete()
  };

  if(assignment.length===0){
    return <div className="error"> Nothing to show here</div>
  }

  return (
    <div className={`assignment-card`}>
      {assignment.map((task) => (
        <div key={task.id} className={`card ${mode}`}>
          <h3>{task.title}</h3>
          <button className="delete-btn" onClick={() => deleteHandle(task.id)}>
            Delete
          </button>
          <p>{task.time} mins to complete.</p>
          <div>{task.details.substring(0, 100)}...</div>
          <Link to={`/assignments/${task.id}`}>Read details</Link>
        </div>
      ))}
    </div>
  );
}
