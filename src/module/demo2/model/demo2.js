/**
 * Created by cc on 2017/7/27.
 */
import Immutable from 'immutable'
import {createdReducer} from '../../../store/createdReducer'
import {takeLatest, fork, call} from 'redux-saga/effects'
import api from '../api'

const state = Immutable.fromJS({
})

export const actions = {
  login: (user, cb) => ({type: 'login', user, cb})
}

export const reducers = createdReducer(state, {
})

function* sagaLgoin () {
  yield takeLatest('login', runLogin)
}

function* runLogin (action) {
  const {res, err} = yield call(api.login, action.user)
  if (res) {
    console.log(res.data)
    action.cb()
  } else {
    console.log(err)
  }
}

export function* sagas () {
  yield fork(sagaLgoin)
}
