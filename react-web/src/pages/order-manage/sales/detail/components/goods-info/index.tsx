import React from 'react'
import { Card, Table, Button, Popover } from 'antd'
import styles from './style.module.scss'

const columns = [
  { title: '品牌', dataIndex: 'brandName', key: 'brandName' },
  { title: '分类', dataIndex: 'categoryName', key: 'categoryName' },
  { title: '类型', dataIndex: 'goodsTypeDesc', key: 'goodsTypeDesc' },
  {
    title: '名称',
    dataIndex: 'goodsName',
    key: 'goodsName',
    render(text) {
      return text && text.length > 12 ? (
        <Popover content={<div style={{ width: '240px' }}>{text}</div>} title="名称">
          <span className={styles.normalText}>{`${text.slice(0, 12)}...`}</span>
        </Popover>
      ) : (
        <span className={styles.normalText}>{text}</span>
      )
    }
  },
  {
    title: '商品编码',
    dataIndex: 'specCode',
    key: 'specCode'
  },
  {
    title: '规格',
    dataIndex: 'goodsSpec',
    key: 'goodsSpec',
    render(text) {
      return text && text.length > 12 ? (
        <Popover content={<div style={{ width: '240px' }}>{text}</div>} title="规格">
          <span className={styles.normalText}>{`${text.slice(0, 12)}...`}</span>
        </Popover>
      ) : (
        <span className={styles.normalText}>{text}</span>
      )
    }
  },
  {
    title: '单价',
    dataIndex: 'preferentialPrice',
    key: 'preferentialPrice',
    render(text, record) {
      const { originalPrice } = record
      return (
        <>
          {typeof originalPrice !== 'undefined' ? <span className={styles.lineThroughText}>￥{originalPrice}</span> : null}
          <p className={styles.normalText}>￥{originalPrice - text}</p>
        </>
      )
    }
  },
  { title: '数量', dataIndex: 'number', key: 'number' },
  {
    title: '合计',
    dataIndex: 'subtotal',
    key: 'subtotal',
    render(text) {
      return <span className={styles.normalText}>￥{text}</span>
    }
  }
]
// const dataSource = [
//   {
//     brand: '赛科龙',
//     category: '赛科龙1号',
//     kinds: '整车',
//     name: '赛科龙RX4-07 旗舰拉力版…',
//     code: 'SKL864+66',
//     specification: '管式车架、倒置可调式前减、摇架单后减、前碟单卡钳浮动盘、后碟单卡钳固定盘、赛福ABS、德尔福电喷',
//     price: '￥25894',
//     quanity: 2,
//     total: '￥32324.02'
//   }
// ]

interface IProps {
  list: Array<defs.OrderDetailResponse>
}

function renderFooter(op, fp, total) {
  return (
    <div className={styles.tableFooter}>
      <p className={styles.tablePrice}>
        原价：<span>{Number(op).toFixed(2)}</span>
      </p>
      <p className={styles.tablePriceNow}>
        共{total}件商品，合计：<span>￥{Number(fp).toFixed(2)}</span>
      </p>
    </div>
  )
}

const GoodsInfo: React.FC<IProps> = props => {
  const { list } = props
  const op = list.reduce((acc, cur) => {
    return acc + Number(cur.number) * Number(cur.originalPrice)
  }, 0)
  const fp = list.reduce((acc, cur) => acc + Number(cur.subtotal), 0)
  const totalGoodQuanity = list.reduce((acc, cur) => acc + cur.number, 0)
  return (
    <Card title="商品信息" extra={<Button>修改商品</Button>}>
      <Table
        columns={columns}
        dataSource={list}
        rowKey={record => record.orderId.toString()}
        footer={() => renderFooter(op, fp, totalGoodQuanity)}
        pagination={{ hideOnSinglePage: true }}
      />
    </Card>
  )
}

export default GoodsInfo
