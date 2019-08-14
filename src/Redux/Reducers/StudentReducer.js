import {
   ADDSTUDENTS,
   EDITSTUDENT
  } from '../ActionTypes';
  
  const INITIAL_STATE = {
    students: [],
    useName:'balakrishna',
    password:123456
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADDSTUDENTS:
        let students = [...state.students]; 
            students = [...students, action.payload] 
        return { ...state, students };

        case EDITSTUDENT:
        state.students=[]
        return { ...state, students:[...action.payload]};
      default:
            return state;
  
    }
  
  }
  