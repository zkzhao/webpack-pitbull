/**
 * @desc 根据ID获取订单优惠信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOrderDiscounts({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/sales/order/manager/detail/discounts`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
