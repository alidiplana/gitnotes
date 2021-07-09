import { combineReducers } from "redux";
import {userReducer} from './usersReducer';

const allReducers = combineReducers({
    users: userReducer,
});

export default allReducers;