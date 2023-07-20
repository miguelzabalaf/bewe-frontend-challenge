import { combineReducers } from 'redux';
import { profileReducer } from './profile';

export default combineReducers({
    theme: profileReducer,
});