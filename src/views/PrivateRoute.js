import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIfAuthenticated, checkIfAdmin } from "../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                checkIfAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};

export default PrivateRoute;

export const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                checkIfAdmin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};

