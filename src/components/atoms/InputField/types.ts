import { UseFormRegister } from "react-hook-form";

export enum InputFieldTypes {
    TEXT = "text",
    PASSWORD = "password",
    EMAIL = "email"
}

export interface InputFieldProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    label?: string;
    type?: InputFieldTypes;
    placeholder?: string;
    register: UseFormRegister<any>;
    hasError?: boolean;
    errorMessage?: string;
    name: string;
}

export interface InputFieldControllerOutputProps extends InputFieldProps {

}