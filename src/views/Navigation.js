import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Pick from "./Pick";
import Home from "./Home";
import SignUp from "./SignUp";

export default function App() {
    // TODO show error message if no route match?
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/summaries/pick" component={Pick} />
                </Switch>
            </Layout>
        </Router>
    );
}
