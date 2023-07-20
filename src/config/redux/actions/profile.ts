import { User } from "../../../domain/entities/user";
import types from "../reducers/profile/constants";
import { PayloadAction } from '@reduxjs/toolkit';

export function profileActions() {
    return {
        onChangeProfile: function (payload: User): PayloadAction<User> {
            return {
                type: types.CHANGE_PROFILE,
                payload
            };
        }
    };
}