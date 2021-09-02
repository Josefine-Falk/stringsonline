import { Switch, Route } from "react-router";
import { Login } from "../compontens/login/login";
import { Payment } from "../compontens/payment/payment";
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

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/payment">
                <Payment/>
            </Route>
        </Switch>
    )
}