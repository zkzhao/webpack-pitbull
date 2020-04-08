import React, { useEffect } from 'react'
import { Tabs, Card, Descriptions, Button, Popover } from 'antd'
import { IDispatch } from '@/models/connect'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { namespace, IState } from '@/models/order-manage/sales/detail'
import { connect } from 'react-redux'
import OrderInfo from './components/order-info'
import OrderInfoStatus from './components/order-info-status'
import SingerLineCards from './components/single-line-cards'
import GoodsInfo from './components/goods-info'
import DescItem from './components/desc-item'
import styles from './style.module.scss'
import { useLocation, useHistory } from 'react-router-dom'
import { covertSearch2Obj } from '@/utils'
const { TabPane } = Tabs
const { Item } = Descriptions

interface IProps extends IState, IDispatch {}

const OrderManageDetail: React.FC<IProps> = props => {
  const { dispatch, baseInfo, logisticsInfo, discountInfo, goodsInfo, invoiceInfo, orderStatus, customerInfo } = props
  const buyerInfo = customerInfo.buyerInfo || {}
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    const temp: any = covertSearch2Obj(location.search)
    if (temp.orderId && typeof temp.orderId !== 'undefined') {
      dispatch({
        type: `${namespace}/init`,
        payload: { orderId: temp.orderId }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.container}>
      <OrderInfo info={baseInfo} />
      <Tabs tabBarGutter={33} tabBarStyle={{ paddingLeft: '25px' }} defaultActiveKey="1">
        <TabPane tab="订单信息" key="1">
          <section className={styles.sectionBody}>
            <OrderInfoStatus orderInfo={orderStatus} />
            <SingerLineCards
              left={
                <Card title="订单金额">
                  <Descriptions column={2}>
                    <Item label="应付金额">
                      <span className={styles.specText}>￥{Number(baseInfo.amountPayable).toFixed(2)}</span>（税率
                      {baseInfo.taxRate}
                      %）
                    </Item>
                    <Item label="商品原价">￥{Number(baseInfo.originalPrice).toFixed(2)}</Item>
                    <Item label="已付金额">￥{Number(baseInfo.amountPaid).toFixed(2)}</Item>
                    <Item label="订单优惠">
                      ￥{Number(baseInfo.preferentialPrice).toFixed(2)}
                      <Popover
                        title="优惠详情"
                        content={
                          <div style={{ display: 'inline-block', maxWidth: '150px' }}>
                            <Descriptions column={1}>
                              {discountInfo && discountInfo.length
                                ? discountInfo.map((di, index) => (
                                    <Descriptions.Item key={index} label={di.discountsTypeDesc}>
                                      ￥{di.preferentialPrice}
                                    </Descriptions.Item>
                                  ))
                                : null}
                            </Descriptions>
                          </div>
                        }
                      >
                        <ExclamationCircleOutlined className={styles.detailIcon} style={{ marginLeft: '8px' }} />
                      </Popover>
                    </Item>
                    <Item label="待付金额">
                      <span className={styles.redText}>￥{Number(baseInfo.balanceDue).toFixed(2)}</span>
                    </Item>
                    <Item label="本单收取平台服务费">￥{Number(baseInfo.servicePrice).toFixed(1)}</Item>
                  </Descriptions>
                </Card>
              }
              right={
                <Card title="支付信息">
                  <Descriptions column={2}>
                    <Item label="支付金额">￥{Number(baseInfo.payAmount).toFixed(2)}</Item>
                    <Item label="支付状态">{baseInfo.payStatusDesc}</Item>
                    <Item label="支付方式">{baseInfo.payWayDesc}</Item>
                    <Item label="支付渠道">{baseInfo.payChannelDesc}</Item>
                  </Descriptions>
                </Card>
              }
            />
            <Card title="下单商家">
              <Descriptions column={2}>
                <Item label="商家名称">{buyerInfo.memberName}</Item>
                <Item label="商家类型">{buyerInfo.memberTypeDesc}</Item>
                <Item label="联系方式">{buyerInfo.mobile}</Item>
                <Item label="商家编号">{buyerInfo.id}</Item>
              </Descriptions>
              <DescItem label="联系地址">
                {buyerInfo.provinceName} {buyerInfo.cityName}
                {buyerInfo.districtName}
                {buyerInfo.address}
              </DescItem>
            </Card>
            <SingerLineCards
              left={
                <Card title="发票信息" extra={<Button>修改发票</Button>}>
                  <Descriptions column={2}>
                    <Item label="发票状态">{invoiceInfo.statusDesc}</Item>
                    <Item label="发票类型">{invoiceInfo.typeDesc}</Item>
                  </Descriptions>
                  <Descriptions column={1}>
                    <Item label="发票抬头">{invoiceInfo.title}</Item>
                    <Item label="发票内容">{invoiceInfo.content}</Item>
                  </Descriptions>
                  <DescItem label="发票明细">
                    {invoiceInfo.identifyNumber} / {invoiceInfo.unitAddress} / {invoiceInfo.mobile} / {invoiceInfo.bank}
                  </DescItem>
                </Card>
              }
              right={
                <Card title="物流信息" extra={<Button>修改物流</Button>}>
                  <div>
                    <DescItem align="right" label="物流方式">
                      {logisticsInfo.wayDesc}
                    </DescItem>
                    <DescItem align="right" label={logisticsInfo.way === 1 ? '配送信息' : '自提地址'}>
                      {logisticsInfo.address}
                    </DescItem>
                    {logisticsInfo.way === 1 ? (
                      <>
                        <DescItem align="right" label="物流商">
                          {logisticsInfo.logisticsProvider}
                        </DescItem>
                        <DescItem align="right" label="发货单号">
                          <span className={styles.blueText}>{logisticsInfo.sendCode}</span>
                        </DescItem>
                      </>
                    ) : null}
                  </div>
                </Card>
              }
            />
            <div className={styles.center}>
              <Button onClick={() => history.goBack()}>返回</Button>
            </div>
          </section>
        </TabPane>
        <TabPane tab="商品信息" key="2">
          <section className={styles.sectionBody}>
            <GoodsInfo list={goodsInfo} />
            <div className={styles.center}>
              <Button onClick={() => history.goBack()}>返回</Button>
            </div>
          </section>
        </TabPane>
      </Tabs>
    </section>
  )
}

const mapStateToProps = models => ({
  baseInfo: models[namespace].baseInfo,
  logisticsInfo: models[namespace].logisticsInfo,
  discountInfo: models[namespace].discountInfo,
  goodsInfo: models[namespace].goodsInfo,
  invoiceInfo: models[namespace].invoiceInfo,
  orderStatus: models[namespace].orderStatus,
  customerInfo: models[namespace].customerInfo
})

export default connect(mapStateToProps)(OrderManageDetail)
