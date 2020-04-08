type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export class BuyerRegisterRequest {
    /** 确认密码 */
    confirmPassword?: string

    /** 登录账号 */
    loginName: string

    /** 密码 */
    password?: string

    /** 验证码 */
    verifyCode?: string
  }

  export class CustomerResponse {
    /** 商户简称 */
    abbreviation?: string

    /** 详细地址 */
    address?: string

    /** 是否认证：1-已认证，0-未认证 */
    certification?: number

    /** 市 */
    cityCode?: string

    /** 市名称 */
    cityName?: string

    /** 联系人 */
    contacts?: string

    /** 区/县 */
    districtCode?: string

    /** 区/县名称 */
    districtName?: string

    /** 账户id */
    id?: number

    /** memberName */
    memberName?: string

    /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
    memberType?: number

    /** 电话 */
    mobile?: string

    /** 省code */
    provinceCode?: string

    /** 省name */
    provinceName?: string

    /** 参数注释 */
    remark?: string

    /** 状态：1-注销，2-正常，3-停用，4-冻结 */
    status?: number
  }

  export class IwubidaPageResult<T0 = any> {
    /** 当前页码 */
    current?: number

    /** 列表数据 */
    results?: Array<T0>

    /** 每页条数 */
    size?: number

    /** 总记录条数 */
    totalCount?: number
  }

  export class OrderCustomerInfoResponse {
    /** 详细地址 */
    address?: string

    /** 市名称 */
    cityName?: string

    /** 联系人 */
    contacts?: string

    /** 区/县名称 */
    districtName?: string

    /** 账户id */
    id?: number

    /** 客户名称 */
    memberName?: string

    /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
    memberType?: number

    /** 客户类型(1:系统用户  2-供应商 3-经销商 4-代理商 5-企业 6-C端 消费者 */
    memberTypeDesc?: string

    /** 联系电话 */
    mobile?: string

    /** 省name */
    provinceName?: string
  }

  export class OrderCustomerPageRequest {
    /** 模糊查询条件 : 供应商名称 订单编号 */
    keyWords?: string

    /** 页码 */
    page?: number

    /** 页量 */
    size?: number
  }

  export class OrderCustomerResponse {
    /** 下单商家 */
    buyerInfo?: defs.OrderCustomerInfoResponse

    /** 供应商信息 */
    sellerInfo?: defs.OrderCustomerInfoResponse
  }

  export class OrderDetailInfoMerchResponse {
    /** 订单相关客户信息 */
    customerInfoResponse?: defs.OrderCustomerInfoResponse

    /** 订单商品信息 */
    orderDetailResponses?: Array<defs.OrderDetailResponse>

    /** 订单装填信息 */
    orderDetailStatusResponse?: defs.OrderDetailStatusResponse

    /** 订单优惠信息 */
    orderDiscountsResponses?: Array<defs.OrderDiscountsResponse>

    /** 订单基础信息 */
    orderInfoResponse?: defs.OrderInfoResponse

    /** 订单发票信息 */
    orderInvoiceResponse?: defs.OrderInvoiceResponse

    /** 订单物流信息 */
    orderLogisticsResponse?: defs.OrderLogisticsResponse
  }

  export class OrderDetailMerchRequest {
    /** 订单ID */
    orderId: string
  }

  export class OrderDetailResponse {
    /** 商品品牌 */
    brandName?: string

    /** 商品类型 */
    categoryName?: string

    /** 商品名称 */
    goodsName?: string

    /** 商品规格 */
    goodsSpec?: string

    /** 商品类型 1整车,2配件,3其他 */
    goodsType?: number

    /** 商品类型 1整车,2配件,3其他 */
    goodsTypeDesc?: string

    /** 商品数量 */
    number?: number

    /** 订单号 */
    orderId?: string

    /** 商品原价 */
    originalPrice?: number

    /** 商品优惠价 */
    preferentialPrice?: number

    /** 商品规格编码 */
    specCode?: string

    /** 商品金额小计（优惠后）x.xx自动计算 */
    subtotal?: number
  }

  export class OrderDetailStatusResponse {
    /** 订单物流状态 */
    orderLogisticsStatus?: Array<defs.OrderStatusResponse>

    /** 订单物流状态描述 */
    orderLogisticsStatusDesc?: string

    /** 订单支付状态 */
    orderPayStatus?: Array<defs.OrderStatusResponse>

    /** 订单支付状态描述 */
    orderPayStatusDesc?: string

    /** 订单生产状态 */
    orderProductStatus?: Array<defs.OrderStatusResponse>

    /** 订单生产状态描述 */
    orderProductStatusDesc?: string

    /** 订单状态 */
    orderStatus?: Array<defs.OrderStatusResponse>

    /** 订单状态描述 */
    orderStatusDesc?: string
  }

  export class OrderDiscountsResponse {
    /** 优惠金额(x.xx实际支付金额由后台自动计算) */
    discountAmount?: number

    /** 营销优惠类别(1-会员/2-平台/3-满减) */
    discountsType?: number

    /** 营销优惠类别(1-会员/2-平台/3-满减) */
    discountsTypeDesc?: string

    /** 最终价 */
    finalPrice?: number

    /** 订单号 */
    orderId?: string

    /** 原价 */
    originalPrice?: number

    /** 优惠价 */
    preferentialPrice?: number
  }

  export class OrderGoodsInfoResponse {
    /** 商品名称 */
    goodsName?: string

    /** 商品数量 */
    number?: number

    /** 订单号 */
    orderId?: string
  }

  export class OrderInfoResponse {
    /** 订单已付金额(x.xx用户已支付金额(如订金)) */
    amountPaid?: number

    /** 订单应付金额(x.xx公式：订单原价-优惠-服务费自动计算) */
    amountPayable?: number

    /** 订单结欠金额(x.xx公式：订单应付金额-订单已付金额自动计算) */
    balanceDue?: number

    /** 买家id */
    buyerId?: number

    /** 买家名称 */
    buyerName?: string

    /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
    buyerType?: number

    /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
    buyerTypeDesc?: string

    /** 买家备注 */
    buyersNote?: string

    /** 第三方系统订单号(兼容第3方系统订单号由卖家自行输入) */
    code?: string

    /** 创建时间 */
    createTime?: string

    /** id */
    id?: number

    /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
    logisticsStatus?: number

    /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
    logisticsStatusDesc?: string

    /** 联系方式 */
    mobile?: string

    /** 创建人员 */
    operIdCreate?: number

    /** 修改人员 */
    operIdMod?: number

    /** 创建人员 姓名 */
    operNameCreate?: string

    /** 修改人员姓名 */
    operNameMod?: string

    /** 订单号编号 */
    orderId?: string

    /** 订单原价 */
    originalPrice?: number

    /** 支付金额 */
    payAmount?: number

    /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
    payChannel?: number

    /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
    payChannelDesc?: string

    /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
    payStatus?: number

    /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
    payStatusDesc?: string

    /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
    payWay?: number

    /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
    payWayDesc?: string

    /** porderId */
    porderId?: string

    /** 订单优惠 */
    preferentialPrice?: number

    /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
    productionStatus?: number

    /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
    productionStatusDesc?: string

    /** 备注 */
    remark?: string

    /** 卖家id */
    sellerId?: number

    /** 卖家名称 */
    sellerName?: string

    /** 卖家类型(4-代理商/2-生产商) */
    sellerType?: number

    /** 卖家类型(4-代理商/2-生产商) */
    sellerTypeDesc?: string

    /** 平台服务费 */
    servicePrice?: number

    /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
    status?: number

    /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
    statusDesc?: string

    /** 税率 */
    taxRate?: number

    /** 修改时间 */
    updateTime?: string
  }

  export class OrderInvoiceResponse {
    /** 账号 */
    account?: string

    /** 开户行 */
    bank?: string

    /** 单位名称 */
    companyName?: string

    /** 发票内容(商品明细根据商品列表列出，但亦可由卖方修改，只是开票参考) */
    content?: string

    /** 创建时间 */
    createTime?: string

    /** id */
    id?: number

    /** 纳税人识别号 */
    identifyNumber?: string

    /** 电话 */
    mobile?: string

    /** 创建人员 */
    operIdCreate?: number

    /** 修改人员 */
    operIdMod?: number

    /** 创建人员 姓名 */
    operNameCreate?: string

    /** 修改人员姓名 */
    operNameMod?: string

    /** 订单号 */
    orderId?: string

    /** 发票状态(1-已开票/2-待开票/不3-适用) */
    status?: number

    /** 发票状态(1-已开票/2-待开票/不3-适用) */
    statusDesc?: string

    /** 发票抬头:卖方公司名称 */
    title?: string

    /** 发票类型(1-普通发票/2-增值税发票) */
    type?: number

    /** 发票类型(1-普通发票/2-增值税发票) */
    typeDesc?: string

    /** 单位地址 */
    unitAddress?: string

    /** 修改时间 */
    updateTime?: string
  }

  export class OrderLogisticsResponse {
    /** 详细地址 */
    address?: string

    /** 市名称 */
    cityName?: string

    /** 创建时间 */
    createTime?: string

    /** 区/县名称 */
    districtName?: string

    /** id */
    id?: number

    /** 物流商名称 */
    logisticsProvider?: string

    /** 联系电话 */
    mobile?: string

    /** 国名称 */
    nationalityName?: string

    /** 创建人员 */
    operIdCreate?: number

    /** 修改人员 */
    operIdMod?: number

    /** 创建人员 姓名 */
    operNameCreate?: string

    /** 修改人员姓名 */
    operNameMod?: string

    /** 订单号 */
    orderId?: string

    /** 省name */
    provinceName?: string

    /** 收货人 */
    receiversUser?: string

    /** 发货单号 */
    sendCode?: string

    /** 物流状态 */
    status?: number

    /** 修改时间 */
    updateTime?: string

    /** 物流方式(1-物流配送/2-到店自提) */
    way?: number

    /** 物流方式(1-物流配送/2-到店自提) */
    wayDesc?: string
  }

  export class OrderPageInfoDetailReponse {
    /** 订单已付金额(x.xx用户已支付金额(如订金)) */
    amountPaid?: number

    /** 订单应付金额(x.xx公式：订单原价-优惠-服务费自动计算) */
    amountPayable?: number

    /** 订单结欠金额(x.xx公式：订单应付金额-订单已付金额自动计算) */
    balanceDue?: number

    /** 买家id */
    buyerId?: number

    /** 买家名称 */
    buyerName?: string

    /** 买家类型(4-代理商/3-经销商/2-生产商/5-企业/6-消费者) */
    buyerType?: string

    /** 订单标号 */
    code?: string

    /** 下单日期 */
    createTime?: string

    /** ID */
    id?: number

    /** 物流状态(1-待发货/2-配送中/3-已送达(连接第3方系统状态或人工输入)) */
    logisticsStatus?: string

    /** 订单商品 */
    orderGoodsInfoResponseList?: Array<defs.OrderGoodsInfoResponse>

    /** 订单号编号 */
    orderId?: string

    /** 支付渠道(线上(1-微信、2-支付宝、3-银联)/4-线下 */
    payChannel?: string

    /** 支付状态(1-未支付/2-已支付/3-退款中/4-已退款/5-部分退款/6-部分支付/7-已取消) */
    payStatus?: string

    /** 支付方式(1-全款支付/2-订金支付/3-货到付款/4-货到月结) */
    payWay?: string

    /** 生产状态(1-待接单/2-待生产/3-生产中/4_已生产(连接第3方系统状态或人工输入) */
    productionStatus?: string

    /** 卖家id */
    sellerId?: number

    /** 卖家名称 */
    sellerName?: string

    /** 卖家类型(4-代理商/2-生产商) */
    sellerType?: string

    /** 订单状态(1-待付款/2-待发货/3-待收货/4-已完成/5-已取消/6-已拒绝) */
    status?: string
  }

  export class OrderStatusResponse {
    /** 创建时间 */
    createTime?: string

    /** id */
    id?: number

    /** 创建人员 */
    operIdCreate?: number

    /** 修改人员 */
    operIdMod?: number

    /** 创建人员 姓名 */
    operNameCreate?: string

    /** 修改人员姓名 */
    operNameMod?: string

    /** 订单号 */
    orderId?: string

    /** 当前状态(1-创建时间、 2-支付时间、3-接单时间、3-生产时间、 4-发货时间、 5-收货时间、6-取消时间、7-退款时间、8-完成时间、) */
    status?: number

    /** 当前状态(1-创建时间、 2-支付时间、3-接单时间、3-生产时间、 4-发货时间、 5-收货时间、6-取消时间、7-退款时间、8-完成时间、) */
    statusDesc?: string

    /** 状态类型 1-订单状态,2-物流装填,3-支付状态,4-生产状态 */
    statusType?: number

    /** 修改时间 */
    updateTime?: string
  }

  export class Result<T0 = any> {
    /** 状态码->200:全局成功; 401:需要身份证认证 ; 403:拒绝访问,无此资源权限  ;500:服务端异常 ； 其他业务码相应接口定义 */
    code?: string

    /** 返回数据 */
    data?: string

    /** 返回提示消息 */
    message?: string

    /** 是否成功(code=200,为true;code多值时刻体现作用方便判断):true=200-成功,false-失败 */
    success?: boolean
  }

  export class SessionCreateRequest {
    /** 登录账户 */
    account: string

    /** 账户密码 */
    password: string
  }

  export class XxxxRequest {
    /** 名称 */
    name?: string
  }
}

