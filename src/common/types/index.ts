import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface FormData {
    register: UseFormRegister<any>;
    loading: boolean;
    isValidForm: boolean;
}

export interface FormMethods {
    hasInputError: (inputName: any) => boolean;
    assignInputName: (inputName: any) => string;
    getInputErrorMessage: (inputName: any) => string;
    handleSubmit: UseFormHandleSubmit<any>;
    onSubmit: (data: any) => void;
}

export interface FormProps extends FormData, FormMethods { }