/**
 * Created by cc on 2017/7/2.
 */
import { fork } from 'redux-saga/effects'
import { reducers as Demo2Model, sagas as Demo2Sagas } from './model/demo2'

export const reducers = { Demo2Model }
export function* sagas () {
  yield fork(Demo2Sagas)
}
