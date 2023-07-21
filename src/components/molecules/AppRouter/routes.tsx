import { ComponentType } from "react";
import { DefaultParams, RouteComponentProps } from "wouter";
import { authPath } from "../../../domain/constants/endpoints";
import Login from "../../../pages/auth/Login";
import SingUp from "../../../pages/auth/SingUp";
import Home from "../../../pages/dashboard/Home";
import Profile from "../../../pages/dashboard/Profile";

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
        component: Profile,
        isPrivate: true,
    },
];
