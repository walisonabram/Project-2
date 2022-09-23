import './Navbar.css'
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/images/teste.png'

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