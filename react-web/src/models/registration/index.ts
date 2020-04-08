import { sendValidCode, IParams } from '@/services/mods/session/sendValidCode'
import { registerBuyer, IParams as RegistParams } from '@/services/mods/session/registerBuyer'
import { message } from 'antd'
import { delay } from '@/utils'
import { namespace as loginNs } from '@/models/login'
export const namespace = 'user-registration'

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

export default {
  namespace,
  state: {},
  effects: {
    // 获取验证码
    *getVCode({ payload, callback, callbackFinally }, { call, put }) {
      const params: IParams = {
        queryParams: {
          mobile: payload.mobile
        }
      }
      try {
        const result: defs.Result<boolean> = yield call(sendValidCode, params)
        if (result.data) {
          // 开始倒计时等
          callback()
        }
      } catch (error) {
      } finally {
        callbackFinally()
      }
    },
    *createAccount({ payload: { loginName, password, verifyCode, confirmPassword } }, { call, put }) {
      const params: RegistParams = {
        queryParams: {},
        bodyParams: {
          loginName,
          password,
          verifyCode,
          confirmPassword
        }
      }
      try {
        const result: boolean = yield call(registerBuyer, params)
        if (result) {
          message.success('注册成功，登录中...', 1)
          yield delay(500)
          yield put({
            type: `${loginNs}/loginRequest`,
            payload: {
              account: loginName,
              password
            },
            callback: noop
          })
        }
      } catch (error) {}
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
