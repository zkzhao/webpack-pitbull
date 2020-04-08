import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './config/index'
import { splitTypeOfRoute, omitRouteRenderProperties } from './utils'
import Layout from '../pages/layout'
import Auth from '@/components/auth'

const [basicRoute, layoutRoute] = splitTypeOfRoute(routes)
const Router: React.FC = () => {
  return (
    <Switch>
      {basicRoute.map(item => {
        if (item.auth) {
          return (
            <Route
              {...omitRouteRenderProperties(item)}
              key={item.path}
              render={() => {
                const Comp = item.component
                return (
                  <Auth redirect={item.redirect}>
                    <Comp />
                  </Auth>
                )
              }}
            />
          )
        }
        return <Route {...omitRouteRenderProperties(item)} key={item.path} component={item.component} />
      })}
      <Route key="dashboard" path="/dashboard" component={() => <Layout routes={layoutRoute} />} />
    </Switch>
  )
}

export default Router
