import logo from '../img/namelogo2.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar(){
    return(
        <>           
        <ul className="nav me-auto mb-2 mb-lg-0 justify-content-center" style={{backgroundColor: '#FFF0E7'}} >
            <NavLink to="/" style={{color:'#46223F'}}>About</NavLink>
            <li>
                <Link className="navbar-brand" to="/">
                    <img src={logo} style={{height:"60px"}}  alt='...'/>
                </Link>
            </li>
            <NavLink to="/proj" style={{color:'#46223F'}}>Projects</NavLink>
            <NavLink to="/contact" style={{color:'#46223F'}}>Contact</NavLink>
        </ul>
        </>
    )
}

function NavLink({to, children}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname})
    // console.log(resolvedPath);
    return(
        
        // <li className={path === href ? "active" : ""}>
        //     <a href={href}>{children}</a>
        // </li>
        <li className={isActive ? "nav-item mt-2 active" : "nav-item mt-2"}>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default Navbar;