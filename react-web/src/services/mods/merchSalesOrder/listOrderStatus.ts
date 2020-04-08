/**
 * @desc 根据ID获取订单状态信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOrderStatus({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/sales/order/manager/detail/status`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
