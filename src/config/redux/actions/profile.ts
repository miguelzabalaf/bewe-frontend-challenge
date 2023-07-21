import { User } from "../../../domain/entities/user";
import types from "../reducers/profile/constants";
import { PayloadAction } from '@reduxjs/toolkit';

export function profileActions() {
    return {
        onChangeUser: function (payload: User): PayloadAction<User> {
            return {
                type: types.CHANGE_USER,
                payload
            };
        },
        onChangeToken: function (payload: string): PayloadAction<string> {
            return {
                type: types.CHANGE_TOKEN,
                payload
            };
        }
    };
}