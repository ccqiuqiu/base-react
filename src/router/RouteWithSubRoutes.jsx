/**
 * Created by cc on 2017/7/26.
 */
import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    route.from ? <Redirect from={route.from} to={route.to} /> : <route.component {...props} routes={route.routes} />
  )} />
)
export default RouteWithSubRoutes
