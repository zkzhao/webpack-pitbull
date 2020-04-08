import React, { useEffect, useState } from 'react'
import { Table, Input } from 'antd'
import { IDvaState, namespace } from '@/models/order-manage/sales/list'
import { connect } from 'react-redux'
import { IDispatch } from '@/models/connect'
import styles from './style.module.scss'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import columns from './columns'
import { ListLayout, ActionHeader, Content } from '@/pages/layout/list-layout'

const Search = Input.Search

interface IProps extends IDvaState, IDispatch {}

type Order = defs.OrderPageInfoDetailReponse

interface GoodsInfoCellProps {
  record: Order
  dataIndex: string
  editable: boolean
  children: any
}

const OrderInfoCell: React.FC<GoodsInfoCellProps> = ({ record, dataIndex, editable, children, ...restProps }) => {
  const [openStatus, setOpenStatus] = useState(false)
  function toggleOpenStatus() {
    const currentOpenStatus = !openStatus
    setOpenStatus(currentOpenStatus)
  }
  if (!editable) {
    return <td {...restProps}>{children}</td>
  }
  // bugfix: data在某种极端情况下为undefined
  let data = []
  if (record && record.orderGoodsInfoResponseList) {
    data = [...record.orderGoodsInfoResponseList]
  }
  return (
    <td {...restProps}>
      <div className={classnames(styles.orderInfoContainer, { [styles.orderInfoContainerClose]: !openStatus })}>
        <div className={styles.itemList}>
          {data.map(item => (
            <p className={styles.item}>{item.goodsName}</p>
          ))}
        </div>
        <div className={styles.countList}>
          {data.map(item => (
            <p className={styles.count}>X{item.number}</p>
          ))}
        </div>
      </div>
      {data.length > 3 ? (
        <p onClick={toggleOpenStatus} className={styles.moreBtn}>
          <span style={{ marginRight: 4 }}>{openStatus ? '收起' : '展开'}</span>
          {openStatus ? <UpOutlined /> : <DownOutlined />}
        </p>
      ) : null}
    </td>
  )
}

const OrderList: React.FC<IProps> = ({ orderList, dispatch, totalCount }) => {
  const [page, setPage] = useState(1)
  const [keywords, setKeywords] = useState('')
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const defaultPageOptions = {
    page: 1,
    size: 50
  }
  function fetchOrderList(keywords = '', page = 1) {
    dispatch({
      type: `${namespace}/querySalesOrderList`,
      payload: {
        ...defaultPageOptions,
        keywords,
        page
      }
    })
  }
  useEffect(() => {
    fetchOrderList()
    return () => dispatch({ type: `${namespace}/clearData` })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  function handleSearchChange(value: string) {
    // 发起请求抓取数据
    // if (value === '') return
    setPage(defaultPageOptions.page)
    fetchOrderList(value)
  }
  function handlePageChange(page: number) {
    setPage(page)
    fetchOrderList(keywords, page)
  }
  function handleSelectChange(selectedRowKeys) {
    setSelectedRowKeys(selectedRowKeys)
  }
  function handleClearInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setKeywords(value)
    if (value === '') {
      setPage(defaultPageOptions.page)
      fetchOrderList()
    }
  }
  const components = {
    body: {
      cell: OrderInfoCell
    }
  }
  const COLUMNS = columns.map(col => {
    if (col.editable) {
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex
        })
      }
    }
    return col
  })
  return (
    <ListLayout>
      <ActionHeader>
        <Search
          style={{ width: 400 }}
          placeholder="订单编号/下单商家查询"
          enterButton="查询"
          size="large"
          onSearch={handleSearchChange}
          onChange={handleClearInput}
          value={keywords}
        />
        <div className={styles.btnGroup}>
          {/* <Button>预留功能</Button> */}
          {/* <Button>预留功能</Button> */}
        </div>
      </ActionHeader>
      <Content>
        <Table
          rowKey="id"
          columns={COLUMNS as any}
          components={components as any}
          dataSource={orderList}
          className={styles.orderListTable}
          rowClassName={() => styles.row}
          tableLayout="fixed"
          pagination={{ total: totalCount, pageSize: defaultPageOptions.size, current: page, onChange: handlePageChange }}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys,
            onChange: handleSelectChange,
            columnWidth: 40
          }}
        />
      </Content>
    </ListLayout>
  )
}

const mapStateToProps = models => ({
  orderList: models[namespace].orderList,
  totalCount: models[namespace].totalCount
})

export default connect(mapStateToProps)(OrderList)
