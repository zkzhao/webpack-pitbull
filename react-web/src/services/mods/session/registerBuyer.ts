/**
 * @desc 注册
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.BuyerRegisterRequest
}

export function registerBuyer(
  { queryParams, bodyParams }: IParams = {} as IParams
) {
  return request({
    url: `/api/retail/merch/session/register`,
    method: 'post',
    noLoading: false,
    body: bodyParams
  })
}
