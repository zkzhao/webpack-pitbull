import { getLocalStorage } from './storage'
import config from '@/config'
import Axios from 'axios'
import { parse } from 'qs'
/**
 * 根据文件base64
 */
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

interface Returned {
  [key: string]: any
}

/**
 * 将一个url字符串的查询部分解析成对象
 * @param str 字符串 ?xxx=111
 */
export function covertSearch2Obj(str: string): Returned {
  str = str.replace('?', '')
  const arrs = str.split('&')
  const temp = {}
  for (const q of arrs) {
    const t = q.split('=')
    temp[t[0]] = t[1]
  }
  return temp
}

/**
 * 求数组笛卡尔积
 *
 * @param {*} list
 * @returns
 */
export function descartes(list) {
  //parent上一级索引;count指针计数
  const point = {}
  const result = []
  let pIndex = null
  let tempCount = 0
  let temp = []
  //根据参数列生成指针对象
  for (const index in list) {
    if (typeof list[index] == 'object') {
      point[index] = { parent: pIndex, count: 0 }
      pIndex = index
    }
  }
  //单维度数据结构直接返回
  if (pIndex == null) {
    return list
  }
  //动态生成笛卡尔积
  for (;;) {
    // eslint-disable-next-line no-var
    for (var index in list) {
      tempCount = point[index]['count']
      temp.push(list[index][tempCount])
    }
    //压入结果数组
    result.push(temp)
    temp = []
    //检查指针最大值问题
    for (;;) {
      if (point[index]['count'] + 1 >= list[index].length) {
        point[index]['count'] = 0
        pIndex = point[index]['parent']
        if (pIndex == null) {
          return result
        }
        //赋值parent进行再次检查
        index = pIndex
      } else {
        point[index]['count']++
        break
      }
    }
  }
}
/**
 *
 * 列表转树结构
 * @param arr 列表
 * @param pid 父id
 */
export function arrayToTree(arr, pid) {
  const temp = []
  const treeArr = arr
  treeArr.forEach((item, index) => {
    if (item.pid === pid) {
      if (arrayToTree(treeArr, treeArr[index].id).length > 0) {
        treeArr[index].children = arrayToTree(treeArr, treeArr[index].id)
      }
      temp.push(treeArr[index])
    }
  })
  return temp
}
/**
 * 非空数组join with ' '
 * @param arrays 待join的字符串数组
 */
export function notEmptyArrayJoin(...arrays: string[]) {
  const blackList = [null, undefined, '']
  return arrays.filter(item => !blackList.includes(item)).join(' ')
}

export async function uploadFile(url, file: Blob, body: any = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    // 创建form对象
    const param = new FormData()
    // 通过append向form对象添加数据
    Object.keys(body).forEach(key => {
      param.append(key, body[key])
    })
    param.append('file', file)
    const requestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
        [config.authKey]: getLocalStorage(config.authKey)
      }
    }
    const resp = Axios.post(url, param, requestConfig)
    return resp as Promise<any>
  } catch (e) {
    throw e
  }
}

interface IObj {
  [key: string]: any
}

/**
 * 判断某个对象是否不含任何实际可用值
 * @param value 对象
 * @param whiteKeys 顶层对象的白名单key
 */
export function isEmptyValue(value, whiteKeys?: string[]) {
  for (const key of Object.getOwnPropertyNames(value)) {
    if (whiteKeys && whiteKeys.includes(key)) {
      continue
    }
    const item = value[key]
    if (Object.prototype.toString.call(item) === '[object Object]') {
      const itemEmpty = isEmptyValue(item)
      if (!itemEmpty) {
        return false
      }
    } else {
      if (item !== undefined && item !== '') {
        return false
      }
    }
  }
  return true
}

/**
 * 获取url参数
 */
export function getPageQuery() {
  return parse(window.location.href.split('?')[1])
}

export function delay(timeMs: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timeMs)
  })
}
