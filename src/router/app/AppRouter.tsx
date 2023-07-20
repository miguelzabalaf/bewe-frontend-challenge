import { Redirect, Route, Switch } from "wouter";
import PrivateRoute from "../../components/atoms/PrivateRoute";
import _ from "lodash";
import { routes } from "./routes";
import { authPath } from "../../domain/constants/endpoints";

export function AppRouter() {
    return (
        <Switch>
            {_.map(routes, (route, idx) => {
                const { path, component, isPrivate } = route;
                return isPrivate ? (
                    <PrivateRoute key={idx} path={path} component={component} />
                ) : (
                    <Route key={idx} path={path} component={component} />
                );
            })}
            <Route
                path={""}
                component={() => <Redirect to={`${authPath}/login`} />}
            />
        </Switch>
    );
}
