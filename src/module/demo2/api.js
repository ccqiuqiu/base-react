/**
 * Created by cc on 2017/7/27.
 */

import conn from '../../conn'

export default {
  login: data => {
    return conn.post('/login', {user: data})
      .then(res => ({res}))
      .catch(err => ({err}))
  }
}
