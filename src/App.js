import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { VStack, Center, Container } from "@chakra-ui/react";

import CompareText from "./views/project/Filter";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import NotFoundPage from "./views/NotFoundPage";
import PrivateRoute, {AdminRoute} from "./views/PrivateRoute";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import AdminHome from "./views/admin/Home";
import ListUsers from "./views/admin/ListUsers";
import ListComparisons from "./views/admin/ListComparisons";
import ListKeys from "./views/admin/ListKeys";
import CreateKey from "./views/admin/CreateKey";
import CreateUser from "./views/admin/CreateUser";
import UpdateUser from "./views/admin/UpdateUser";

import React  from 'react';

const App = () => {
    return (
        <Router>
            <VStack h="100vh" align="stretch">
                <Header />
                <Center h="100%" px="2rem">
                    <Container maxW="container.lg">
                        <Container
                            p={8}
                            maxWidth="80%"
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
                                <AdminRoute
                                    exact
                                    path="/admin/create_user"
                                    component={CreateUser}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin/create_key"
                                    component={CreateKey}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin/list_users/:page?"
                                    component={ListUsers}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin/list_comparisons/:page?"
                                    component={ListComparisons}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin/list_keys/:page?"
                                    component={ListKeys}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin/update_user/:id?"
                                    component={UpdateUser}
                                />
                                <AdminRoute
                                    exact
                                    path="/admin"
                                    component={AdminHome}
                                />
                                 <Route path="*" component={NotFoundPage} />
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
