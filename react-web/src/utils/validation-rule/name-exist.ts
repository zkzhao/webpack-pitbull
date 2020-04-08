import request from '@/utils/request'
import { checkMobile } from '@/services/mods/session/checkMobile'
// 自定义校验
const checkUserNameValid = () => ({
  async validator(_, value) {
    // 为空时不校验
    if (value === '') {
      return Promise.resolve()
    }
    const result: defs.Result = await request({
      url: `/admin/uCustomer/check/name/${value}`
    })
    if (result.data) {
      return Promise.resolve()
    }
    return Promise.reject('该用户名不可用')
  },
  validateTrigger: ['onBlur']
})

export function checkUserNameValidWithMessage(message: string) {
  return () => ({
    async validator(_, value) {
      // 为空时不校验
      if (value === '') {
        return Promise.resolve()
      }
      const result: defs.Result = await request({
        url: `/admin/uCustomer/check/name/${value}`
      })
      if (result.data) {
        return Promise.resolve()
      }
      return Promise.reject(message)
    },
    validateTrigger: ['onBlur']
  })
}

export const checkMobileValid = () => ({
  async validator(_, value) {
    // 为空时不校验
    if (value === '') {
      return Promise.resolve()
    }
    if (!/^-?\d{1,11}$/.test(value)) {
      return Promise.resolve()
    }
    const result: defs.Result = await checkMobile({ queryParams: { mobile: value } })
    if (!result.data) {
      return Promise.resolve()
    }
    return Promise.reject('账号已注册，请直接登录')
  },
  validateTrigger: ['onBlur']
})

export default checkUserNameValid
