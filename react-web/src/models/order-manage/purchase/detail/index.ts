import { IParams as BaseInfoParams, listOrderBasisInfo } from '@/services/mods/merchProcurementOrder/listOrderBasisInfo'
import { IParams as ListOrderParams, listOrderDiscounts } from '@/services/mods/merchProcurementOrder/listOrderDiscounts'
import { IParams as LogdiParams, listOrderGoodsDetailInfo } from '@/services/mods/merchProcurementOrder/listOrderGoodsDetailInfo'
import { IParams as LoiParams, listOrderInvoice } from '@/services/mods/merchProcurementOrder/listOrderInvoice'
import { IParams as LolParams, listOrderLogistics } from '@/services/mods/merchProcurementOrder/listOrderLogistics'
import { IParams as LosParams, listOrderStatus } from '@/services/mods/merchProcurementOrder/listOrderStatus'
import { IParams as CiParams, getCustomerInfo } from '@/services/mods/merchProcurementOrder/getCustomerInfo'

export const namespace = 'purchase-order-detail'

export interface IState {
  baseInfo: defs.OrderInfoResponse
  orderStatus: defs.OrderDetailStatusResponse
  logisticsInfo: defs.OrderLogisticsResponse
  discountInfo: Array<defs.OrderDiscountsResponse>
  goodsInfo: Array<defs.OrderDetailResponse>
  invoiceInfo: defs.OrderInvoiceResponse
  customerInfo: defs.OrderCustomerResponse
}

const initState: IState = {
  baseInfo: {},
  orderStatus: {},
  logisticsInfo: {},
  discountInfo: [],
  goodsInfo: [],
  invoiceInfo: {},
  customerInfo: {}
}

export default {
  namespace,
  state: { ...initState },
  effects: {
    *init({ payload }, { put }) {
      yield put({ type: 'queryOrderBaseInfo', payload })
      yield put({ type: 'queryListOrderDiscount', payload })
      yield put({ type: 'queryListOrderGoodDetailInfo', payload })
      yield put({ type: 'queryListOrderInvoice', payload })
      yield put({ type: 'queryListOrderLogistics', payload })
      yield put({ type: 'queryListOrderStatus', payload })
      yield put({ type: 'queryCustomerInfo', payload })
    },
    /**
     * 查询订单详情
     */
    *queryOrderBaseInfo({ payload }, { put, call, select }) {
      const params: BaseInfoParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderBasisInfo, params)
        yield put({
          type: 'setState',
          payload: { baseInfo: resp }
        })
      } catch (error) {
        // console.log(err)
      }
    },
    *queryListOrderDiscount({ payload }, { call, put }) {
      const params: ListOrderParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderDiscounts, params)
        yield put({
          type: 'setState',
          payload: { discountInfo: resp }
        })
      } catch (err) {
        // console.log(err)
      }
    },
    *queryListOrderGoodDetailInfo({ payload }, { call, put }) {
      const params: LogdiParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderGoodsDetailInfo, params)
        yield put({
          type: 'setState',
          payload: { goodsInfo: resp }
        })
      } catch (err) {
        // console.log(err)
      }
    },
    *queryListOrderInvoice({ payload }, { call, put }) {
      const params: LoiParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderInvoice, params)
        yield put({
          type: 'setState',
          payload: { invoiceInfo: resp }
        })
      } catch (err) {
        // console.log(err)
      }
    },
    *queryListOrderLogistics({ payload }, { call, put }) {
      const params: LolParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderLogistics, params)
        yield put({
          type: 'setState',
          payload: {
            logisticsInfo: resp
          }
        })
      } catch (err) {
        // console.log(err)
      }
    },
    *queryListOrderStatus({ payload }, { call, put }) {
      const params: LosParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(listOrderStatus, params)
        yield put({
          type: 'setState',
          payload: { orderStatus: resp }
        })
      } catch (err) {
        // console.log(err)
      }
    },
    *queryCustomerInfo({ payload }, { call, put }) {
      const params: CiParams = {
        queryParams: payload
      }
      try {
        const resp = yield call(getCustomerInfo, params)
        yield put({
          type: 'setState',
          payload: { customerInfo: resp }
        })
      } catch (err) {
        // console.log(err)
      }
    }
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
