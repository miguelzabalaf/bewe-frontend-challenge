import { User } from "../../../../domain/entities/user";


export interface UserInitialState {
    user: User;
    auth: {
        token: string;
    };
}

export const initialState: UserInitialState = {
    user: {
        id: 0,
        name: '',
        email: '',
        password: '',
        image: ''
    },
    auth: {
        token: '',
    }

};