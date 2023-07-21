import { FormProps } from '../../../common/types';
import { AnySchema } from "yup";
import { User } from '../../../domain/entities/user';
import { LinkRegistered } from '../../../domain/models/link';
import { DeleteLinkParams } from '../../../domain/reposiories/link';

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
    linksPath: LinkRegistered[];
    onDeleteLink: (params: DeleteLinkParams) => void;
}