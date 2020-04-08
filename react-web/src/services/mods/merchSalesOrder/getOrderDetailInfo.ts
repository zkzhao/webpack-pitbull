/**
 * @desc 根据ID获取销售订单详细信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.OrderDetailMerchRequest
}

export function getOrderDetailInfo(
  { queryParams, bodyParams }: IParams = {} as IParams
) {
  return request({
    url: `/api/retail/merch/sales/order/manager/detail`,
    method: 'post',
    noLoading: false,
    body: bodyParams
  })
}
