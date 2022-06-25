import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, logout, user } = useAuth0();
  const isUSer = isAuthenticated && user;

  return (
    <Route
      {...rest}
      render={() => {
        return isUSer ? children : <Redirect to={"/login"}></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
