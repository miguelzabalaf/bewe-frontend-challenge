import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";
import { User } from '../../../domain/entities/user';

export interface ProfileProps {

}

export interface ProfileFormProps {
    name: string;
    email: string;
    location: string;
}

export type ProfileFormKeys = keyof ProfileFormProps;

export type ProfileFormValidatorShapeKeys = {
    [type in ProfileFormKeys]: AnySchema;
};

export interface ProfileControllerMethods {
    handleGoHome: () => void;
}

export interface ProfileControllerOutputProps extends ProfileProps, FormProps, ProfileControllerMethods {
    user: User;
}