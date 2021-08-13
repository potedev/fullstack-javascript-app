import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getLocalStorageItem } from "../utils/localStorage";

const AuthRoute = ({ component, path, exact, ...props }) => {
    const Component = component;
    const isLogged = useAuth();

    console.log('is logged', isLogged);

    if (!isLogged)
        return <Redirect to="/login" />;

    return <Route exact={exact} path={path} render={() => <Component {...props} />} />;
};

const useAuth = () => {
    const auth = getLocalStorageItem('user');
    return auth !== null;
};

export { AuthRoute, useAuth };