import React from "react";
import '../../assets/css/NavBar.css';
import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to="/about"className="link">About</Link></li>
                    <li><Link to="/gallery"className="link">gallery</Link></li>
                    <li><Link to="/useeffect" className="link">UseEffect</Link></li>
                    <li><Link to="/useref" className="link">UseRef</Link></li>
                    <li><Link to="/usecontext" className="link">UseContext</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;