/**
 * @desc postUpload文件映射测试,单个文件上传multipart/form-data上传文件
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 名称 */
  name?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function postUpload({ queryParams }: IParams = {} as IParams) {
  return request({
    url: `/api/retail/merch/demo/postUpload`,
    method: 'post',
    noLoading: false,
    params: queryParams
  })
}
