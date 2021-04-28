import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from "./core/components/navbar";
import Home from "./pages/home";
import Search from "./pages/search";

const Routes = () => (
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search" exact>
                <Search/>
            </Route>
        </Switch>

    </BrowserRouter>

)

export default Routes;