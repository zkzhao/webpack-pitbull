// 正整数验证
export const integerVerifyRule = { pattern: new RegExp(/^[+]{0,1}(\d+)$/g), message: '请填写正确的数字' }

// 数字校验规则
export const numberVerifyRule = { pattern: new RegExp(/^(0|([1-9]\d*))(\.\d+)?$/g), message: '请填写数字' }
