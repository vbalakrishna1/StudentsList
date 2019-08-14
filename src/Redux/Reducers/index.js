/*Lib Imports*/
import { combineReducers } from 'redux';

/*Local Imports*/
import StudentReducer from './StudentReducer'


const rootReducer = combineReducers({
    StudentReducer,
})

export default rootReducer;
