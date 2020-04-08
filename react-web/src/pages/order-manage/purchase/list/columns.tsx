import React from 'react'
import { Button } from 'antd'
import classnames from 'classnames'
import moment from 'moment'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { PURCHASE_ORDER_DETAIL } from '@/router/config/order-manage/path'

type Order = defs.OrderPageInfoDetailReponse

// const buylerTypeMap = {
//   '2': '生产商',
//   '3': '经销商',
//   '4': '代理商',
//   '5': '企业',
//   '6': '消费者'
// }

// const sellerMap = {
//   '2': '生产商',
//   '4': '代理商'
// }

// const payChannelMap = {
//   '1': '微信',
//   '2': '支付宝',
//   '3': '银联',
//   '4': '线下'
// }

// const payWayMap = {
//   '1': '全款支付',
//   '2': '定金支付',
//   '3': '货到付款',
//   '4': '货到月结'
// }

// const statusMap = {
//   1: '待付款',
//   2: '代发货',
//   3: '待收货',
//   4: '已完成',
//   5: '已取消',
//   6: '已拒绝'
// }

// const payStatusMap = {
//   1: '未支付',
//   2: '已支付',
//   3: '退款中',
//   4: '已退款',
//   5: '部分退款',
//   6: '部分支付',
//   7: '已取消'
// }

// const productionStattusMap = {
//   1: '待接单',
//   2: '待生产',
//   3: '生产中',
//   4: '已生产'
// }

// const logisticsStatusMap = {
//   1: '代发货',
//   2: '配送中',
//   3: '已送达'
// }

function renderProviderInfo(value: string, record: Order): JSX.Element {
  return (
    <>
      <p className={classnames(styles.sellerName, styles.oneRowEllipse)}>{value}</p>
      <p className={styles.sellerType}>{record.sellerType}</p>
      <p className={styles.sellerCode}>
        <span>编码 </span>
        <span>{record.sellerId}</span>
      </p>
    </>
  )
}

function renderTime(value: string): React.ReactNode {
  return (
    <>
      <p className={styles.date}>{moment(value).format('YYYY-MM-DD')}</p>
      <p className={styles.time}>{moment(value).format('HH:mm')}</p>
    </>
  )
}

function renderPurchaseType(value: string, record: Order): JSX.Element {
  // todo: 接口原因暂时这么写了
  const payChannelStyle = record.payChannel === '线下' ? styles.purchaseOffline : styles.purchaseOnline
  return (
    <>
      <p className={styles.purchaseType}>{value}</p>
      <p style={{ marginTop: 5 }} className={payChannelStyle}>
        {record.payChannel}
      </p>
    </>
  )
}

function renderPayInfo(value: number, record: Order): JSX.Element {
  return (
    <>
      <p>
        <span className={styles.shouldPay}>应付：</span>
        <span className={styles.shouldPayCount}>￥{record.amountPayable}</span>
      </p>
      <p className={styles.paid}>
        已付：<span>￥{record.amountPaid}</span>
      </p>
      <p className={styles.waitForPay}>
        待付：<span className={classnames({ [styles.waitForPayCount]: record.balanceDue > 0 })}>￥{record.balanceDue}</span>
      </p>
    </>
  )
}

function renderOrderStatus(value: string, record: Order): JSX.Element {
  return (
    <div className={styles.orderStatusContainer}>
      <p className={styles.orderStatus}>
        订单：<span>{record.status}</span>
      </p>
      <p>
        支付：<span>{record.payStatus}</span>
      </p>
      <p>
        生产：<span>{record.productionStatus}</span>
      </p>
      <p>
        物流：<span>{record.logisticsStatus}</span>
      </p>
    </div>
  )
}

function renderOperation(): JSX.Element {
  return (
    <>
      <p style={{ textAlign: 'center' }}>
        <Button type="primary">预留</Button>
      </p>
      {/* <p className={styles.otherOpBtn}>预留功能</p> */}
    </>
  )
}

const columns = [
  {
    key: 'orderCode',
    title: '订单编号',
    dataIndex: 'id',
    width: 180,
    render: (value: string, record: Order) => (
      <Link to={{ pathname: PURCHASE_ORDER_DETAIL, search: `?orderId=${value}` }}>{record.orderId}</Link>
    )
  },
  {
    key: 'goodsInfo',
    title: '商品信息',
    width: 140,
    dataIndex: 'orderGoodsInfoResponseList',
    editable: true
  },
  {
    key: 'seller',
    title: '供应商',
    width: 120,
    dataIndex: 'sellerName',
    render: renderProviderInfo
  },
  {
    key: 'purchaseTime',
    title: '下单日期',
    width: 120,
    dataIndex: 'createTime',
    render: renderTime
  },
  {
    key: 'purchaseType',
    title: '支付方式',
    width: 120,
    dataIndex: 'payWay',
    render: renderPurchaseType
  },
  {
    key: 'cost',
    title: '金额',
    width: 120,
    dataIndex: 'amountPayable',
    render: renderPayInfo
  },
  {
    key: 'orderStatus',
    title: '订单状态',
    width: 130,
    dataIndex: 'status',
    render: renderOrderStatus
  },
  {
    key: 'operation',
    title: '操作',
    width: 120,
    align: 'center',
    render: renderOperation
  }
]

export default columns
