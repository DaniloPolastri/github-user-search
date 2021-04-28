import './style.scss'
import {Link} from 'react-router-dom';
const NavBar = () => (
    <div className="navbar-container">
       <Link to="/">
           <h4 className="nav-title">Bootcamp DevSuperior</h4>
       </Link>
    </div>
)
export default NavBar;