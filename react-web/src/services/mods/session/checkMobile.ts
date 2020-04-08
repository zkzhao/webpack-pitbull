/**
 * @desc 根据Token换取商户信息
 */
import request from '@/utils/request'
export class IQueryParams {
  /** mobile */
  mobile: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function checkMobile({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/session/check/mobile`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
