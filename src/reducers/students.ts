import * as actions from '../actions'
import { student } from '../student'
export const studentsReducer = (state: student[] = [], action: any) => {
  switch (action.type) {
    case actions.student_types.ADD_NEW_STUDENT:
      return [...state, action.payload]
    case actions.student_types.GET_STUDENTS:
      return action.payload
    case actions.student_types.EDIT_STUDENT:
      return state.map((stud) =>
        stud.id === action.payload.id ? action.payload : stud
      )
    case actions.student_types.REMOVE_STUDENT:
      return state.filter((stud) => stud.id !== action.payload.id && stud)
    default:
      return state
  }
}
