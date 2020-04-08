export class BuyerRegisterRequest {
  /** 确认密码 */
  confirmPassword = ''

  /** 登录账号 */
  loginName = ''

  /** 密码 */
  password = ''

  /** 验证码 */
  verifyCode = ''
}

export class CustomerResponse {
  /** 商户简称 */
  abbreviation = ''

  /** 详细地址 */
  address = ''

  /** 是否认证：1-已认证，0-未认证 */
  certification = undefined

  /** 市 */
  cityCode = ''

  /** 市名称 */
  cityName = ''

  /** 联系人 */
  contacts = ''

  /** 区/县 */
  districtCode = ''

  /** 区/县名称 */
  districtName = ''

  /** 账户id */
  id = undefined

  /** memberName */
  memberName = ''

  /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
  memberType = undefined

  /** 电话 */
  mobile = ''

  /** 省code */
  provinceCode = ''

  /** 省name */
  provinceName = ''

  /** 参数注释 */
  remark = ''

  /** 状态：1-注销，2-正常，3-停用，4-冻结 */
  status = undefined
}

export class IwubidaPageResult {
  /** 当前页码 */
  current = undefined

  /** 列表数据 */
  results = []

  /** 每页条数 */
  size = undefined

  /** 总记录条数 */
  totalCount = undefined
}

export class OrderCustomerInfoResponse {
  /** 详细地址 */
  address = ''

  /** 市名称 */
  cityName = ''

  /** 联系人 */
  contacts = ''

  /** 区/县名称 */
  districtName = ''

  /** 账户id */
  id = undefined

  /** 客户名称 */
  memberName = ''

  /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
  memberType = undefined

  /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
  memberTypeDesc = ''

  /** 联系电话 */
  mobile = ''

  /** 省name */
  provinceName = ''
}

export class OrderCustomerPageRequest {
  /** 模糊查询条件 : 供应商名称 订单编号 */
  keyWords = ''

  /** 页码 */
  page = undefined

  /** 页量 */
  size = undefined
}

export class OrderCustomerResponse {
  /** 下单商家 */
  buyerInfo = new OrderCustomerInfoResponse()

  /** 供应商信息 */
  sellerInfo = new OrderCustomerInfoResponse()
}

export class OrderDetailInfoMerchResponse {
  /** 订单相关客户信息 */
  customerInfoResponse = new OrderCustomerInfoResponse()

  /** 订单商品信息 */
  orderDetailResponses = []

  /** 订单装填信息 */
  orderDetailStatusResponse = new OrderDetailStatusResponse()

  /** 订单优惠信息 */
  orderDiscountsResponses = []

  /** 订单基础信息 */
  orderInfoResponse = new OrderInfoResponse()

  /** 订单发票信息 */
  orderInvoiceResponse = new OrderInvoiceResponse()

  /** 订单物流信息 */
  orderLogisticsResponse = new OrderLogisticsResponse()
}

export class OrderDetailMerchRequest {
  /** 订单ID */
  orderId = ''
}

export class OrderDetailResponse {
  /** 商品品牌 */
  brandName = ''

  /** 商品类型 */
  categoryName = ''

  /** 商品名称 */
  goodsName = ''

  /** 商品规格 */
  goodsSpec = ''

  /** 商品类型 1整车,2配件,3其他 */
  goodsType = undefined

  /** 商品类型 1整车,2配件,3其他 */
  goodsTypeDesc = ''

  /** 商品数量 */
  number = undefined

  /** 订单号 */
  orderId = ''

  /** 商品原价 */
  originalPrice = undefined

  /** 商品优惠价 */
  preferentialPrice = undefined

  /** 商品规格编码 */
  specCode = ''

  /** 商品金额小计（优惠后）x.xx自动计算 */
  subtotal = undefined
}

export class OrderDetailStatusResponse {
  /** 订单物流状态 */
  orderLogisticsStatus = []

  /** 订单物流状态描述 */
  orderLogisticsStatusDesc = ''

  /** 订单支付状态 */
  orderPayStatus = []

  /** 订单支付状态描述 */
  orderPayStatusDesc = ''

  /** 订单生产状态 */
  orderProductStatus = []

  /** 订单生产状态描述 */
  orderProductStatusDesc = ''

