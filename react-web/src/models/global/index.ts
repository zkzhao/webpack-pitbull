import { getCustomerInfo } from '@/services/mods/session/getCustomerInfo'
export const namespace = 'global'

export interface IDvaState {
  loading: boolean
  userInfo: defs.CustomerResponse
}

const state: IDvaState = {
  loading: false,
  userInfo: {}
}
const globalModels = {
  namespace,
  state,
  effects: {
    *querUserInfo(_, { call, put }) {
      try {
        const result: defs.CustomerResponse = yield call(getCustomerInfo)
        yield put({
          type: 'setState',
          payload: {
            userInfo: result
          }
        })
      } catch (error) {}
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}

export default [globalModels]
