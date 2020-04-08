import React, { useEffect } from 'react'
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
  LoginOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import imgs from '../../../assets/images'
import styles from './style.module.scss'
import UiBreadcrumb from '../ui-breadcrumb'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Modal } from 'antd'
import { ClickParam } from 'antd/lib/menu'
import { IDispatch } from '@/models/connect'
import { namespace } from '@/models/login'
import { namespace as globalNs } from '@/models/global'
import { connect } from 'react-redux'
interface IProps extends IDispatch {
  toggleCollapsed?: () => void
  handleRemoveTabsList: (code) => void
  collapsed?: boolean
  tabsList: any
  userInfo: defs.CustomerResponse
}
interface IButton {
  text: string
  path: string
  menuCode: string
  handleRemoveTabsList: (code) => void
}

function SpButton(props: IButton) {
  const { text, path, menuCode, handleRemoveTabsList } = props
  return (
    <NavLink exact className={styles.tabButton} activeClassName={styles.tabButtonActive} to={path}>
      <span>{text}</span>
      <CloseOutlined
        onClick={e => {
          e.preventDefault()
          handleRemoveTabsList(menuCode)
        }}
        className={styles.tabButtonIcon}
      />
    </NavLink>
  )
}
const TopHeader: React.FC<IProps> = props => {
  const menuHandlerMap = {
    logout: () => {
      Modal.confirm({
        title: '确定要退出登录吗？',
        icon: <ExclamationCircleOutlined />,
        okText: '确认',
        cancelText: '取消',
        onOk: () =>
          props.dispatch({
            type: `${namespace}/logout`,
            payload: {
              active: true
            }
          })
      })
    }
  }
  // mounted 请求用户数据
  useEffect(() => {
    props.dispatch({
      type: `${globalNs}/querUserInfo`
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClick(values: ClickParam) {
    const key = values.key
    menuHandlerMap[key]()
  }
  const userMenus = (
    <Menu style={{ width: 160 }} onClick={handleClick}>
      <Menu.Item key="logout">
        <LoginOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )
  const { toggleCollapsed, collapsed, tabsList, handleRemoveTabsList, userInfo } = props
  return (
    <>
      <div className={styles.topHeader}>
        <div className={styles.ignoreRight}>
          <div>
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => {
                  toggleCollapsed()
                }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => {
                  toggleCollapsed()
                }}
              />
            )}

            <div className={`${styles.inline} ${styles.ml10}`}>
              {tabsList.map(item => (
                <SpButton
                  key={item.menuCode}
                  handleRemoveTabsList={handleRemoveTabsList}
                  menuCode={item.menuCode}
                  path={item.componentPath}
                  text={item.menuName}
                />
              ))}
            </div>
          </div>
          <div className={styles.userInfo}>
            <BellOutlined style={{ fontSize: '16px', marginRight: '24px' }} />
            <Dropdown overlay={userMenus} placement="bottomLeft">
              <div className={styles.inline}>
                <img className={styles.ignoreHeaderAvatar} src={imgs.Avatar} alt="头像" />
                <span className={styles.headerUserName}>{userInfo.memberName}</span>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <UiBreadcrumb />
    </>
  )
}

const mapStateToProps = models => ({
  userInfo: models[globalNs].userInfo
})

export default connect(mapStateToProps)(TopHeader)
