/**
 * Created by cc on 2017/7/27.
 */

import conn from '../../conn'

export default {
  todoList: data => {
    return conn.post('/todo/list', data)
      .then(res => ({res})).catch(err => ({err}))
  }
}
