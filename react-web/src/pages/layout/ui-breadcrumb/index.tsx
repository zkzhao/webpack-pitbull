import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import { useLocation, Link } from 'react-router-dom'
// import { getRouteStack } from '@/router-menu-mapping/root-menu'
import styles from './style.module.scss'
import routesConfig from '../../../router/config'
import { IRouteConfig } from '@/router/typing'

function getBreadcrumb(pathname: string, routesConfig: IRouteConfig[]) {
  const routes = routesConfig.filter(route => route.useLayout)
  for (const route of routes) {
    const path = route.path
    const regStr = path.replace(/:\w+/g, '\\w+').replace(/\//g, '\\/') // 可能还有bug
    if (new RegExp(regStr).test(pathname)) {
      return route.breadcrumb
    }
  }
  return []
}

const UiBreadcrumb: React.FC = () => {
  const location = useLocation()
  const [routeStack, setRouteStack] = useState([])
  useEffect(() => {
    const { pathname } = location
    setRouteStack(getBreadcrumb(pathname, routesConfig))
  }, [location])

  function renderItem(route) {
    if (route.path === '') return route.title
    return <Link to={route.path}>{route.title}</Link>
  }

  return (
    <div className={styles.container}>
      <Breadcrumb itemRender={renderItem} routes={routeStack} />
    </div>
  )
}

export default UiBreadcrumb
