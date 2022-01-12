import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './SearchBar.js'

export default function NavBar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to={'/home'} className='brand'>
                    <h1>Assignment Tracker</h1>
                </Link>
                <Searchbar />
                <Link to={'/create'}>
                    Create Assignment
                </Link>
            </nav>
        </div>
    )
}
