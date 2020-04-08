import { setLocalStorage, removeLocalStorage } from '@/utils/storage'
import { create, IParams } from '@/services/mods/session/create'
import config from '@/config'
import { getPageQuery } from '@/utils'
import { PURCHASE_ORDER_LIST } from '@/router/config/order-manage/path'
import { replace } from 'connected-react-router'
import { LOGIN } from '@/router/config/login/path'
import { stringify } from 'querystring'
export const namespace = 'user-login'

export default {
  namespace,
  state: {},
  effects: {
    *loginRequest({ payload: { account, password }, callback }, { call, put }) {
      const params: IParams = {
        queryParams: {},
        bodyParams: {
          account,
          password
        }
      }
      try {
        const res: defs.Result<string> = yield call(create, params)
        const token = res.data
        if (token) {
          callback()
          setLocalStorage(config.authKey, String(token))
          let { redirect } = getPageQuery()
          if (redirect) {
            const url = new URL(window.location.href)
            const redirectUrl = new URL(redirect)
            if (url.origin === redirectUrl.origin) {
              // 同站点重定向
              redirect = redirectUrl.pathname + redirectUrl.search
            } else {
              redirect = null
            }
          }
          const path = redirect || PURCHASE_ORDER_LIST
          // 跳转
          yield put(replace(path))
        }
      } catch (error) {}
    },
    *logout({ payload: { active } = { active: false } }, { put }) {
      const { redirect } = getPageQuery()
      if (window.location.pathname !== '/' && !redirect) {
        removeLocalStorage(config.authKey)
        yield put(replace({ pathname: LOGIN, search: active ? null : stringify({ redirect: window.location.href }) }))
      }
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
