import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";

export interface SignUpProps {

}

export interface SignUpFormProps {
    name: string;
    email: string;
    password: string;
}

export type SignUpFormKeys = keyof SignUpFormProps;

export type SignUpFormValidatorShapeKeys = {
    [type in SignUpFormKeys]: AnySchema;
};

export interface SignUpControllerOutputProps extends SignUpProps, FormProps {
}