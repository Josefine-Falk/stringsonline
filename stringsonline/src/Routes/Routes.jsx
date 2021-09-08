import { Switch, Route } from "react-router";
import { Comments } from "../compontens/Comments/Comments";
import { Login } from "../compontens/login/login";
import { Payment } from "../compontens/payment/payment";
import { ProductDetails } from "../compontens/Products/ProductDetails";
import { ProductList } from "../compontens/Products/ProductList";
import { ShoppingCart } from "../compontens/ShoppingCart/ShoppingCart";
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

            <Route exact path='/products'>
                <ProductList/>
            </Route>            
            <Route path='/products/:productId'>
                <ProductDetails />
            </Route>    

            <Route path='/shoppingcart'>
                <ShoppingCart/>
            </Route>

            <Route path='/comments'>
                <Comments/>
            </Route>

            <Route exact path="/payment">
                <Payment/>
            </Route>
        </Switch>
    )
}