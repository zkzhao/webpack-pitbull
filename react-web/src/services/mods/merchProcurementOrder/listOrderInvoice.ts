/**
 * @desc 根据ID获取订单发票信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOrderInvoice({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/procurement/order/manager/detail/invoice`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
