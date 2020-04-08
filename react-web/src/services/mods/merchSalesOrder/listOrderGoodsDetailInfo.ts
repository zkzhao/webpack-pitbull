/**
 * @desc 根据ID获取订单商品信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOrderGoodsDetailInfo(
  { queryParams }: IParams = {} as IParams
) {
  return request({
    url: `/api/retail/merch/sales/order/manager/detail/goods`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
