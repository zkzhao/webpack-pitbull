import React, { Component } from 'react'
import { Layout, Spin } from 'antd'
import SideMenu from './side-menus'
import TopHeader from './top-header'
import { IRouteConfig } from '../../router/typing'
import { Route, Switch } from 'react-router-dom'
import { omitRouteRenderProperties } from '../../router/utils'
import { namespace } from '@/models/global'
import { connect } from 'react-redux'
import styles from './style.module.scss'
import { unionBy } from 'lodash'
import { withRouter, RouteComponentProps } from 'react-router'
const { Content } = Layout

interface IProps extends RouteComponentProps {
  routes: IRouteConfig[]
  loading: boolean
}

interface IState {
  breadcrumbs: string[]
  collapsed: boolean
  tabsList: any
}

/**
 * Layout组件
 */
class BasicLayout extends Component<IProps, IState> {
  state = {
    breadcrumbs: [],
    collapsed: false,
    tabsList: []
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  setTabsList = tabsList => {
    const newListArr = [...this.state.tabsList, tabsList]
    const list = unionBy(newListArr, 'menuCode')
    this.setState({
      tabsList: list
    })
  }
  removeTabsList = menuCode => {
    const list = this.state.tabsList.filter(item => menuCode !== item.menuCode)
    this.setState(
      {
        tabsList: list
      },
      () => {
        const len = this.state.tabsList.length
        if (len < 1) {
          return
        }
        // 删除以后跳转至最末路由
        this.props.history.push(this.state.tabsList[len - 1].componentPath)
      }
    )
  }
  render() {
    const { routes, loading } = this.props
    const { collapsed } = this.state
    return (
      <Layout style={{ height: '100vh' }}>
        <SideMenu handleSetTabsList={this.setTabsList} collapsed={collapsed} />
        <Content>
          <TopHeader
            tabsList={this.state.tabsList}
            handleRemoveTabsList={this.removeTabsList}
            collapsed={collapsed}
            toggleCollapsed={() => {
              this.toggleCollapsed()
            }}
          />
          <div style={{ overflow: 'auto', height: 'calc(100% - 118px)' }} id="pageWrap">
            {loading && (
              <div className={styles.loading}>
                <Spin tip="加载中..." size="large" />
              </div>
            )}
            <Switch>
              {routes.map(route => (
                <Route {...omitRouteRenderProperties(route)} key={route.path} component={route.component} path={route.path} />
              ))}
            </Switch>
          </div>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (models: any) => ({
  loading: models[namespace].loading
})

export default withRouter(connect(mapStateToProps)(BasicLayout))
