import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
//import CompareSummary from "./views/project/Summarize";
import CompareText from "./views/project/Filter";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import PrivateRoute from "./views/PrivateRoute";

const Navigation = () => {
    // TODO show error message if no route match?
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute
                    exact
                    path="/filter/pick"
                    component={CompareText}
                />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
            </Switch>
        </Router>
    );
};

export default Navigation;
