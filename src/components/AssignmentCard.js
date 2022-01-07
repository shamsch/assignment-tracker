import { Link } from 'react-router-dom'

// styles
import './AssignmentCard.css'

export default function AssignmentCard({ assignment }) {
  return (
    <div className="assignment-card">
      {assignment.map(task => (
        <div key={task.id} className="card">
          <h3>{task.title}</h3>
          <p>{task.time} to make.</p>
          <div>{task.details.substring(0, 100)}...</div>
          <Link to={`/assignments/${task.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}