declare namespace API {
  /**
   * 经销商端采购订单管理接口 ---李健飞
   */
  export namespace merchProcurementOrder {
    /**
     * 根据ID获取采购订单详细信息
     * /api/retail/merch/procurement/order/manager/detail
     */
    export namespace getOrderDetailInfo {
      export class Params {}

      export type Response = defs.OrderDetailInfoMerchResponse
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.OrderDetailMerchRequest
      ): Promise<defs.OrderDetailInfoMerchResponse>
    }

    /**
     * 根据ID获取订单基本信息
     * /api/retail/merch/procurement/order/manager/detail/basis
     */
    export namespace listOrderBasisInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderInfoResponse
      export const init: Response
      export function request(params: Params): Promise<defs.OrderInfoResponse>
    }

    /**
     * 根据ID获取订单商家信息(下单商家/供应商)
     * /api/retail/merch/procurement/order/manager/detail/customer
     */
    export namespace getCustomerInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderCustomerResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderCustomerResponse>
    }

    /**
     * 根据ID获取订单优惠信息
     * /api/retail/merch/procurement/order/manager/detail/discounts
     */
    export namespace listOrderDiscounts {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = Array<defs.OrderDiscountsResponse>
      export const init: Response
      export function request(
        params: Params
      ): Promise<Array<defs.OrderDiscountsResponse>>
    }

    /**
     * 根据ID获取订单商品信息
     * /api/retail/merch/procurement/order/manager/detail/goods
     */
    export namespace listOrderGoodsDetailInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = Array<defs.OrderDetailResponse>
      export const init: Response
      export function request(
        params: Params
      ): Promise<Array<defs.OrderDetailResponse>>
    }

    /**
     * 根据ID获取订单发票信息
     * /api/retail/merch/procurement/order/manager/detail/invoice
     */
    export namespace listOrderInvoice {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderInvoiceResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderInvoiceResponse>
    }

    /**
     * 根据ID获取订单物流信息
     * /api/retail/merch/procurement/order/manager/detail/logistics
     */
    export namespace listOrderLogistics {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderLogisticsResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderLogisticsResponse>
    }

    /**
     * 根据ID获取订单状态信息
     * /api/retail/merch/procurement/order/manager/detail/status
     */
    export namespace listOrderStatus {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderDetailStatusResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderDetailStatusResponse>
    }

    /**
     * 分页获取订单列表
     * /api/retail/merch/procurement/order/manager/page
     */
    export namespace pageOrder {
      export class Params {}

      export type Response = defs.IwubidaPageResult<
        defs.OrderPageInfoDetailReponse
      >
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.OrderCustomerPageRequest
      ): Promise<defs.IwubidaPageResult<defs.OrderPageInfoDetailReponse>>
    }
  }

  /**
   * 经销商端销售订单管理接口 ---李健飞
   */
  export namespace merchSalesOrder {
    /**
     * 根据ID获取销售订单详细信息
     * /api/retail/merch/sales/order/manager/detail
     */
    export namespace getOrderDetailInfo {
      export class Params {}

      export type Response = defs.OrderDetailInfoMerchResponse
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.OrderDetailMerchRequest
      ): Promise<defs.OrderDetailInfoMerchResponse>
    }

    /**
     * 根据ID获取订单基本信息
     * /api/retail/merch/sales/order/manager/detail/basis
     */
    export namespace listOrderBasisInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderInfoResponse
      export const init: Response
      export function request(params: Params): Promise<defs.OrderInfoResponse>
    }

    /**
     * 根据ID获取订单商家信息(下单商家/供应商)
     * /api/retail/merch/sales/order/manager/detail/customer
     */
    export namespace getCustomerInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderCustomerResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderCustomerResponse>
    }

    /**
     * 根据ID获取订单优惠信息
     * /api/retail/merch/sales/order/manager/detail/discounts
     */
    export namespace listOrderDiscounts {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = Array<defs.OrderDiscountsResponse>
      export const init: Response
      export function request(
        params: Params
      ): Promise<Array<defs.OrderDiscountsResponse>>
    }

    /**
     * 根据ID获取订单商品信息
     * /api/retail/merch/sales/order/manager/detail/goods
     */
    export namespace listOrderGoodsDetailInfo {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = Array<defs.OrderDetailResponse>
      export const init: Response
      export function request(
        params: Params
      ): Promise<Array<defs.OrderDetailResponse>>
    }

    /**
     * 根据ID获取订单发票信息
     * /api/retail/merch/sales/order/manager/detail/invoice
     */
    export namespace listOrderInvoice {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderInvoiceResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderInvoiceResponse>
    }

    /**
     * 根据ID获取订单物流信息
     * /api/retail/merch/sales/order/manager/detail/logistics
     */
    export namespace listOrderLogistics {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderLogisticsResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderLogisticsResponse>
    }

    /**
     * 根据ID获取订单状态信息
     * /api/retail/merch/sales/order/manager/detail/status
     */
    export namespace listOrderStatus {
      export class Params {
        /** 订单ID */
        orderId: string
      }

      export type Response = defs.OrderDetailStatusResponse
      export const init: Response
      export function request(
        params: Params
      ): Promise<defs.OrderDetailStatusResponse>
    }

    /**
     * 分页获取订单列表
     * /api/retail/merch/sales/order/manager/page
     */
    export namespace pageOrder {
      export class Params {}

      export type Response = defs.IwubidaPageResult<
        defs.OrderPageInfoDetailReponse
      >
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.OrderCustomerPageRequest
      ): Promise<defs.IwubidaPageResult<defs.OrderPageInfoDetailReponse>>
    }
  }

  /**
   * 物必达经销商平台用户对话接口 --程小洪
   */
  export namespace session {
    /**
     * 根据Token换取商户信息
     * /api/retail/merch/session/check/mobile
     */
    export namespace checkMobile {
      export class Params {
        /** mobile */
        mobile: string
      }

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<boolean>>
    }

    /**
     * 登录
     * /api/retail/merch/session/create
     */
    export namespace create {
      export class Params {}

      export type Response = defs.Result<string>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.SessionCreateRequest
      ): Promise<defs.Result<string>>
    }

    /**
     * 根据Token换取商户信息
     * /api/retail/merch/session/customerInfo
     */
    export namespace getCustomerInfo {
      export class Params {}

      export type Response = defs.CustomerResponse
      export const init: Response
      export function request(params: Params): Promise<defs.CustomerResponse>
    }

    /**
     * 注册
     * /api/retail/merch/session/register
     */
    export namespace registerBuyer {
      export class Params {}

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.BuyerRegisterRequest
      ): Promise<defs.Result<boolean>>
    }

    /**
     * 发送验证码
     * /api/retail/merch/session/send_valid_code
     */
    export namespace sendValidCode {
      export class Params {
        /** mobile */
        mobile: string
      }

      export type Response = defs.Result<boolean>
      export const init: Response
      export function request(params: Params): Promise<defs.Result<boolean>>
    }
  }

  /**
   * 后端Swager接口测试--前端可忽略此接口
   */
  export namespace xxx {
    /**
     * get测试参数映射
     * /api/retail/merch/demo/get
     */
    export namespace get {
      export class Params {
        /** 名称 */
        name?: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * post测试参数映射
     * /api/retail/merch/demo/post
     */
    export namespace post {
      export class Params {
        /** 名称 */
        name?: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }

    /**
     * postBody测试参数映射
     * /api/retail/merch/demo/postBody
     */
    export namespace postBody {
      export class Params {}

      export type Response = defs.Result
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.XxxxRequest
      ): Promise<defs.Result>
    }

    /**
     * postUpload文件映射测试,单个文件上传multipart/form-data上传文件
     * /api/retail/merch/demo/postUpload
     */
    export namespace postUpload {
      export class Params {
        /** 名称 */
        name?: string
      }

      export type Response = defs.Result
      export const init: Response
      export function request(params: Params): Promise<defs.Result>
    }
  }
}