  /** 订单状态 */
  orderStatus = []

  /** 订单状态描述 */
  orderStatusDesc = ''
}

export class OrderDiscountsResponse {
  /** 优惠金额(x.xx实际支付金额由后台自动计算) */
  discountAmount = undefined

  /** 营销优惠类别(1-会员/2-平台/3-满减) */
  discountsType = undefined

  /** 营销优惠类别(1-会员/2-平台/3-满减) */
  discountsTypeDesc = ''

  /** 最终价 */
  finalPrice = undefined

  /** 订单号 */
  orderId = ''

  /** 原价 */
  originalPrice = undefined

  /** 优惠价 */
  preferentialPrice = undefined
}

export class OrderGoodsInfoResponse {
  /** 商品名称 */
  goodsName = ''

  /** 商品数量 */
  number = undefined

  /** 订单号 */
  orderId = ''
}

export class OrderInfoResponse {
  /** 订单已付金额(x.xx用户已支付金额(如订金)) */
  amountPaid = undefined

  /** 订单应付金额(x.xx公式：订单原价-优惠-服务费自动计算) */
  amountPayable = undefined

  /** 订单结欠金额(x.xx公式：订单应付金额-订单已付金额自动计算) */
  balanceDue = undefined

  /** 买家id */
  buyerId = undefined

  /** 买家名称 */
  buyerName = ''

  /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
  buyerType = undefined

  /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
  buyerTypeDesc = ''

  /** 买家备注 */
  buyersNote = ''

  /** 第三方系统订单号(兼容第3方系统订单号由卖家自行输入) */
  code = ''

  /** 创建时间 */
  createTime = ''

  /** id */
  id = undefined

  /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
  logisticsStatus = undefined

  /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
  logisticsStatusDesc = ''

  /** 联系方式 */
  mobile = ''

  /** 创建人员 */
  operIdCreate = undefined

  /** 修改人员 */
  operIdMod = undefined

  /** 创建人员 姓名 */
  operNameCreate = ''

  /** 修改人员姓名 */
  operNameMod = ''

  /** 订单号编号 */
  orderId = ''

  /** 订单原价 */
  originalPrice = undefined

  /** 支付金额 */
  payAmount = undefined

  /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
  payChannel = undefined

  /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
  payChannelDesc = ''

  /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
  payStatus = undefined

  /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
  payStatusDesc = ''

  /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
  payWay = undefined

  /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
  payWayDesc = ''

  /** porderId */
  porderId = ''

  /** 订单优惠 */
  preferentialPrice = undefined

  /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
  productionStatus = undefined

  /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
  productionStatusDesc = ''

  /** 备注 */
  remark = ''

  /** 卖家id */
  sellerId = undefined

  /** 卖家名称 */
  sellerName = ''

  /** 卖家类型(4-代理商/2-生产商) */
  sellerType = undefined

  /** 卖家类型(4-代理商/2-生产商) */
  sellerTypeDesc = ''

  /** 平台服务费 */
  servicePrice = undefined

  /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
  status = undefined

  /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
  statusDesc = ''

  /** 税率 */
  taxRate = undefined

  /** 修改时间 */
  updateTime = ''
}

export class OrderInvoiceResponse {
  /** 账号 */
  account = ''

  /** 开户行 */
  bank = ''

  /** 单位名称 */
  companyName = ''

  /** 发票内容(商品明细根据商品列表列出，但亦可由卖方修改，只是开票参考) */
  content = ''

  /** 创建时间 */
  createTime = ''

  /** id */
  id = undefined

  /** 纳税人识别号 */
  identifyNumber = ''

  /** 电话 */
  mobile = ''

  /** 创建人员 */
  operIdCreate = undefined

  /** 修改人员 */
  operIdMod = undefined

  /** 创建人员 姓名 */
  operNameCreate = ''

  /** 修改人员姓名 */
  operNameMod = ''

  /** 订单号 */
  orderId = ''

  /** 发票状态(1-已开票/2-待开票/不3-适用) */
  status = undefined

  /** 发票状态(1-已开票/2-待开票/不3-适用) */
  statusDesc = ''

  /** 发票抬头:卖方公司名称 */
  title = ''

