import React from 'react'
import { Row, Col, Popover, Descriptions } from 'antd'
import styles from './style.module.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons'

interface IProps {
  orderInfo: defs.OrderDetailStatusResponse
}

const OrderInfoStatus: React.FC<IProps> = props => {
  const { orderInfo } = props
  return (
    <Row className={styles.container} gutter={24}>
      <Col className={styles.card} span={6}>
        <div className={styles.cardWrap}>
          <div className={styles.cardBody}>
            <div className="info">
              <span className={styles.cardTitle}>订单状态</span>
              <h3 className={styles.cardStatusText}>{orderInfo.orderStatusDesc}</h3>
            </div>
            <Popover
              title="订单状态"
              content={
                <div style={{ display: 'inline-block', maxWidth: '240px' }}>
                  <Descriptions column={1}>
                    {orderInfo.orderStatus &&
                      orderInfo.orderStatus.map((di, index) => (
                        <Descriptions.Item key={index} label={di.statusDesc}>
                          {di.createTime}
                        </Descriptions.Item>
                      ))}
                  </Descriptions>
                </div>
              }
            >
              <ExclamationCircleOutlined className={styles.cardStatusIcon} />
            </Popover>
          </div>
          <div className={styles.cardFooter}>
            {orderInfo.orderStatus && orderInfo.orderStatus.length ? (
              <>
                {orderInfo.orderStatus[0].statusDesc}：<span>{orderInfo.orderStatus[0].createTime}</span>
              </>
            ) : (
              '-'
            )}
          </div>
        </div>
      </Col>
      <Col className={styles.card} span={6}>
        <div className={styles.cardWrap}>
          <div className={styles.cardBody}>
            <div className="info">
              <span className={styles.cardTitle}>支付状态</span>
              <h3 className={styles.cardStatusText}>{orderInfo.orderPayStatusDesc}</h3>
            </div>
            <Popover
              title="支付状态"
              content={
                <div style={{ display: 'inline-block', maxWidth: '240px' }}>
                  <Descriptions column={1}>
                    {orderInfo.orderPayStatus &&
                      orderInfo.orderPayStatus.map((di, index) => (
                        <Descriptions.Item key={index} label={di.statusDesc}>
                          {di.createTime}
                        </Descriptions.Item>
                      ))}
                  </Descriptions>
                </div>
              }
            >
              <ExclamationCircleOutlined className={styles.cardStatusIcon} />
            </Popover>
          </div>
          <div className={styles.cardFooter}>
            {orderInfo.orderPayStatus && orderInfo.orderPayStatus.length ? (
              <>
                {orderInfo.orderPayStatus[0].statusDesc}：<span>{orderInfo.orderPayStatus[0].createTime}</span>
              </>
            ) : (
              '-'
            )}
          </div>
        </div>
      </Col>
      <Col className={styles.card} span={6}>
        <div className={styles.cardWrap}>
          <div className={styles.cardBody}>
            <div className="info">
              <span className={styles.cardTitle}>生产状态</span>
              <h3 className={styles.cardStatusText}>{orderInfo.orderProductStatusDesc}</h3>
            </div>
            <Popover
              title="生产状态"
              content={
                <div style={{ display: 'inline-block', maxWidth: '240px' }}>
                  <Descriptions column={1}>
                    {orderInfo.orderProductStatus &&
                      orderInfo.orderProductStatus.map((di, index) => (
                        <Descriptions.Item key={index} label={di.statusDesc}>
                          {di.createTime}
                        </Descriptions.Item>
                      ))}
                  </Descriptions>
                </div>
              }
            >
              <ExclamationCircleOutlined className={styles.cardStatusIcon} />
            </Popover>
          </div>
          <div className={styles.cardFooter}>
            {orderInfo.orderProductStatus && orderInfo.orderProductStatus.length ? (
              <>
                {orderInfo.orderProductStatus[0].statusDesc}：<span>{orderInfo.orderProductStatus[0].createTime}</span>
              </>
            ) : (
              '-'
            )}
          </div>
        </div>
      </Col>
      <Col className={styles.card} span={6}>
        <div className={styles.cardWrap}>
          <div className={styles.cardBody}>
            <div className="info">
              <span className={styles.cardTitle}>物流状态</span>
              <h3 className={styles.cardStatusText}>{orderInfo.orderLogisticsStatusDesc}</h3>
            </div>
            <Popover
              title="物流状态"
              content={
                <div style={{ display: 'inline-block', maxWidth: '240px' }}>
                  <Descriptions column={1}>
                    {orderInfo.orderLogisticsStatus &&
                      orderInfo.orderLogisticsStatus.map((di, index) => (
                        <Descriptions.Item key={index} label={di.statusDesc}>
                          {di.createTime}
                        </Descriptions.Item>
                      ))}
                  </Descriptions>
                </div>
              }
            >
              <ExclamationCircleOutlined className={styles.cardStatusIcon} />
            </Popover>
          </div>
          <div className={styles.cardFooter}>
            {orderInfo.orderLogisticsStatus && orderInfo.orderLogisticsStatus.length ? (
              <>
                {orderInfo.orderLogisticsStatus[0].statusDesc}：<span>{orderInfo.orderLogisticsStatus[0].createTime}</span>
              </>
            ) : (
              '-'
            )}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default OrderInfoStatus
