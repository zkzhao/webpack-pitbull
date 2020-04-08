import React, { useState } from 'react'
import { Card, Row, Col, Descriptions, Button, Modal, Input } from 'antd'
import styles from './style.module.scss'
import dayjs from 'dayjs'
import imgs from '../../images'
import DescItem from '../desc-item'
const { Item } = Descriptions

interface IProps {
  info: defs.OrderInfoResponse
}

// function renderUpdateBasicInfo() {}

const OrderInfo: React.FC<IProps> = props => {
  const { info } = props
  const [remark, setRemark] = useState(info.buyersNote)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Card bordered={false}>
      <Row style={{ padding: '0 8px' }}>
        <Col span={12}>
          <div className="order-number">
            <img src={imgs.Order} alt="订单图标" />
            <span className={styles.orderNumber}>订单号：{info.orderId}</span>
          </div>
          <Descriptions style={{ marginLeft: '44px', marginTop: '18px' }} column={2}>
            <Item label="下单商家">{info.buyerName}</Item>
            <Item label="第三方平台订单号">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={styles.link}>{info.code}</a>
            </Item>
            <Item label="联系方式">{info.mobile}</Item>
            <Item label="创建时间">{dayjs(info.createTime).format('YYYY-MM-DD')}</Item>
          </Descriptions>
          <div style={{ marginLeft: '44px' }}>
            <DescItem label="订单备注">
              <span className={styles.remarkTextRed}>{info.remark}</span>
              <img style={{ verticalAlign: 'middle', cursor: 'pointer' }} src={imgs.edit} alt="编辑" />
            </DescItem>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ textAlign: 'right' }}>
            <Button className={styles.editBtn} onClick={() => setModalVisible(true)}>
              修改基本信息
            </Button>
            <Button className={styles.editStatusBtn} type="primary">
              修改状态
            </Button>
          </div>
          <div style={{ textAlign: 'right', marginTop: '16px' }}>
            <div className={styles.orderInfoWrap}>
              <p>订单状态</p>
              <span>{info.statusDesc}</span>
            </div>
            <div className={styles.orderInfoWrap}>
              <p>订单金额</p>
              <span>￥{Number(info.payAmount).toFixed(2)}</span>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        cancelText="取消"
        okText="确定"
        title="修改基本信息"
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
        centered
      >
        <div>
          <DescItem labelWidth={130} align="right" label="第三方系统订单号">
            <Input disabled defaultValue={info.code} />
          </DescItem>
          <DescItem labelWidth={130} align="right" label="备注">
            <Input.TextArea autoSize={{ minRows: 6 }} value={remark} onChange={e => setRemark(e.target.value)} />
          </DescItem>
        </div>
      </Modal>
    </Card>
  )
}

export default OrderInfo
