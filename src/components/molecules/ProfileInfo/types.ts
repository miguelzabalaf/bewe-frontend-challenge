import { User } from "../../../domain/entities/user";


export interface ProfileInfoProps extends Pick<User, 'name'> {
    email?: User['email'];
    image?: User['image'];
    hideEditAction?: boolean;
}

export interface ProfileInfoControllerMethods {
    handleEdit: () => void;
}

export interface ProfileInfoControllerOutputProps extends ProfileInfoProps, ProfileInfoControllerMethods {

}