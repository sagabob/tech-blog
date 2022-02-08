import logo from './assests/images/logos/bobp_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaughWink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { selectedDarkIconColor } from './util/color'
import { Outlet,  NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar has-shadow is-fixed-top is-hidden-desktop">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/home">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="lite-nav-bar">
                        <ul className="icon-menu">
                            <li>
                                <NavLink to="/home" className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faHome} color={selectedDarkIconColor} /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faLaughWink} color={selectedDarkIconColor} /></NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard" className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faCodeBranch} color={selectedDarkIconColor} /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="main-sidebar is-hidden-touch has-shadow">
                <div className="sidebar-brand">
                    <NavLink to="/"><img src={logo} alt="Tdp-logo-main" /></NavLink>
                </div>
                <div className="sidebar-inner">
                    <ul className="icon-menu">
                        <li>
                            <NavLink to="/home"  className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faHome} color={selectedDarkIconColor} /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faLaughWink} color={selectedDarkIconColor} /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive? 'is-active': "")}><FontAwesomeIcon icon={faCodeBranch} color={selectedDarkIconColor} /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div >
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;