/**
 * @desc 登录
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.SessionCreateRequest
}

export function create({ queryParams, bodyParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/session/create`,
    method: 'post',
    noLoading: false,
    body: bodyParams
  })
}
