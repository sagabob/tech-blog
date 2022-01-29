import logo from './assests/images/bobp_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaughWink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { selectedDarkIconColor } from './util/color'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="main-sidebar">
                <div className="sidebar-brand">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="sidebar-inner">
                    <ul className="icon-menu">
                        <li>
                            <Link to="/home"><FontAwesomeIcon icon={faHome} color={selectedDarkIconColor} /></Link>
                        </li>
                        <li>
                            <Link to="/about"><FontAwesomeIcon icon={faLaughWink} color={selectedDarkIconColor} /></Link>
                        </li>
                        <li>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faCodeBranch} color={selectedDarkIconColor} /></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section">
                <Outlet />
            </div>

        </>
    );
}

export default Navbar;