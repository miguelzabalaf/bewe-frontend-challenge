import { PropsWithChildren } from "react";

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement>, PropsWithChildren {

}

export interface ScreenControllerMethods {

}

export interface ScreenControllerOutputProps extends ScreenProps, ScreenControllerMethods {

}