import logo from '../img/namelogo2.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>           
        <ul className="nav me-auto mb-2 mb-lg-0 justify-content-center" style={{backgroundColor: '#FFF0E7'}} >
            <li className="nav-item mt-2">
                <Link className="nav-link active" to="/">About Me</Link>
            </li>
            <li>
                <Link className="navbar-brand" to="/">
                    <img src={logo} style={{height:"60px"}}  alt='...'/>
                </Link>
            </li>
            <li className="nav-item mt-2">
                <Link className="nav-link" to="/proj">Projects</Link>
            </li>
            <li className="nav-item mt-2">
                <Link className="nav-link" href="/contact">Contact</Link>
            </li>
        </ul>
        </>
    )
}

export default Navbar;