import {
    ADDSTUDENTS,
    EDITSTUDENT
  } from '../ActionTypes';
  
  export const addStudent = (data) => {
    return(dispatch) => {
      dispatch({type: ADDSTUDENTS, payload: data});
    }
  }

  export const editStudent = (data) => {
    return(dispatch) => {
      dispatch({type: EDITSTUDENT, payload: data});
    }
  }
 
 
  