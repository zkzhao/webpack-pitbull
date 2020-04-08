import { IRouteConfig } from '../../typing'
import LoginPage from '@/pages/login'
import RegistrationPage from '@/pages/registration'
import { LOGIN, REGISTRATION } from './path'
import { PURCHASE_ORDER_LIST } from '../order-manage/path'

const routes: IRouteConfig[] = [
  {
    path: LOGIN,
    component: LoginPage,
    breadcrumb: [],
    exact: true,
    pageTitle: '登录',
    useLayout: false,
    auth: true,
    redirect: PURCHASE_ORDER_LIST
  },
  {
    path: REGISTRATION,
    component: RegistrationPage,
    breadcrumb: [],
    exact: true,
    pageTitle: '注册',
    useLayout: false
  }
]

export default routes
