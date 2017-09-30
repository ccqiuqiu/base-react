/**
 * Created by cc on 2017/7/27.
 */
import Immutable from 'immutable'
import {createdReducer} from '../../../store/createdReducer'
import {takeEvery, fork, put, call} from 'redux-saga/effects'
import api from '../api'

const state = Immutable.fromJS({
  todos: []
})

export const actions = {
  getTodoList: () => ({type: 'getTodoList'}),
  getTodoListSuccess: data => ({type: 'getTodoListSuccess', data}),
  updateTodo: (i, todo) => ({type: 'updateTodo', i, todo}),
  delTodo: (i, todo) => ({type: 'delTodo', i})
}

export const reducers = createdReducer(state, {
  updateTodo (state, action) {
    return state.updateIn(['todos', action.i], t => Immutable.Map(action.todo))
  },
  delTodo (state, action) {
    return state.deleteIn(['todos', action.i])
  },
  getTodoListSuccess (state, action) {
    return state.update('todos', t => Immutable.fromJS(action.data))
  }
})

function* sagaTodoList () {
  yield takeEvery('getTodoList', runTodoList)
}

function* runTodoList (action) {
  const {res} = yield call(api.todoList)
  if (res) {
    yield put({type: 'getTodoListSuccess', data: res.data})
  }
}

export function* sagas () {
  yield fork(sagaTodoList)
}
