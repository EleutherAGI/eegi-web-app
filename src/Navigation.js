import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
//import CompareSummary from "./views/project/Summarize";
import CompareText from "./views/project/Filter";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import PrivateRoute from "./views/PrivateRoute";

export default function App() {
    // TODO show error message if no route match?
    return (
        <Router>
            <Layout>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/filter/pick" component={CompareText} />
                </Switch>
            </Layout>
        </Router>
    );
}
