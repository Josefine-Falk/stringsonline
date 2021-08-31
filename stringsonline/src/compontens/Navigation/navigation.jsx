import Logo from '../../assets/header-bg.png';
import {Link} from "react-router-dom";
import Style from './navigation.module.scss';
export function Navigation() {
    return(
        <>
        <nav className={Style.nav_container}>
            <img className={Style.logo} src={Logo} alt="" />
        <ul className={Style.nav_ul}>

            <li>
                <Link to="/Frontpage">Forside</Link>
            </li>

            <li>
                <Link to="/Sales">Salgs- og handelbetingelser</Link>
            </li>

            <li className={Style.login_button}>
                <Link to="/login">Login</Link>
            </li>
            
        </ul>
        </nav>
        </>
    )
}