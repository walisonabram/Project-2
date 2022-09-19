import './Navbar.css'
import { NavLink } from 'react-router-dom';
import homeIcon from '../../assets/images/teste.png'

function Navbar() {
    return (
        <nav>
            <NavLink to='/user-page'>
                My Library
            </NavLink>
            <NavLink to='/'>
                <img src={homeIcon} alt='home-icon' />
            </NavLink>
            <NavLink to='/page2'>
                All Colections
            </NavLink>
        </nav>
    )
}

export default Navbar;