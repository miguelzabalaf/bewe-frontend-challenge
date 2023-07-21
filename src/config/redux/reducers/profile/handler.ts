import types from "./constants";
import { User } from "../../../../domain/entities/user";
import { UserInitialState, initialState } from './initialState';
import { PayloadAction } from '@reduxjs/toolkit';

export const handler = {
    [types.CHANGE_USER](state: UserInitialState, action: PayloadAction<User>): UserInitialState {
        const user = action.payload;
        return {
            ...state,
            user
        };
    },
    [types.CHANGE_TOKEN](state: UserInitialState, action: PayloadAction<string>): UserInitialState {
        const token = action.payload;
        return {
            ...state,
            auth: {
                token,
            }
        };
    },
    [types.LOGOUT](): UserInitialState {
        return {
            ...initialState
        };
    }
};
