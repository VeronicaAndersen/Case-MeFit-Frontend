import keycloak from "../../Keycloak/keycloak";
import { Link, Navigate } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/')
        keycloak.logout()
    }
    return (
        <>
        {/* Menu component using keycloak to check if user is authenticated.*/}
            <nav>
                <Link className="menu-item"
                    id="logo"
                    to="/">
                    <strong>MeFit</strong>
                </Link>
                {/* {keycloak.authenticated && (
                    <Link className="menu-item"
                        id="goals"
                        to="/goals">
                        Goals
                    </Link>
                )} */}
                {keycloak.authenticated && (
                    <div className="dropdown">
                        <div className="menu-item"
                            id="profile"
                            to="/profile">
                            {keycloak.tokenParsed.given_name} 
                            <span className="dropdown-arrow"></span>
                            <div className="dropdown-profile">
                                <div><Link 
                                    id="settings"
                                    to="/profile">
                                    Settings
                                </Link>
                                </div>
                                <div onClick={onLogout}  id="logout">Logout</div>
                            </div>
                        </div>
                    </div>
                )}

            </nav>
            <Sidebar />
                {/* <div className="token">{keycloak.token}</div> */}

        </>
    )
}
export default Navbar;
