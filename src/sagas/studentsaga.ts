import { takeEvery, takeLatest, fork, call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions'

function* getStudents() {
  const { data } = yield call(axios.get, 'https://localhost:7121/api/Student')

  yield put({
    type: actions.student_types.GET_STUDENTS,
    payload: data,
  })
}

function* watchGetStudentsRequest() {
  yield takeEvery(actions.student_types.GET_REQUEST_STUDENTS, getStudents)
}

function* addStudent(stud: any) {
  try {
    yield call(axios.post, 'https://localhost:7121/api/Student', stud.payload)
    const { data } = yield call(axios.get, 'https://localhost:7121/api/Student')

    yield put({
      type: actions.student_types.GET_STUDENTS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}

function* watchAddStudent() {
  yield takeLatest(actions.student_types.ADD_STUDENT, addStudent)
}

function* editStudent(stud: any) {
  try {
    yield call(
      axios.put,
      `https://localhost:7121/api/Student/${stud.payload.id}`,
      stud.payload
    )
    getStudents()
  } catch (error) {
    console.log(error)
  }
}

function* watchEditStudent() {
  yield takeLatest(actions.student_types.EDIT_STUDENT, editStudent)
}

function* removeStudent(stud: any) {
  try {
    yield call(
      axios.delete,
      `https://localhost:7121/api/Student/${stud.payload.id}`
    )
    getStudents()
  } catch (error) {
    console.log(error)
  }
}

function* watchRemoveStudent() {
  yield takeLatest(actions.student_types.REMOVE_STUDENT, removeStudent)
}
const defaultSaga = [
  fork(watchGetStudentsRequest),
  fork(watchAddStudent),
  fork(watchEditStudent),
  fork(watchRemoveStudent),
]

export default defaultSaga
