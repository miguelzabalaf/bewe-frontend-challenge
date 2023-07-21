import { ComponentType } from "react";
import { DefaultParams, RouteComponentProps } from "wouter";
import { authPath } from "../../../domain/constants/endpoints";
import Login from "../../../pages/auth/Login";
import SingUp from "../../../pages/auth/SingUp";
import { ExampleScreen } from "../../../pages/example";
import Home from "../../../pages/dashboard/Home";

interface Route {
    path: string;
    component: ComponentType<RouteComponentProps<DefaultParams>> | undefined;
    isPrivate: boolean;
}

export const routes: Route[] = [
    {
        path: `${authPath}/login`,
        component: Login,
        isPrivate: false,
    },
    {
        path: `${authPath}/singup`,
        component: SingUp,
        isPrivate: false,
    },
    {
        path: "/",
        component: Home,
        isPrivate: true,
    },
    {
        path: "/profile",
        component: ExampleScreen,
        isPrivate: true,
    },
];
