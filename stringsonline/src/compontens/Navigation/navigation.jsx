
import {Link} from "react-router-dom";
export function Navigation() {
    return(
        <>
        <nav>
        <ul>
            <li>
                <Link to="/Frontpage">Forside</Link>
            </li>
            <li>
                <Link to="/Sales">Salgs- og handelbetingelser</Link>
            </li>
        </ul>
        </nav>
        </>
    )
}