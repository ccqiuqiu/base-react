import demo1 from '../module/demo1/routers'
import demo2 from '../module/demo2/routers'

const routes = [
  ...demo1,
  ...demo2,
  {
    from: '/',
    to: '/todo'
  }
]

export default routes
