import { Redirect, Route, Switch } from "wouter";
import _ from "lodash";
import { routes } from "./routes";
import PrivateRoute from "../../atoms/PrivateRoute";
import { authPath } from "../../../domain/constants/endpoints";

function View(): JSX.Element {
    return (
        <Switch>
            {_.map(routes, (route, idx) => {
                const { path, component, isPrivate } = route;
                return isPrivate ? (
                    // <PrivateRoute key={idx} path={path} component={component} />
                    <Route key={idx} path={path} component={component} />
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

export default View;
