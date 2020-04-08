/**
 * @desc 发送验证码
 */
import request from '@/utils/request'
export class IQueryParams {
  /** mobile */
  mobile: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function sendValidCode({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/session/send_valid_code`,
    method: 'post',
    noLoading: false,
    params: queryParams
  })
}
