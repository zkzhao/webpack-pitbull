import { pageOrder as PurchaseOrder, IParams as PurchaseParams } from '@/services/mods/merchProcurementOrder/pageOrder'

export const namespace = 'purchase-order-manage-list'
export interface IDvaState {
  orderList: any[]
  totalCount: number
}

const state: IDvaState = {
  orderList: null,
  totalCount: 0
}
export default {
  namespace,
  state,
  effects: {
    /**
     * 查询采购订单列表信息
     */
    *queryOrderList({ payload: { page, size, keywords } }, { put, call }) {
      try {
        const params: PurchaseParams = {
          queryParams: {},
          bodyParams: {
            page: page, // tips: 又说这里改回来
            size,
            keyWords: keywords
          }
        }
        const result: defs.IwubidaPageResult<defs.OrderPageInfoDetailReponse> = yield call(PurchaseOrder, params)
        yield put({
          type: 'setState',
          payload: { orderList: result.results, totalCount: result.totalCount }
        })
      } catch (error) {}
    },
    *clearData(_, { put }) {
      yield put({
        type: 'setState',
        payload: { orderList: null, totalCount: 0 }
      })
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
