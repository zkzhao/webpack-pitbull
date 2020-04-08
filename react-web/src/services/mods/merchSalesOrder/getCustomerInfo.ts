/**
 * @desc 根据ID获取订单商家信息(下单商家/供应商)
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function getCustomerInfo({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/sales/order/manager/detail/customer`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
