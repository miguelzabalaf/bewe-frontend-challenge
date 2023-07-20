import createReducer from "../../helpers/createReducer";
import { handler } from "./handler";
import { initialState } from "./initialState";

export const profileReducer = createReducer(initialState, handler);