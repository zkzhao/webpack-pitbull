/**
 * @desc 分页获取订单列表
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.OrderCustomerPageRequest
}

export function pageOrder(
  { queryParams, bodyParams }: IParams = {} as IParams
) {
  return request({
    url: `/api/retail/merch/procurement/order/manager/page`,
    method: 'post',
    noLoading: false,
    body: bodyParams
  })
}
