const checkTagsValid = () => ({
  validator(_, value) {
    // 为空时不校验
    if (!value) {
      return Promise.resolve()
    }
    if (value.length > 8) {
      return Promise.reject('最多选择8个标签')
    }
    return Promise.resolve()
  }
})

export default checkTagsValid
