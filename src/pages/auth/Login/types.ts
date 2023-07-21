import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";

export interface LoginProps {

}

export interface LoginFormProps {
    email: string;
    password: string;
}

export type LoginFormKeys = keyof LoginFormProps;

export type LoginFormValidatorShapeKeys = {
    [type in LoginFormKeys]: AnySchema;
};

export interface LoginControllerOutputProps extends LoginProps, FormProps {
}