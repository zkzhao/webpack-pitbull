import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { withRouter, useLocation, RouteComponentProps } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import RootMenu, { IRootMenu } from '@/router-menu-mapping/root-menu'
import styles from './style.module.scss'
import Icon from '@/components/Icon'
import { covertPath2Code, covertCode2Full } from '@/router-menu-mapping/root-menu'
import imgs from '@/assets/images'
const { Sider } = Layout
const { SubMenu, Item } = Menu

interface IProps extends RouteComponentProps {
  collapsed?: boolean
  handleSetTabsList: (tabsList) => void
}

function renderMenuIcon(icon: any) {
  if (!icon) {
    return ''
  }
  return <Icon component={icon} />
}

function renderMappingMenu(menus: Array<IRootMenu>, level: number, titleClick: (p: any) => void, handleSetTabsList: (e) => void) {
  return menus.map(menu => {
    const { menuChildren, menuProps } = menu
    return menuChildren.length > 0 && menuProps.needShow ? (
      <SubMenu
        style={level === 1 ? {} : { backgroundColor: '#000F17' }}
        key={menuProps.menuCode}
        onTitleClick={titleClick}
        title={
          <>
            {renderMenuIcon(menuProps.menuIcon)}
            <span>{menuProps.menuName}</span>
          </>
        }
      >
        {renderMappingMenu(menuChildren, level + 1, titleClick, handleSetTabsList)}
      </SubMenu>
    ) : (
      <Item key={menuProps.menuCode}>
        <Link onClick={() => handleSetTabsList(menuProps)} to={menuProps.componentPath}>
          <>
            {renderMenuIcon(menuProps.menuIcon)}
            <span>{menuProps.menuName}</span>
          </>
        </Link>
      </Item>
    )
  })
}

const SideMenus: React.FC<IProps> = prop => {
  const { collapsed, handleSetTabsList } = prop
  const location = useLocation()
  const history = useHistory()
  const [defaultKeys, setDefaultKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([])

  const [tempOpenKeys, setTempOpenKeys] = useState([])

  function handleClick({ item, key, keyPath }: any) {
    const pathname = item.props.children.props.to || '/dashboard'
    history.push(pathname)
  }

  function handleTitleClick(params) {
    const { key } = params
    const index = openKeys.indexOf(key)
    setOpenKeys(index === -1 ? covertCode2Full(key) : openKeys.slice(0, index))
  }

  useEffect(() => {
    const pathname = location.pathname
    const keys = covertPath2Code(pathname)
    setDefaultKeys(keys)
    setOpenKeys(keys)
  }, [location])

  useEffect(() => {
    // 如果收拢
    if (collapsed) {
      // 暂存当前打开的菜单数据
      setTempOpenKeys(openKeys)
      setOpenKeys([])
    } else {
      setOpenKeys(tempOpenKeys)
      setTempOpenKeys([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed])
  return (
    <Sider trigger={null} className={styles.antSide} collapsible width={256} collapsed={collapsed}>
      <img className={styles.logo} src={collapsed ? imgs.WBDLogoS : imgs.WBDLogo} alt="物必达" />
      <Menu
        style={{
          backgroundColor: 'rgb(2, 27, 41)'
        }}
        theme="dark"
        mode="inline"
        selectedKeys={defaultKeys}
        openKeys={openKeys}
        onClick={handleClick}
        inlineCollapsed={collapsed}
      >
        {renderMappingMenu(RootMenu, 1, handleTitleClick, handleSetTabsList)}
      </Menu>
    </Sider>
  )
}

export default withRouter(SideMenus)
