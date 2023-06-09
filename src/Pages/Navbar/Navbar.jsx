import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const {user, userLogout} = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()

    }

    const navOptions = <>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/appointment'>Appointment</Link></li>
                            {
                                user &&
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                        </>
    return (
        <>
            <div className="navbar absolute text-white lg:px-20 mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">DOC HOUSE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-sm">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogout} className="hidden lg:block text-sm">Logout</button>
                        : 
                        <Link to='/login' className="hidden lg:block text-sm">Login</Link>
                    }
                </div>
                </div>
        </>
    );
};

export default Navbar;