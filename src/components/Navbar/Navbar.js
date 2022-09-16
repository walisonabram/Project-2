import './Navbar.css'
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <NavLink to='/user-page'>
                USERPAGE1
            </NavLink>
            <NavLink to='/page2'>
                PAGE2
            </NavLink>
        </nav>
    )
}

export default Navbar;