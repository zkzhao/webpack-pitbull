/**
 * @desc 根据Token换取商户信息
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
}

export function getCustomerInfo({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/session/customerInfo`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
