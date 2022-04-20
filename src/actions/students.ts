export const student_types = {
  GET_REQUEST_STUDENTS: 'GET_REQUEST_STUDENTS',
  GET_STUDENTS: 'GET_STUDENTS',
  ADD_STUDENT: 'ADD_STUDENT',
  EDIT_STUDENT: 'EDIT_STUDENT',
  REMOVE_STUDENT: 'REMOVE_STUDENT',
  ADD_NEW_STUDENT: 'ADD_NEW_STUDENT',
}

export const getRequestStudents = () => {
  return {
    type: student_types.GET_REQUEST_STUDENTS,
  }
}

export const getStudents = ({ students }: any) => {
  return {
    type: student_types.GET_STUDENTS,
    payload: students,
  }
}

export const addStudent = ({ student }: any) => {
  return {
    type: student_types.ADD_STUDENT,
    payload: student,
  }
}

export const editStudent = ({ student }: any) => {
  return {
    type: student_types.EDIT_STUDENT,
    payload: student,
  }
}

export const removeStudent = ({ student }: any) => {
  return {
    type: student_types.REMOVE_STUDENT,
    payload: student,
  }
}
