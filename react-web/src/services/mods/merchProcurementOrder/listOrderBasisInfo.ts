/**
 * @desc 根据ID获取订单基本信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 订单ID */
  orderId: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function listOrderBasisInfo({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/procurement/order/manager/detail/basis`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
