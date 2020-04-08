/**
 * @desc post测试参数映射
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 名称 */
  name?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function post({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/demo/post`,
    method: 'post',
    noLoading: false,
    params: queryParams
  })
}
