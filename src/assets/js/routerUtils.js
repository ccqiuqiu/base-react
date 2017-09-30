/**
 * Created by 熊超超 on 2017/4/23.
 */
import createHistory from 'history/createHashHistory'
const history = createHistory()

export default {
  push (path) {
    history.push(path)
  },
  replace (path) {
    history.replace(path)
  },
  back () {
    history.go(-1)
  }
}
