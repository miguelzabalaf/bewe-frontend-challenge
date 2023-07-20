import types from "./constants";
import { User } from "../../../../domain/entities/user";
import { UserInitialState } from "./initialState";
import { PayloadAction } from '@reduxjs/toolkit';

export const handler = {
    [types.CHANGE_PROFILE](state: UserInitialState, action: PayloadAction<User>): UserInitialState {
        const profile = action.payload;
        return {
            ...state,
            ...profile
        };
    }
};
