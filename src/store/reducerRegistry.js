/**
 * Created by 熊超超 on 2017/5/11.
 */
export default class ReducerRegistry {
  constructor (initialReducers = {}) {
    this._reducers = {...initialReducers}
    this._emitChange = null
  }
  register (newReducers) {
    this._reducers = {...this._reducers, ...newReducers}
    if (this._emitChange != null) {
      this._emitChange(this.getReducers())
    }
  }
  getReducers () {
    return {...this._reducers}
  }
  setChangeListener (listener) {
    if (this._emitChange != null) {
      throw new Error('只能设置一次监听')
    }
    this._emitChange = listener
  }
}
