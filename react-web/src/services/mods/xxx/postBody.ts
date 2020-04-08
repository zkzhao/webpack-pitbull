/**
 * @desc postBody测试参数映射
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.XxxxRequest
}

export function postBody({ queryParams, bodyParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/demo/postBody`,
    method: 'post',
    noLoading: false,
    body: bodyParams
  })
}
