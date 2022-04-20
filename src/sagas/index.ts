import { all } from 'redux-saga/effects'
import studentSaga from './studentsaga'

export default function* defaultSaga() {
  yield all(studentSaga)
}
