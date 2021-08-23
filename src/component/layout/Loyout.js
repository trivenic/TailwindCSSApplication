import Routes from "../route/Routes";
import {useState} from "react";
import { Link } from "react-router-dom";
import './Layout.css'
function Layout(){

    const [isLoggedOut,setIsLoggedOut]=useState(false);
    function handleLogout(){
        setIsLoggedOut(false);
    }
    return (
        <div className="Layout">
            <header className="text-center">
            <h1 className="uppercase">React Application</h1> 
            <nav className="bg-blue-500 text-right">
                <Link to='/login' className="text-lg text-white p-15-0">Login</Link>
                <Link to='/register' className="Layout-nav-link">Register</Link>
                {isLoggedOut?( <Link to='/logout' className="Layout-nav-link" onClick={handleLogout}>Logout</Link>):null}
            </nav>
        </header>
        <main>
            <Routes setIsLoggedOut={setIsLoggedOut}/>
        </main>
        <footer></footer>
        </div>
    )
}

export default Layout;

