import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { VStack, Center, Container } from "@chakra-ui/react";

import CompareText from "./views/project/Filter";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import PrivateRoute from "./views/PrivateRoute";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const App = () => {
    // TODO show error message if no route match?
    return (
        <Router>
            <VStack h="100vh" align="stretch">
                <Header />
                <Center h="100%" px="2rem">
                    <Container maxW="container.lg">
                        <Container
                            p={8}
                            maxWidth="500px"
                            borderWidth={1}
                            borderRadius={8}
                            boxShadow="lg"
                            ml="auto"
                            mr="auto"
                        >
                            <Switch>
                                <PrivateRoute exact path="/" component={Home} />
                                <PrivateRoute
                                    exact
                                    path="/filter/pick"
                                    component={CompareText}
                                />
                                <Route
                                    exact
                                    path="/signup"
                                    component={SignUp}
                                />
                                <Route
                                    exact
                                    path="/signin"
                                    component={SignIn}
                                />
                            </Switch>
                        </Container>
                    </Container>
                </Center>
                <Footer />
            </VStack>
        </Router>
    );
};

export default App;
