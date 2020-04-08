/**
 * @desc get测试参数映射
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 名称 */
  name?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function get({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/demo/get`,
    method: 'get',
    noLoading: false,
    params: queryParams
  })
}
