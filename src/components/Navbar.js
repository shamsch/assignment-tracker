import { Link } from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to={'/home'} className='brand'>
                    <h1>Assignment Tracker</h1>
                </Link>
                <Link>

                </Link>
            </nav>
        </div>
    )
}
