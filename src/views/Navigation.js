import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Pick from "./Pick";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PrivateRoute from "./PrivateRoute"

export default function App() {
    // TODO show error message if no route match?
    return (
        <Router>
            <Layout>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/summaries/pick" component={Pick} />
                </Switch>
            </Layout>
        </Router>
    );
}
