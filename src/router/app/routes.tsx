import { ComponentType } from "react";
import { authPath } from "../../domain/constants/endpoints";
import { ExampleScreen } from "../../pages/example";
import { DefaultParams, RouteComponentProps } from "wouter";
import Login from "../../pages/auth/login";

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
        path: `${authPath}/singin`,
        component: ExampleScreen,
        isPrivate: false,
    },
    {
        path: "/",
        component: ExampleScreen,
        isPrivate: true,
    },
    {
        path: "/profile",
        component: ExampleScreen,
        isPrivate: true,
    },
];
