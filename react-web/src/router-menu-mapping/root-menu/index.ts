import { OrderManageRouteMenuMap } from '../order-manage'
export interface IRootMenu {
  menuChildren: Array<IRootMenu>
  menuProps: {
    menuCode: string
    menuIcon: React.ReactNode
    menuName: string
    needShow: boolean // 可以理解为是否显示子菜单
    componentPath: string
  }
}

interface IBreadcrumb {
  path: string
  breadcrumbName: string
  children?: Array<IBreadcrumb>
}

const RootMenu: Array<IRootMenu> = [OrderManageRouteMenuMap]
/**
 * 根据路径code数组，查询对应的路径的中文名
 * @param paths [Array<string>] 一个路径数组
 */
export function getRoutePath(paths: Array<string>): Array<string> {
  paths = paths.reverse()
  const temps: Array<string> = []
  let idx = 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let item: any = RootMenu.find(menu => menu.menuProps.menuCode === paths[0])
  while (item && idx < paths.length) {
    temps.push(item.menuProps.menuName)
    ++idx
    // eslint-disable-next-line no-loop-func
    item = item.menuChildren.find((v: IRootMenu) => v.menuProps.menuCode === paths[idx])
  }
  return temps
}

/**
 * 用于将某一个path所在路径的路由补全
 * @param pathname string
 * @param menus Array 默认RootMenu
 */
export function covertPath2Code(pathname: string, menus?: Array<IRootMenu>): Array<string> {
  const temps = menus || RootMenu
  // 当前路由所在路径的MenuCode数组
  let keys = []
  for (const v of temps) {
    const { menuChildren, menuProps } = v
    if (menuProps.componentPath === pathname) {
      keys.push(menuProps.menuCode)
      break
    }
    const res = menuProps.needShow && covertPath2Code(pathname, menuChildren)
    if (res.length) {
      keys = [menuProps.menuCode, ...res]
      break
    }
  }
  return keys
}

/**
 * 用于将单个MenuCode所在路径补全
 * @param code string MenuCode
 * @param menus 菜单项 默认RootMenu
 */
export function covertCode2Full(code: string, menus?: Array<IRootMenu>): Array<string> {
  const temps = menus || RootMenu
  // 当前路由所在路径的MenuCode数组
  let keys = []
  for (const v of temps) {
    const { menuChildren, menuProps } = v
    if (menuProps.menuCode === code) {
      keys.push(menuProps.menuCode)
      break
    }
    const res = covertCode2Full(code, menuChildren)
    if (res.length) {
      keys = [menuProps.menuCode, ...res]
      break
    }
  }
  return keys
}

/**
 * 从菜单中选择出pathname对应的路由栈，用于面包屑
 * @param pathname string
 * @param menus 菜单
 */
export function getRouteStack(pathname: string, menus?: Array<IRootMenu>): Array<IBreadcrumb> {
  const temps = menus || RootMenu
  let stacks = []
  for (const v of temps) {
    const { menuChildren, menuProps } = v
    if (menuProps.componentPath === pathname) {
      stacks.push({ path: menuProps.componentPath, breadcrumbName: menuProps.menuName })
      break
    }
    const res = getRouteStack(pathname, menuChildren)
    if (res.length) {
      stacks = [{ path: menuProps.componentPath, breadcrumbName: menuProps.menuName }, ...res]
      break
    }
  }
  return stacks
}

export default RootMenu
