/**
 * Created by cc on 2017/7/2.
 */
import { fork } from 'redux-saga/effects'
import { reducers as TodoModel, sagas as TodoSagas } from './model/todo'

export const reducers = { TodoModel }
export function* sagas () {
  yield fork(TodoSagas)
}