  /** 发票类型(1-普通发票/2-增值税发票) */
  type = undefined

  /** 发票类型(1-普通发票/2-增值税发票) */
  typeDesc = ''

  /** 单位地址 */
  unitAddress = ''

  /** 修改时间 */
  updateTime = ''
}

export class OrderLogisticsResponse {
  /** 详细地址 */
  address = ''

  /** 市名称 */
  cityName = ''

  /** 创建时间 */
  createTime = ''

  /** 区/县名称 */
  districtName = ''

  /** id */
  id = undefined

  /** 物流商名称 */
  logisticsProvider = ''

  /** 联系电话 */
  mobile = ''

  /** 国名称 */
  nationalityName = ''

  /** 创建人员 */
  operIdCreate = undefined

  /** 修改人员 */
  operIdMod = undefined

  /** 创建人员 姓名 */
  operNameCreate = ''

  /** 修改人员姓名 */
  operNameMod = ''

  /** 订单号 */
  orderId = ''

  /** 省name */
  provinceName = ''

  /** 收货人 */
  receiversUser = ''

  /** 发货单号 */
  sendCode = ''

  /** 物流状态 */
  status = undefined

  /** 修改时间 */
  updateTime = ''

  /** 物流方式(1-物流配送/2-到店自提) */
  way = undefined

  /** 物流方式(1-物流配送/2-到店自提) */
  wayDesc = ''
}

export class OrderPageInfoDetailReponse {
  /** 订单已付金额(x.xx用户已支付金额(如订金)) */
  amountPaid = undefined

  /** 订单应付金额(x.xx公式：订单原价-优惠-服务费自动计算) */
  amountPayable = undefined

  /** 订单结欠金额(x.xx公式：订单应付金额-订单已付金额自动计算) */
  balanceDue = undefined

  /** 买家id */
  buyerId = undefined

  /** 买家名称 */
  buyerName = ''

  /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
  buyerType = ''

  /** 订单标号 */
  code = ''

  /** 下单日期 */
  createTime = ''

  /** ID */
  id = undefined

  /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
  logisticsStatus = ''

  /** 订单商品 */
  orderGoodsInfoResponseList = []

  /** 订单号编号 */
  orderId = ''

  /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
  payChannel = ''

  /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
  payStatus = ''

  /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
  payWay = ''

  /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
  productionStatus = ''

  /** 卖家id */
  sellerId = undefined

  /** 卖家名称 */
  sellerName = ''

  /** 卖家类型(4-代理商/2-生产商) */
  sellerType = ''

  /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
  status = ''
}

export class OrderStatusResponse {
  /** 创建时间 */
  createTime = ''

  /** id */
  id = undefined

  /** 创建人员 */
  operIdCreate = undefined

  /** 修改人员 */
  operIdMod = undefined

  /** 创建人员 姓名 */
  operNameCreate = ''

  /** 修改人员姓名 */
  operNameMod = ''

  /** 订单号 */
  orderId = ''

  /** 当前状态(1-创建时间、 2-支付时间、3-接单时间、3-生产时间、 4-发货时间、 5-收货时间、6-取消时间、7-退款时间、8-完成时间、) */
  status = undefined

  /** 当前状态(1-创建时间、 2-支付时间、3-接单时间、3-生产时间、 4-发货时间、 5-收货时间、6-取消时间、7-退款时间、8-完成时间、) */
  statusDesc = ''

  /** 状态类型 1-订单状态,2-物流装填,3-支付状态,4-生产状态 */
  statusType = undefined

  /** 修改时间 */
  updateTime = ''
}

export class Result {
  /** 状态码->200:全局成功; 401:需要身份证认证 ; 403:拒绝访问,无此资源权限  ;500:服务端异常 ； 其他业务码相应接口定义 */
  code = ''

  /** 返回数据 */
  data = ''

  /** 返回提示消息 */
  message = ''

  /** 是否成功(code=200,为true;code多值时刻体现作用方便判断):true=200-成功,false-失败 */
  success = false
}

export class SessionCreateRequest {
  /** 登录账户 */
  account = ''

  /** 账户密码 */
  password = ''
}

export class XxxxRequest {
  /** 名称 */
  name = ''
}
