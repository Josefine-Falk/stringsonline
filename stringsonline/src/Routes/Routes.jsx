import { Switch, Route } from "react-router";
import { Frontpage } from "../pages/Frontpage/FrontPage";
import { Sales } from "../pages/Salespage/SalesPage";

export function Routes() {
    return(
        <Switch>
            <Route exact path="/frontpage">
                <Frontpage/>
            </Route>

            <Route exact path="/sales">
                <Sales/>
            </Route>
        </Switch>
    )
}