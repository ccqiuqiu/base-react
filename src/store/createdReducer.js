/**
 * Created by 熊超超 on 2017/4/19.
 * 创建reducer的工具方法
 */
export function createdReducer (data, reducer) {
  return (state = data, action) => {
    if (reducer.hasOwnProperty(action.type)) {
      return reducer[action.type](state, action)
    } else {
      return state
    }
  }
}
