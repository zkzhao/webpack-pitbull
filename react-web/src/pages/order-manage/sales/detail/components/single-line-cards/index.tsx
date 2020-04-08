import React, { ReactNode } from 'react'
import styles from './style.module.scss'

interface IProps {
  left: ReactNode
  right: ReactNode
}
const SingerLineCards: React.FC<IProps> = props => {
  const { left, right } = props
  return (
    <div className={styles.container}>
      <div className={styles.orderCard}>{left}</div>
      <div className={styles.orderCard}>{right}</div>
    </div>
  )
}

export default SingerLineCards
