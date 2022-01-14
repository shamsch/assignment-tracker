import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './SearchBar.js'
import { useMode } from '../hooks/useMode'

export default function NavBar() {
    const {mode, changeMode} = useMode();
    
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
