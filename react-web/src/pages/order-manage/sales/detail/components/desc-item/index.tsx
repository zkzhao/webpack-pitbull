import React from 'react'
import styles from './style.module.scss'
interface IProps {
  label: string
  labelWidth?: number
  align?: 'right' | 'default'
}

const DescItem: React.FC<IProps> = props => {
  const { align, labelWidth } = props
  return (
    <div className={styles.descItem}>
      <span style={{ width: `${labelWidth}px` }} className={align !== 'right' ? styles.descItemLabel : styles.descItemLabelRight}>
        {props.label}
      </span>
      <span className={styles.descItemValue}>{props.children}</span>
    </div>
  )
}

export default DescItem
