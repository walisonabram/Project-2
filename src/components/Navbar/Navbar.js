import './Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/user-page'>
                My Library
            </NavLink>
        </nav>
    )
}

export default Navbar;