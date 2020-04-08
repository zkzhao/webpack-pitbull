import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import styles from './style.module.scss'

interface IProps {
  title: string
  infos?: {
    title: string
    content: string
  }[]
  onClick?: () => void
  showExtra?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

const InfoCard: React.FC<IProps> = ({ title, infos, children, onClick = noop, showExtra = true }) => {
  if (children) {
    return (
      <Card
        className={styles.card}
        title={title}
        bordered={false}
        extra={showExtra ? <Button onClick={onClick}>修改{title}</Button> : ''}
      >
        <div className={styles.cardContent}>{children}</div>
      </Card>
    )
  }
  return (
    <Card
      className={styles.card}
      title={title}
      bordered={false}
      extra={showExtra ? <Button onClick={onClick}>修改{title}</Button> : ''}
    >
      <div className={styles.cardContent}>
        {infos.map(info => (
          <Row>
            <Col className={styles.title} lg={2} sm={4}>
              <span>{info.title}：</span>
            </Col>
            <Col lg={20} sm={18}>
              <span>{info.content}</span>
            </Col>
          </Row>
        ))}
      </div>
    </Card>
  )
}

export default InfoCard
