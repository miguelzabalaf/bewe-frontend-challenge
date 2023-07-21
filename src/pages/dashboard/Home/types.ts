import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";
import { User } from '../../../domain/entities/user';

export interface HomeProps {

}

export interface HomeFormProps {
    url: string;
    name: string;
}

export type HomeFormKeys = keyof HomeFormProps;

export type HomeFormValidatorShapeKeys = {
    [type in HomeFormKeys]: AnySchema;
};

export interface HomeControllerOutputProps extends HomeProps, FormProps {
    user: User;
}