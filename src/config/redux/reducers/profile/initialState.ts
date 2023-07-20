import { User } from "../../../../domain/entities/user";


export interface UserInitialState extends User {

}

export const initialState: UserInitialState = {
    id: 0,
    name: '',
    email: '',
    password: '',
    image: ''
};