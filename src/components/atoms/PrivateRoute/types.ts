import { RouteProps } from "wouter";

export interface PrivateRouteProps extends RouteProps {

}

export interface PrivateRouteControllerOutputProps extends PrivateRouteProps {
    isAuthenticated: boolean;
}