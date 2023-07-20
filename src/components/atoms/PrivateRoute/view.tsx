import { Redirect, Route } from "wouter";
import { PrivateRouteControllerOutputProps } from "./types";

function View(props: PrivateRouteControllerOutputProps): JSX.Element {
    const { isAuthenticated, component: Component, ...routeProps } = props;
    return (
        <Route
            {...routeProps}
            component={(props) =>
                isAuthenticated && Component ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={"/auth/login"} />
                )
            }
        />
    );
}

export default View;
