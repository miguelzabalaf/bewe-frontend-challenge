import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";

export interface SingUpProps {

}

export interface SingUpFormProps {
    name: string;
    email: string;
    password: string;
}

export type SingUpFormKeys = keyof SingUpFormProps;

export type SingUpFormValidatorShapeKeys = {
    [type in SingUpFormKeys]: AnySchema;
};

export interface SingUpControllerOutputProps extends SingUpProps, FormProps {
}