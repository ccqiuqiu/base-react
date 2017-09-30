import React from 'react'
import PropTypes from 'prop-types'
import RouteWithSubRoutes from '../../../router/RouteWithSubRoutes'
import { Switch } from 'react-router-dom'

const Hello = ({ routes }) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
)

Hello.prototype.propTypes = {
  routes: PropTypes.array
}

export default Hello
